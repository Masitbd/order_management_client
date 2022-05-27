import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const MyReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const {
    isLoading,
    error,
    data: items,
  } = useQuery("itemsData", () =>
    //fetch("https://electrix-server.herokuapp.com/item").then((res) =>
    fetch("http://localhost:5000/item").then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;
  const onSubmit = (data) => {
    const uri = `http://localhost:5000/review`;
    //const uri = `https://limitless-caverns-64590.herokuapp.com/item`;
    fetch(uri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {});
    handleSubmit({});
    console.log(data);
    reset();
    toast.success("One record added successfully");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mt-8">
          <label className="text-orange-500">Select item</label>
          <select className="h-8" {...register("product")}>
            {items.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
          <label className="text-orange-500">Select rating</label>
          <select className="h-8" {...register("rating")}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <textarea
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs h-24 my-3"
            {...register("description", {
              required: {
                value: true,
                message: "Description required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyReview;

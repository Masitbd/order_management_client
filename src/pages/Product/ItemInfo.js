import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ItemInfo = () => {
  const [itemInfo, setItemInfo] = useState({});
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then((response) => response.json())
      .then((data) => setItemInfo(data));
  }, [id]);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  /*  if (user) {
    alert(user);
    //navigate(`/itemInfo/${id}`);
  } */

  /*   const handleSubmit = (e) => {
    e.previentDefault();
    console.log(itemInfo.name);
    navigate(`/itemInfo`);
  }; */

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2">
      <div className="mx-16">
        <div class="card w-full bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Item information</h2>
            <img src={itemInfo.img} className="w-40 h-40" alt="" />
            <p>{itemInfo.name}</p>
            <p>{itemInfo.description}</p>
            <p>{itemInfo.qty}</p>
            <p>{itemInfo.price}</p>
            <p>{itemInfo.available}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-full bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4 justify-items-center "
            >
              <input
                type="email"
                value={user.email}
                placeholder="Enter your email"
                class="input input-bordered w-full max-w-xs input-accent"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },

                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <input
                type="text"
                placeholder="Enter your name"
                value={itemInfo.name}
                class="input input-bordered w-full max-w-xs input-accent"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />

              <input
                type="text"
                placeholder="Description"
                value={itemInfo.description}
                class="input input-bordered w-full max-w-xs input-accent"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />

              <input
                type="number"
                placeholder="Enter qty"
                class="input input-bordered w-full max-w-xs input-accent"
                {...register("qty", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />

              <input
                type="text"
                name="orderqty"
                placeholder="your order qty"
                class="input input-bordered w-full max-w-xs"
              />
              <input
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                type="submit"
                value="Add item"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;

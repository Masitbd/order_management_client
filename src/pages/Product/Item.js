import React from "react";

const Item = ({ item }) => {
  const { id, name, description, img, qty, Price, available } = item;

  return (
    <div className="">
      <div class="card bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" className="h-36 w-36" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

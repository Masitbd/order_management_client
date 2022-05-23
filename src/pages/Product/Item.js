import React from "react";

const Item = ({ item, setModalItem }) => {
  const { id, name, description, img, qty, Price, available } = item;

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="h-36 w-36" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            {/*  <button
              onClick={() => setModalItem(item)}
              className="btn btn-primary"
            >
              Buy Now
            </button> */}
            <label
              htmlFor="item-modal"
              onClick={() => setModalItem(item)}
              className="btn btn-sm btn-primary"
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

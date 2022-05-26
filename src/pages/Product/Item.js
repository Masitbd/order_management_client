import React from "react";
import { Link } from "react-router-dom";
import ItemInfo from "./ItemInfo";

const Item = ({ item, setModalItem }) => {
  const { _id, name, description, img, qty, Price, available } = item;

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
            <Link to={`/itemInfo/${_id}`}>
              <button
                /* onClick={() => setModalItem(item)} */
                className="btn btn-secondary btn-small"
              >
                More
              </button>
            </Link>
            {/*  <label
              htmlFor="item-modal"
              onClick={() => setModalItem(item)}
              className="btn btn-sm btn-primary"
            >
              Buy Now
            </label> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

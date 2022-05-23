import React from "react";

const ItemModal = ({ modalItem }) => {
  const { name, description, img, qty } = modalItem;
  return (
    <div>
      <input type="checkbox" id="item-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="item-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form className="grid grid-cols-1 gap-4 justify-items-center ">
            <input
              type="text"
              name="email"
              placeholder="Customer email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="itmeName"
              placeholder="Item name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="availableqty"
              placeholder="Available qty"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="minimumqty"
              placeholder="Minimum order qty"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="orderqty"
              placeholder="your order qty"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

import React from "react";

const Item = ({ item }) => {
  const { id, name, description, img, qty, Price, available } = item;
  console.log(id);
  return (
    <div>
      <p>item name is{name}</p>
    </div>
  );
};

export default Item;

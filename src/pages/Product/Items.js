import React from "react";
import { useQuery } from "react-query";
import Item from "./Item";

const Items = () => {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery("itemsData", () =>
    fetch("./items.json").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {items.map((item) => (
        // console.log(item)
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;

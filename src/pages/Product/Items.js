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
      <h2 className="text-xl font-thin text-center mt-8">FEATURED</h2>
      <h1 className="text-3xl font-bold text-center text-secondary">TOOLS</h1>
      <div className="grid grid-cols-3 gap-4 px-16 mx-auto">
        {items.slice(0, 6).map((item) => (
          // console.log(item)
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Items;

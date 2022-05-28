import React, { useState } from "react";
import { useQuery } from "react-query";
import RequireAuth from "../Login/RequireAuth";
import Item from "./Item";
import ItemInfo from "./ItemInfo";
import ItemModal from "./ItemModal";

const Items = () => {
  const [modalItem, setModalItem] = useState(null);
  const {
    isLoading,
    error,
    data: items,
  } = useQuery("itemsData", () =>
    // fetch("http://localhost:5000/item").then((res) => res.json())
    fetch("https://electrix-server.herokuapp.com/item").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h2 className="text-xl font-thin text-center mt-8">FEATURED</h2>
      <h1 className="text-3xl font-bold text-center text-secondary">TOOLS</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 px-16 mx-auto">
        {items.slice(0, 6).map((item) => (
          // console.log(item)
          <Item key={item.id} item={item} setModalItem={setModalItem} />
        ))}
      </div>
      {modalItem && <ItemModal modalItem={modalItem} />}
    </div>
  );
};

export default Items;

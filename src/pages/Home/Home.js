import React from "react";
import Items from "../Product/Items";
import Info from "./Info";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Items />
      <Info />
    </div>
  );
};

export default Home;

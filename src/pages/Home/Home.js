import React from "react";
import Items from "../Product/Items";
import CurrentStatus from "./CurrentStatus";
import Info from "./Info";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Items />
      <Info />
      <CurrentStatus />
    </div>
  );
};

export default Home;

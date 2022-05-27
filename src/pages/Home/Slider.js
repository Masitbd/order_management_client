import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://img.freepik.com/free-vector/abstract-blue-lights-background_1182-609.jpg?t=st=1653569958~exp=1653570558~hmac=b1c325757f0a054308efd989f152774198fb722e2d4b601d28ad5abd4268e1e8"
          alt=""
          className="w-full h-72"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-vector/electric-thunderbolt-strike-set-blue-color-during-night_107791-4934.jpg?t=st=1653569958~exp=1653570558~hmac=721dd4ed6c688c0421c79abaf2b3c8cd84469bafb94ab1b8000d9106b31a31dc"
          alt=""
          className="w-full h-72"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-vector/gas-charger-station-with-oil-pump-cable-with-plug-electric-car-solar-panels-wind-turbines-road-city-vector-cartoon-night-landscape-with-empty-fuel-filling-station_107791-10128.jpg?t=st=1653570819~exp=1653571419~hmac=cf463012e72733a5fe37eb65671c8c0be0955e3b6d4e417c37b727833d952874"
          alt=""
          className="w-full h-72"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-vector/powerful-electrical-discharge-hitting-from-side-side-realistic_33099-960.jpg?t=st=1653570624~exp=1653571224~hmac=2762825c8da509819a27d3fbbc3b1efadb5fa13c2a24aeb9519df709e8ed787e"
          alt=""
          className="w-full h-72"
        />
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;

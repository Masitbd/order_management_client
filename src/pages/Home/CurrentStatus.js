import React from "react";

const CurrentStatus = () => {
  return (
    <div className="stats bg-slate-100 stats-vertical  shadow grid lg:grid-cols-3 sm:grid-cols-1 mx-8 py-8">
      <div className="grid items-center mx-auto ">
        <div className="stat items-center">
          <div className="stat-title">Current Customers</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - May 28</div>
        </div>
      </div>
      <div className="grid items-center mx-auto ">
        <div className="stat items-center">
          <div className="stat-title">Available Items</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
      </div>
      <div className="grid items-center mx-auto ">
        <div className="stat items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStatus;

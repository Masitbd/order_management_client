import React from "react";

const CurrentStatus = () => {
  return (
    <div class="stats bg-slate-100 stats-vertical lg:stats-horizontal shadow grid lg:grid-cols-3 sm:grid-cols-1 mx-6">
      <div className="grid items-center mx-auto ">
        <div class="stat items-center">
          <div class="stat-title">Current Customers</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">Jan 1st - May 28</div>
        </div>
      </div>
      <div>
        <div class="stat grid lg:grid-cols-3 sm:grid-cols-1 mx-16">
          <div class="stat-title">Available Items</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
      </div>
      <div>
        <div class="stat grid lg:grid-cols-3 sm:grid-cols-1 mx-16">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStatus;

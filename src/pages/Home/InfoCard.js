import React from "react";

const InfoCard = ({ img, cardTitle, cardDescription, bgColor }) => {
  return (
    <div className={`card card-side ${bgColor}`}>
      <div className="inline-block bg-white rounded-full h-32 my-auto ml-3">
        <figure>{img}</figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default InfoCard;

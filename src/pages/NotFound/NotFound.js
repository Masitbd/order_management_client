import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex">
        <a className="button" href="./home">
          <i className="icon-home"></i> Go back in initial page, is better.
        </a>
      </div>
      <div className="mb-5">
        <h1 className="error-page">404</h1>
        <p className="error-text">Oops! Something is wrong.</p>
      </div>
    </div>
  );
};

export default NotFound;

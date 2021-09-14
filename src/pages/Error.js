import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page-container">
      <h1 id="error-page-heading">The Page Does Not Exist</h1>

      <Link to="/photography-portfolio" id="error-page-home-btn">
        Back Home
      </Link>
    </div>
  );
};

export default Error;

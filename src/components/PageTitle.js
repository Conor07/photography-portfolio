import React from "react";

const PageTitle = ({ text }) => {
  return (
    <>
      <div className="page-title">
        <h1 className="page-title-text">{text}</h1>
        <span className="header-line"></span>
      </div>
    </>
  );
};

export default PageTitle;

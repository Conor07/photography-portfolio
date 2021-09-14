import React from "react";

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        <h4 id="footer-main-text">
          &copy; Conor Talbot&nbsp;
          <span id="footer-date">{new Date().getFullYear()}</span>
        </h4>
      </div>
    </>
  );
};

export default Footer;

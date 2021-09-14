import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackToVideographyButton = () => {
  return (
    <>
      <Link to="/videography" className="btn back-to-videography-btn">
        <FontAwesomeIcon
          id="back-to-videography-back-arrow"
          icon={faArrowLeft}
        />{" "}
        Videography
      </Link>
    </>
  );
};

export default BackToVideographyButton;

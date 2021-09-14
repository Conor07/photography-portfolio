import React from "react";
import { Link } from "react-router-dom";

const VideographyContents = ({ linkTo, buttonText, thumbnailImage }) => {
  return (
    <div className="page-subcontainer videography-contents-subcontainer">
      <Link to={linkTo} className="btn videography-subpage-btn">
        {buttonText}
      </Link>

      <img
        className="videography-thumbnail-image"
        src={thumbnailImage}
        alt="Videography Thumbnail"
      />
    </div>
  );
};

export default VideographyContents;

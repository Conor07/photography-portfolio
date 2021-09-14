import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useGlobalContext } from "../context";

const FullscreenActiveImage = () => {
  const { unsplitImagesData } = useGlobalContext();
  const { id } = useParams();

  // I think not using state/dispatch for this is correct as I want the fullscreen image to be for the specific url the user has landed on, so only this page needs the information when in the useEffect below.

  const [image, setImage] = useState({ id: "", name: "" });

  useEffect(() => {
    if (unsplitImagesData.length > 0) {
      setImage(unsplitImagesData[id - 1]);
    }
  }, [unsplitImagesData, id]);

  if (unsplitImagesData.length < 1) {
    return (
      <div id="fullscreen-image-loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div id="fullscreen-image-page-container" className="page-container">
      <div id="fullscreen-image-contents-container">
        <div id="back-to-photography-button-container">
          <Link to="/photography" id="back-to-photography-btn">
            <FontAwesomeIcon
              id="back-to-videography-back-arrow"
              icon={faArrowLeft}
            />{" "}
            Photography
          </Link>
        </div>

        <div id="fullscreen-image-container">
          <img src={image.name} alt={image.name} />
        </div>
      </div>
    </div>
  );
};

export default FullscreenActiveImage;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faExpandArrowsAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { useGlobalContext } from "../context";

const ActiveImageModal = () => {
  const { dispatch, unsplitImagesData, activeImage } = useGlobalContext();

  const activeImageIndex = activeImage.id - 1;
  const lastUnsplitImagesDataIndex = unsplitImagesData.length - 1;

  const activeImagePrevious = () => {
    if (activeImageIndex !== 0) {
      const prevActiveImage = unsplitImagesData[activeImageIndex - 1];

      dispatch({ type: "UPDATE_ACTIVE_IMAGE", payload: prevActiveImage });
    }
  };

  const activeImageNext = () => {
    if (activeImageIndex !== lastUnsplitImagesDataIndex) {
      const nextActiveImage = unsplitImagesData[activeImageIndex + 1];

      dispatch({ type: "UPDATE_ACTIVE_IMAGE", payload: nextActiveImage });
    }
  };

  useEffect(() => {
    // Change the opacity of the ".change-active-image" buttons if on the first or last image:

    let previousActiveImageButton = document.getElementById(
      "active-image-previous"
    );
    let nextActiveImageButton = document.getElementById("active-image-next");

    if (previousActiveImageButton && nextActiveImageButton) {
      const previousActiveImageButtonClasses =
        previousActiveImageButton.classList;

      const nextActiveImageButtonClasses = nextActiveImageButton.classList;

      if (
        activeImageIndex === 0 &&
        !previousActiveImageButtonClasses.contains(
          "change-active-image-opacity"
        )
      ) {
        previousActiveImageButtonClasses.add("change-active-image-opacity");
      } else if (
        previousActiveImageButtonClasses.contains("change-active-image-opacity")
      ) {
        previousActiveImageButtonClasses.remove("change-active-image-opacity");
      }
      if (
        activeImageIndex === lastUnsplitImagesDataIndex &&
        !nextActiveImageButtonClasses.contains("change-active-image-opacity")
      ) {
        nextActiveImageButtonClasses.add("change-active-image-opacity");
      } else if (
        nextActiveImageButtonClasses.contains("change-active-image-opacity")
      ) {
        nextActiveImageButtonClasses.remove("change-active-image-opacity");
      }
    }
  }, [activeImage, activeImageIndex, lastUnsplitImagesDataIndex]);

  if (!activeImage) {
    return null;
  }

  // Must add "<div id="portal"></div>" under "<div id="root"></div>" in public/index.html for ReactDOM.createPortal to work
  return ReactDOM.createPortal(
    <>
      <div id="active-image-background-overlay" />

      <div id="active-image-container" data-testid="active-image-container">
        <div id="active-image-controls-container">
          <button
            className="change-active-image"
            id="active-image-previous"
            onClick={activeImagePrevious}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button
            id="close-active-image"
            onClick={() =>
              dispatch({
                type: "UPDATE_ACTIVE_IMAGE",
                payload: "",
              })
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <button
            className="change-active-image"
            id="active-image-next"
            onClick={activeImageNext}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          <Link
            to={`/photography/${activeImage.id}`}
            id="fullscreen-active-image-link"
          >
            <button id="fullscreen-active-image">
              <FontAwesomeIcon icon={faExpandArrowsAlt} />
            </button>
          </Link>
        </div>

        <div id={`active-image-img-container`}>
          <img src={activeImage.name} alt={activeImage.id} />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ActiveImageModal;

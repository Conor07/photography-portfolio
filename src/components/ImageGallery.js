import React from "react";

import { useGlobalContext } from "../context";

import Photo from "./Photo";

import useWindowDimensions from "../utils/useWindowDimensions";

// Responsive Image Grid:
// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp

const ImageGallery = () => {
  const { imagesData, unsplitImagesData, mobileViewWidth } = useGlobalContext();

  const { width } = useWindowDimensions();

  // Reformat unsplitImagesData to the same format as imagesData
  const modifieldUnsplitImagesData = [unsplitImagesData];

  if (width < mobileViewWidth) {
    // Mobile Order of Photos:

    return (
      <div id="image-gallery" data-testid="image-gallery">
        {modifieldUnsplitImagesData.map((imgData, index) => {
          return <Photo key={index} imagesData={imgData} />;
        })}
      </div>
    );
  } else {
    // Desktop Order of Photos:

    return (
      <div id="image-gallery" data-testid="image-gallery">
        {imagesData.map((imgData, index) => {
          return <Photo key={index} imagesData={imgData} />;
        })}
      </div>
    );
  }
};

export default ImageGallery;

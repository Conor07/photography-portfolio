import { React, useEffect } from "react";
import { useGlobalContext } from "../context";
import ActiveImageModal from "../components/ActiveImageModal";
import PageTitle from "../components/PageTitle";

import ImageGallery from "../components/ImageGallery";

const Photography = () => {
  const { photoComponentPhotosLoading, imagesData } = useGlobalContext();

  useEffect(() => {
    const contents = document.querySelector("#photography-contents");

    if (!photoComponentPhotosLoading) {
      contents.classList.add("loaded");
    }
  }, [photoComponentPhotosLoading]);

  if (imagesData.length < 1) {
    return (
      <div className="page-container" data-testid="photography-container">
        <h1 id="images-error-message">Error: Images Failed To Load</h1>
      </div>
    );
  }

  return (
    <div className="page-container" data-testid="photography-page-container">
      <div id="photography-container">
        <PageTitle text="photography" />

        {photoComponentPhotosLoading ? (
          <div id="photography-loading-message">
            <h3>Loading Photos...</h3>
          </div>
        ) : null}

        <div id="photography-contents">
          <ActiveImageModal />

          <div className="page-subcontainer">
            <ImageGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;

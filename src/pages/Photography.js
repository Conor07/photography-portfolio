import { React, useEffect } from "react";
import { useGlobalContext } from "../context";
import { handlePageLoadAnimation } from "../utils/handlePageLoadAnimation";

import ActiveImageModal from "../components/ActiveImageModal";
import PageTitle from "../components/PageTitle";
import ImageGallery from "../components/ImageGallery";

// Wait 3s before adding page-loaded-once class to page container so the animation can occur once on the first render
const loadedOnceClassAnimationDelay = 3000;
const pageName = "photography";

const Photography = () => {
  const { photoComponentPhotosLoading, imagesData, pagesLoadedOnce, dispatch } =
    useGlobalContext();

  useEffect(() => {
    const contents = document.querySelector("#photography-contents");

    if (!photoComponentPhotosLoading) {
      contents.classList.add("loaded");
    }
  }, [photoComponentPhotosLoading]);

  useEffect(() => {
    handlePageLoadAnimation(
      pagesLoadedOnce,
      pageName,
      loadedOnceClassAnimationDelay,
      dispatch
    );
  }, [pagesLoadedOnce, dispatch]);

  if (imagesData.length < 1) {
    return (
      <div className="page-container" data-testid="photography-container">
        <h1 id="images-error-message">Error: Images Failed To Load</h1>
      </div>
    );
  }

  return (
    <div
      id="photography-page-container"
      // className="page-container"
      className={
        pagesLoadedOnce.includes(pageName)
          ? "page-container photography-page-container page-loaded-once"
          : "page-container photography-page-container"
      }
      data-testid="photography-page-container"
    >
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

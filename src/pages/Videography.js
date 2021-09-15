import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import { handlePageLoadAnimation } from "../utils/handlePageLoadAnimation";

import PageTitle from "../components/PageTitle";
import VideographyContents from "../components/VideographyContents";

const filmingPracticeThumbnailImage = `${process.env.PUBLIC_URL}/images/images_smaller_file_size_versions/filming_practice_screenshot_16_x_9_1.jpg`;

const musicVideosThumbnailImage = `${process.env.PUBLIC_URL}/images/images_smaller_file_size_versions/music_videos_image.jpg`;

// Wait 3s before adding page-loaded-once class to page container so the animation can occur once on the first render
const loadedOnceClassAnimationDelay = 3000;
const pageName = "videography";

const Videography = () => {
  const { pagesLoadedOnce, dispatch } = useGlobalContext();

  useEffect(() => {
    handlePageLoadAnimation(
      pagesLoadedOnce,
      pageName,
      loadedOnceClassAnimationDelay,
      dispatch
    );
  }, [pagesLoadedOnce, dispatch]);

  return (
    <div
      // className="page-container"
      className={
        pagesLoadedOnce.includes(pageName)
          ? "page-container videography-page-container page-loaded-once"
          : "page-container videography-page-container"
      }
    >
      <div id="videography-container">
        <PageTitle text="videography" />

        <div className="videography-contents">
          <VideographyContents
            linkTo="/quarantine-filming-practice"
            buttonText="Quarantine Filming Practice"
            thumbnailImage={filmingPracticeThumbnailImage}
          />
          <span className="horizontal-line"></span>

          <VideographyContents
            linkTo="/music-videos"
            buttonText="Music Videos"
            thumbnailImage={musicVideosThumbnailImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Videography;

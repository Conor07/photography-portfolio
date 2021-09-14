import React from "react";

import PageTitle from "../components/PageTitle";
import BackToVideographyButton from "../components/BackToVideographyButton";
import VideoWarnings from "../components/VideoWarnings";

const FilmingPractice = () => {
  return (
    <div className="page-container">
      <div id="quarantine-filming-practice-container">
        <PageTitle text="quarantine filming practice" />

        <BackToVideographyButton />

        <div id="quarantine-filiming-practice-contents">
          <div
            id="videography-subpage-text-container"
            className="page-subcontainer videography-subpage-subcontainer"
          >
            <h3 className="video-playback-quality-text">
              Please watch the video in 4K and full screen for the best quality.
            </h3>

            <span className="horizontal-line"></span>

            <VideoWarnings />
          </div>

          <span
            id="music-videos-horizontal-line"
            className="horizontal-line"
          ></span>

          <div
            id="videography-subpage-iframe-container"
            className="page-subcontainer videography-subpage-subcontainer"
          >
            <div className="video-container">
              <div className="h-iframe">
                <iframe
                  className="video-player"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/EktGjkSUX0w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmingPractice;

import React from "react";

import PageTitle from "../components/PageTitle";
import BackToVideographyButton from "../components/BackToVideographyButton";
import VideoWarnings from "../components/VideoWarnings";

const MusicVideos = () => {
  return (
    <div className="page-container">
      <div id="music-videos-container">
        <PageTitle text="music videos" />

        <BackToVideographyButton />

        <div
          id="music-videos-warnings-container"
          className="page-subcontainer videography-subpage-subcontainer"
        >
          <VideoWarnings />
        </div>

        <span className="horizontal-line"></span>

        <div id="music-videos-contents-container">
          <div className="page-subcontainer videography-subpage-subcontainer music-videos-contents-subcontainer">
            <h2 className="video-title">RichFX - Love My Music</h2>
            <h3 className="video-subtitle">(Dance Music Video)</h3>

            <div className="video-container music-video-container">
              <div className="h-iframe">
                <iframe
                  className="video-player"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VEcTYLemOHI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <span className="horizontal-line"></span>

          <div className="page-subcontainer videography-subpage-subcontainer music-videos-contents-subcontainer">
            <h2 className="video-title">Ten Feet Small- Free</h2>
            <h3 className="video-subtitle">(Recording Studio Music Video)</h3>

            <div className="video-container music-video-container">
              <div className="h-iframe">
                <iframe
                  className="video-player"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/AaiOHOfqmb8"
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

export default MusicVideos;

import React from "react";

import PageTitle from "../components/PageTitle";
import VideographyContents from "../components/VideographyContents";

const filmingPracticeThumbnailImage = `${process.env.PUBLIC_URL}/images/images_smaller_file_size_versions/filming_practice_screenshot_16_x_9_1.jpg`;

const musicVideosThumbnailImage = `${process.env.PUBLIC_URL}/images/images_smaller_file_size_versions/music_videos_image.jpg`;

const Videography = () => {
  return (
    <div className="page-container">
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

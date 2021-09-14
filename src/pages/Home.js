import React from "react";
import { Link } from "react-router-dom";

const backgroundImageURL = `${process.env.PUBLIC_URL}/images/images_smaller_file_size_versions/tree_trunks.jpg`;

const Home = () => {
  return (
    <div
      id="home-page-container"
      className="page-container fit-screen-page-container"
      data-testid="home-page-container"
    >
      <div id="home-container">
        <div id="home-text">
          <h2 id="home-main-text">Conor Talbot</h2>

          <h4 id="home-subtext">Photography & Videography</h4>

          <div className="home-page-buttons">
            <Link to="/photography" className="btn home-page-button">
              View Photography
            </Link>

            <Link to="/videography" className="btn home-page-button">
              View Videography
            </Link>
          </div>
        </div>

        <img
          src={backgroundImageURL}
          alt="home page background"
          id="home-background-image"
        />
      </div>
    </div>
  );
};

export default Home;

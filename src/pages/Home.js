import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { handlePageLoadAnimation } from "../utils/handlePageLoadAnimation";

const backgroundImageURL = `${process.env.PUBLIC_URL}/images/images_smaller_file_size_versions/tree_trunks.jpg`;

// Wait 3s before adding page-loaded-once class to page container so the animation can occur once on the first render
const loadedOnceClassAnimationDelay = 3000;
const pageName = "home";

const Home = () => {
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
      id="home-page-container"
      className={
        pagesLoadedOnce.includes(pageName)
          ? "page-container home-page-container fit-screen-page-container page-loaded-once"
          : "page-container home-page-container fit-screen-page-container"
      }
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

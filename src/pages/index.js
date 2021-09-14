import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages:
import Home from "./Home";
import Photography from "./Photography";
import FullscreenImage from "./FullscreenImage";
import Videography from "./Videography";
import QuarantineFilmingPractice from "./QuarantineFilmingPractice";
import MusicVideos from "./MusicVideos";
import Contact from "./Contact";
import Error from "./Error";

// Navbar & Footer:
import Navbar from "../components/Navbar";
import MobileNavLinks from "../components/MobileNavLinks";
import Footer from "../components/Footer";

import LoadNewPageAtTop from "../utils/LoadNewPageAtTop";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <MobileNavLinks />

      <LoadNewPageAtTop />
      <Switch>
        <Route path="/photography-portfolio">
          <Home />
        </Route>

        <Route exact path="/photography">
          <Photography />
        </Route>

        <Route path="/photography/:id">
          <FullscreenImage />
        </Route>

        <Route path="/videography">
          <Videography />
        </Route>

        <Route path="/quarantine-filming-practice">
          <QuarantineFilmingPractice />
        </Route>

        <Route path="/music-videos">
          <MusicVideos />
        </Route>

        <Route path="/contact-me">
          <Contact />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default ReactRouterSetup;

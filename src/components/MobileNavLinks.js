import React from "react";
import { NavLink } from "react-router-dom";

import useWindowDimensions from "../utils/useWindowDimensions";

import { useGlobalContext } from "../context";

const MobileNavLinks = () => {
  const { dispatch, burgerClick, mobileViewWidth } = useGlobalContext();

  const handleNavLinkClick = () => {
    dispatch({
      type: "UPDATE_BURGER_CLICK",
      payload: false,
    });

    dispatch({
      type: "UPDATE_MOBILE_NAV_LINKS_ACTIVE",
      payload: false,
    });

    dispatch({
      type: "UPDATE_ACTIVE_IMAGE",
      payload: "",
    });
  };

  const { width } = useWindowDimensions();

  if (width > mobileViewWidth) {
    return null;
  }

  return (
    <div
      id="mobile-navbar-container"
      className={burgerClick ? "nav-active" : null}
      data-testid="mobile-navbar-container"
    >
      <div id="mobile-navbar-links-container">
        <ul id="mobile-navbar-links">
          <li>
            <NavLink
              to="/photography-portfolio"
              className="mobile-navbar-link"
              activeClassName="active-navbar-link"
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/photography"
              className="mobile-navbar-link"
              activeClassName="active-navbar-link"
              onClick={handleNavLinkClick}
            >
              Photography
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/videography"
              className="mobile-navbar-link"
              activeClassName="active-navbar-link"
              onClick={handleNavLinkClick}
            >
              Videography
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-me"
              className="mobile-navbar-link"
              activeClassName="active-navbar-link"
              onClick={handleNavLinkClick}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavLinks;

import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useGlobalContext } from "../context";

const Navbar = () => {
  const { burgerClick, mobileNavLinksActive, dispatch } = useGlobalContext();

  const handleBurgerClick = () => {
    dispatch({
      type: "UPDATE_BURGER_CLICK",
      payload: !burgerClick,
    });

    dispatch({
      type: "UPDATE_MOBILE_NAV_LINKS_ACTIVE",
      payload: !mobileNavLinksActive,
    });
  };

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

  return (
    <>
      <nav id="navbar-container">
        <div id="navbar-items-container">
          <div id="navbar-items">
            <Link
              to="/photography-portfolio"
              id="logo"
              className="header-item"
              onClick={handleNavLinkClick}
              data-testid="navbar-logo"
            >
              Conor Talbot
            </Link>

            <ul id="navbar-links" className={burgerClick ? "nav-active" : null}>
              <li>
                <NavLink
                  to="/photography-portfolio"
                  className="navbar-link"
                  activeClassName="active-navbar-link"
                  onClick={handleNavLinkClick}
                  data-testid="home-navbar-link"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/photography"
                  className="navbar-link"
                  activeClassName="active-navbar-link"
                  onClick={handleNavLinkClick}
                  data-testid="photography-navbar-link"
                >
                  Photography
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/videography"
                  className="navbar-link"
                  activeClassName="active-navbar-link"
                  onClick={handleNavLinkClick}
                  data-testid="videography-navbar-link"
                >
                  Videography
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact-me"
                  className="navbar-link"
                  activeClassName="active-navbar-link"
                  onClick={handleNavLinkClick}
                  data-testid="contact-me-navbar-link"
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>

            <div
              className="burger"
              onClick={handleBurgerClick}
              data-testid="burger"
            >
              <div className={burgerClick ? "nav-active line1" : "line1"}></div>
              <div className={burgerClick ? "nav-active line2" : "line2"}></div>
              <div className={burgerClick ? "nav-active line3" : "line3"}></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

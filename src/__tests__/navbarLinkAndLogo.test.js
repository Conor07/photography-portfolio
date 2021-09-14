import React from "react";
import { AppContext, AppProvider } from "../context";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

const TestComponent = () => {
  const {} = React.useContext(AppContext);

  return (
    <>
      <App />
    </>
  );
};

beforeEach(() => {
  // The App loads on the "Error" page by default, not the "Home" page

  render(
    <AppProvider>
      <TestComponent />
    </AppProvider>
  );
});

// Mock the "window.scrollTo" function used in "../utils/LoadNewPageAtTop.js" to avoid a console error:
window.scrollTo = jest.fn();

// Test that clicking a navbar link:
// i)  takes the user to the correct page
// ii) updates the navbar link with the "active-navbar-link" class

test("Clicking the photography navbar link", () => {
  // Check the photography navbar link is not the "active-navbar-link"
  const photographyNavbarLink = screen.getByTestId("photography-navbar-link");
  expect(photographyNavbarLink).not.toContainHTML("active-navbar-link");

  // Check the photography-page-container is not in the document
  let photographyPageContainer = screen.queryByTestId(
    "photography-page-container"
  );
  expect(photographyPageContainer).toBeNull();

  // Click the photography navbar link
  fireEvent.click(photographyNavbarLink);

  // Check that the "photography-navbar-link" is the "active-navbar-link"
  expect(photographyNavbarLink).toContainHTML("active-navbar-link");

  // Check the photography-page-container is in the document
  photographyPageContainer = screen.getByTestId("photography-page-container");
  expect(photographyPageContainer).toBeInTheDocument();
});

// Test that clicking the navbar logo:
// i)  takes the user to the home page
// ii) updates the home navbar link with the "active-navbar-link" class

test("Clicking the navbar logo", () => {
  // Check the navbar logo is in the document
  const navbarLogo = screen.getByTestId("navbar-logo");
  expect(navbarLogo).toBeInTheDocument();

  // Check the home page navbar link is not the "active-navbar-link"
  const homeNavbarLink = screen.getByTestId("home-navbar-link");
  expect(homeNavbarLink).not.toContainHTML("active-navbar-link");

  // Check the home-page-container is not in the document
  let homePageContainer = screen.queryByTestId("home-page-container");
  expect(homePageContainer).toBeNull();

  // Click the navbar logo, which should take the user to the home page
  fireEvent.click(navbarLogo);

  // Check that clicking the navbar logo has made the "home-navbar-link" the "active-navbar-link"
  expect(homeNavbarLink).toContainHTML("active-navbar-link");

  // Check the home-page-container is in the document
  homePageContainer = screen.getByTestId("home-page-container");
  expect(homePageContainer).toBeInTheDocument();
});

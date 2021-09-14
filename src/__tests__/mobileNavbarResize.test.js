import React from "react";
import { AppContext, AppProvider } from "../context";
import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "../App";

// Mock the "window.scrollTo" function used in "../utils/LoadNewPageAtTop.js" to avoid a console error:
window.scrollTo = jest.fn();

test("i) Reszing the window from >950px to <950px means the mobile navbar links are no longer null\n ii) Clicking the navbar burger changes the state of mobileNavLinksActive", () => {
  const TestComponent = () => {
    const { mobileNavLinksActive } = React.useContext(AppContext);

    return (
      <>
        <App />
        <div data-testid="test-element">{`mobileNavLinksActive: ${mobileNavLinksActive}`}</div>
      </>
    );
  };

  // The App loads on the "Error" page by default, not the "Home" page

  render(
    <AppProvider>
      <TestComponent />
    </AppProvider>
  );

  // Check the test element is in the document
  const testElement = screen.getByTestId("test-element");
  expect(testElement).toBeInTheDocument();

  act(() => {
    // Change the viewport width to 951px
    // Having a width >950px should mean that the mobile navbar is null
    global.innerWidth = 951;

    // Trigger the window resize event
    global.dispatchEvent(new Event("resize"));
  });

  // Check that the mobile navbar is null
  const mobileNavbarContainerQuery = screen.queryByTestId(
    "mobile-navbar-container"
  );
  expect(mobileNavbarContainerQuery).toBeNull();

  // Check that mobileNavLinksActive is equal to false, (for screen widths > 950px)
  expect(testElement).toContainHTML("false");

  act(() => {
    // Change the viewport width to 949px
    // Having a width <950px should mean that the mobile navbar should no longer be null
    global.innerWidth = 949;

    // Trigger the window resize event
    global.dispatchEvent(new Event("resize"));
  });

  // Check that the mobile navbar container is now in the document
  const mobileNavbarContainer = screen.getByTestId("mobile-navbar-container");
  expect(mobileNavbarContainer).toBeInTheDocument();

  const burger = screen.getByTestId("burger");
  expect(burger).toBeInTheDocument();

  // Click the burger
  fireEvent.click(burger);

  // Check that mobileNavLinksActive is equal to true
  expect(testElement).toContainHTML("true");

  // Click the burger
  fireEvent.click(burger);

  // Check that mobileNavLinksActive is equal to false
  expect(testElement).toContainHTML("false");
});

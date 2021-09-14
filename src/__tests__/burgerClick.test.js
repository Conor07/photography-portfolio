import React from "react";
import { AppContext, AppProvider } from "../context";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

// Mock the "window.scrollTo" function used in "../utils/LoadNewPageAtTop.js" to avoid a console error:
window.scrollTo = jest.fn();

test("Clicking the navbar burger changes the state of burgerClick", () => {
  const TestComponent = () => {
    const { burgerClick } = React.useContext(AppContext);

    return (
      <>
        <App />
        <div data-testid="test-element">{`burgerClick: ${burgerClick}`}</div>
      </>
    );
  };

  // The App loads on the "Error" page by default, not the "Home" page

  render(
    <AppProvider>
      <TestComponent />
    </AppProvider>
  );

  // Check the burger is in the document
  const burger = screen.getByTestId("burger");
  expect(burger).toBeInTheDocument();

  // Check the test element is in the document
  const testElement = screen.getByTestId("test-element");
  expect(testElement).toBeInTheDocument();

  //   Check that burgerClick is equal to false, (its default value)
  expect(testElement).toContainHTML("false");

  // Click the burger
  fireEvent.click(burger);

  // Check that burgerClick is equal to true
  expect(testElement).toContainHTML("true");

  // Click the burger
  fireEvent.click(burger);

  // Check that burgerClick is equal to false
  expect(testElement).toContainHTML("false");
});

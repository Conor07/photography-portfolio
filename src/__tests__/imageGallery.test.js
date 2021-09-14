import React from "react";
import { AppContext, AppProvider } from "../context";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import ActiveImageModal from "../components/ActiveImageModal";

// Mock the "window.scrollTo" function used in "../utils/LoadNewPageAtTop.js" to avoid a console error:
window.scrollTo = jest.fn();

test("i) Check that images in the image gallery load correctly\n ii)Check that clicking on an image in the image gallery correctly changes the activeImage state", async () => {
  const TestComponent = () => {
    const { importantPhotosLoaded, photoComponentPhotosLoading } =
      React.useContext(AppContext);

    return (
      <>
        <App />
        <ActiveImageModal />
        <div data-testid="test-element">{`importantPhotosLoaded: ${importantPhotosLoaded}`}</div>
        <div data-testid="test-element2">{`photoComponentPhotosLoading: ${photoComponentPhotosLoading}`}</div>
      </>
    );
  };

  // The App loads on the "Error" page by default, not the "Home" page

  render(
    <AppProvider>
      <TestComponent />
    </AppProvider>
  );
  // Check the test element0 is in the document
  const testElement1 = screen.getByTestId("test-element");
  expect(testElement1).toBeInTheDocument();

  // Check the test element1 is in the document
  const testElement2 = screen.getByTestId("test-element2");
  expect(testElement2).toBeInTheDocument();

  // Check the photography navbar link is not the "active-navbar-link"
  const photographyNavbarLink = screen.getByTestId("photography-navbar-link");

  // Click the photography navbar link to go to the photography page
  fireEvent.click(photographyNavbarLink);

  // Check the photography-page-container is in the document
  const photographyPageContainer = screen.getByTestId(
    "photography-page-container"
  );
  expect(photographyPageContainer).toBeInTheDocument();

  // Check no images are in importantPhotosLoaded
  expect(testElement1).not.toContainHTML("1" || "2" || "3");

  // Check that photoComponentPhotosLoading is still true
  expect(testElement2).toContainHTML("true");

  // Wait for the image gallery to load
  await waitFor(() => {
    screen.getByTestId("image-gallery");
    const imageGallery = screen.getByTestId("image-gallery");
    expect(imageGallery).toBeInTheDocument();
  });

  // Check there are 12 images
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(12);

  // Load the images
  // (I believe images may be in the order of 1, 4, 7 etc. due to the layout of the image gallery,
  // changing the screen width may change this to the normal order of 1, 2, 3 etc.)
  await waitFor(() => {
    images.forEach((image) => {
      fireEvent.load(image);
    });
  });

  // Check the importantImages (1, 2, 3) are in importantPhotosLoaded
  expect(testElement1).toContainHTML("1" && "2" && "3");

  // Check that photoComponentPhotosLoading is now false
  expect(testElement2).toContainHTML("false");
});

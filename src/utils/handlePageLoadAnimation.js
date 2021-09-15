import React from "react";

export function handlePageLoadAnimation(
  pagesLoadedOnce,
  pageToCheck,
  loadedOnceClassAnimationDelay,
  dispatch
) {
  setTimeout(() => {
    if (!pagesLoadedOnce.includes(pageToCheck)) {
      dispatch({
        type: "UPDATE_PAGES_LOADED_ONCE",
        payload: pageToCheck,
      });
    }
  }, loadedOnceClassAnimationDelay);
}

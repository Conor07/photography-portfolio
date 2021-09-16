export function handlePageLoadAnimation(
  pagesLoadedOnce,
  pageToCheck,
  loadedOnceClassAnimationDelay,
  dispatch
) {
  if (!pagesLoadedOnce.includes(pageToCheck)) {
    setTimeout(() => {
      dispatch({
        type: "UPDATE_PAGES_LOADED_ONCE",
        payload: pageToCheck,
      });
    }, loadedOnceClassAnimationDelay);
  }
}

const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DONE_LOADING") {
    return { ...state, loading: false };
  }

  if (action.type === "UPDATE_UNSPLIT_IMAGES_DATA") {
    const newUnsplitImagesData = [
      ...state.unsplitImagesData,
      ...action.payload,
    ];

    return { ...state, unsplitImagesData: newUnsplitImagesData };
  }

  if (action.type === "UPDATE_IMAGES_DATA") {
    const newImagesData = [...state.imagesData, ...action.payload];

    return { ...state, imagesData: newImagesData };
  }

  if (action.type === "UPDATE_UNSPLIT_IMAGES_DATA") {
    const newUnsplitImagesData = [
      ...state.unsplitImagesData,
      ...action.payload,
    ];

    return { ...state, unsplitImagesData: newUnsplitImagesData };
  }

  if (action.type === "UPDATE_MOBILE_NAV_LINKS_ACTIVE") {
    return { ...state, mobileNavLinksActive: action.payload };
  }

  if (action.type === "UPDATE_BURGER_CLICK") {
    return { ...state, burgerClick: action.payload };
  }

  if (action.type === "UPDATE_ACTIVE_IMAGE") {
    return { ...state, activeImage: action.payload };
  }

  if (action.type === "UPDATE_PHOTO_COMPONENT_PHOTOS_LOADING") {
    return { ...state, photoComponentPhotosLoading: action.payload };
  }

  if (action.type === "UPDATE_IMPORTANT_PHOTOS_LOADED") {
    const newImportantPhotosLoaded = [
      ...state.importantPhotosLoaded,
      action.payload,
    ];

    return { ...state, importantPhotosLoaded: newImportantPhotosLoaded };
  }

  throw new Error("No Matching Action Type");
  //   return state;
};

export default reducer;

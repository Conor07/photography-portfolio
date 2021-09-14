import { React, useEffect } from "react";

import { useGlobalContext } from "../context";

const Photo = ({ e, imagesData }) => {
  const { dispatch, photoComponentPhotosLoading, importantPhotosLoaded } =
    useGlobalContext();

  const importantPhotosIDs = [1, 2, 3];
  const importantPhotosIDsLength = importantPhotosIDs.length;

  const handleLoad = (id) => {
    if (
      importantPhotosLoaded.length !== importantPhotosIDsLength &&
      importantPhotosIDs.includes(id)
    ) {
      dispatch({
        type: "UPDATE_IMPORTANT_PHOTOS_LOADED",
        payload: id,
      });
    }
  };

  useEffect(() => {
    // Check Important Photos Have Loaded:

    if (
      importantPhotosLoaded.includes(1) &&
      importantPhotosLoaded.includes(2) &&
      importantPhotosLoaded.includes(3) &&
      photoComponentPhotosLoading
    ) {
      dispatch({
        type: "UPDATE_PHOTO_COMPONENT_PHOTOS_LOADING",
        payload: false,
      });
    }
  }, [dispatch, importantPhotosLoaded, photoComponentPhotosLoading]);

  return (
    <div className="image-gallery-column">
      {imagesData.map((image) => {
        const { id, name } = image;
        return (
          <div key={id} className="photo-img-container">
            <img
              key={id}
              src={name}
              alt={name}
              onClick={() =>
                dispatch({ type: "UPDATE_ACTIVE_IMAGE", payload: image })
              }
              onLoad={() => handleLoad(id)}
              data-testid={`photo-${id}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Photo;

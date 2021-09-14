import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./utils/reducer";
import createImagesData from "./utils/createImagesData";
import importedImagesData from "./images_data";

const imagesDirectory1 = `${process.env.PUBLIC_URL}/images/images_smaller_file_size_versions/`;

const maxNumberOfGalleryColumns = 3;

const AppContext = React.createContext();

const initialState = {
  loading: false,
  unsplitImagesData: [],
  imagesData: [],
  mobileNavLinksActive: false,
  burgerClick: false,
  photoComponentPhotosLoading: true,
  importantPhotosLoaded: [],
  activeImage: "",
  mobileViewWidth: 950,
  imagesDirectory: imagesDirectory1,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" });

    try {
      const [newImagesData, newUnsplitImagesData] = createImagesData(
        importedImagesData,
        maxNumberOfGalleryColumns,
        initialState.imagesDirectory
      );

      dispatch({
        type: "UPDATE_IMAGES_DATA",
        payload: newImagesData,
      });

      dispatch({
        type: "UPDATE_UNSPLIT_IMAGES_DATA",
        payload: newUnsplitImagesData,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }

    dispatch({ type: "DONE_LOADING" });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

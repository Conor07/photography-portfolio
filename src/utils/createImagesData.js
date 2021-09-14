import { splitImagesData } from "./splitImagesData";

const createImagesData = (
  importedImagesData,
  maxNumberOfGalleryColumns,
  imagesDirectory
) => {
  try {
    const newImagesData = [];
    const newUnsplitImagesData = [];

    for (let i = 0; i < maxNumberOfGalleryColumns; i++) {
      newImagesData.push(
        splitImagesData(
          importedImagesData,
          i,
          maxNumberOfGalleryColumns,
          imagesDirectory
        )
      );
    }

    importedImagesData.forEach((imageData) => {
      newUnsplitImagesData.push({
        ...imageData,
        name: `${imagesDirectory}${imageData.name}`,
      });
    });

    return [newImagesData, newUnsplitImagesData];
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export default createImagesData;

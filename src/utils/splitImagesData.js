export const splitImagesData = (
  importedImagesData,
  start,
  increment,
  imagesDirectory
) => {
  const newImagesData = [];

  for (let i = start; i < importedImagesData.length; i += increment) {
    const currentImageData = importedImagesData[i];

    const { name } = currentImageData;
    const imageLocation = `${imagesDirectory}${name}`;

    const updatedCurrentImageData = {
      ...currentImageData,
      name: imageLocation,
    };

    newImagesData.push(updatedCurrentImageData);
  }
  return newImagesData;
};

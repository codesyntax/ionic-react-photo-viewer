import renderIonHeaderToString from './renderIonHeaderToString';


const renderIonHeader = (title: string, instance: any) => {
  // Generate random hash for ion-header
  const randomHash = Math.random().toString(36).substring(2, 15);
  // Generate random id for ion-header
  const ionPhotoViewerCloseId = `ion-photo-viewer${randomHash}`;
  const $btn = renderIonHeaderToString(title, ionPhotoViewerCloseId);

  instance.outer.find('.lg-toolbar').append($btn);

  //Search ion-photo-viewer-close and add event listener on click
  document
    .getElementById(ionPhotoViewerCloseId)
    ?.addEventListener('click', () => {
      instance.closeGallery();
    });
};

const getImageDimensions = (imageUrl: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width,
      });
    };
    img.onerror = (err) => {
      console.log("img error");
      console.error(err);
      reject(err);
    };
  });
};

export { renderIonHeader, getImageDimensions };

import renderIonHeaderToString from './renderIonHeaderToString';


// const renderIonHeader = (title: string) => {
//   // Generate random hash for ion-header
//   const randomHash = Math.random().toString(36).substring(2, 15);
//   // Generate random id for ion-header
//   const ionPhotoViewerCloseId = `ion-photo-viewer${randomHash}`;
//   const ionHeader = renderIonHeaderToString(title, ionPhotoViewerCloseId);

//   instance.outer.find('.lg-toolbar').append(ionHeader);

//   //Search ion-photo-viewer-close and add event listener on click
//   document
//     .getElementById(ionPhotoViewerCloseId)
//     ?.addEventListener('click', () => {
//       instance.closeGallery();
//     });
// };

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

const createElementFromHTML = (htmlString:string) => {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild?div.firstChild:div;
}

export { getImageDimensions, createElementFromHTML };

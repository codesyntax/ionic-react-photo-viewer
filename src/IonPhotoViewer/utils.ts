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

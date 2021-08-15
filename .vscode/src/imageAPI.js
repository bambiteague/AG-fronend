// handle all fetch requests for the Images
function getImages() {
  fetch("http://localhost:3000/images")
    .then(r => r.json())
    .then(renderImages);

  function renderImages(arg) {
    const images = arg["data"]
    images.forEach(element => {
      new Image(element)
      renderItem(element)
    })
  }
}

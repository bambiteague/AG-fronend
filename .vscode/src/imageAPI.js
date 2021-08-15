// handle all fetch requests for the Images

fetch("http://localhost:3000/images")
  .then((response) => response.json())
  .then((data) => displayImages(data));

function displayImages(images) {
  console.log(images);
}

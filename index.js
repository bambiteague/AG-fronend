// will trigger the code from our classes, etc.
const port = "http://localhost:3000"
const list = document.getElementById("image-list");
const form = document.getElementById("image-form");
const urlInput = document.getElementById("image-url");
const descInput = document.getElementById("image-desc");



// function getImages() {
//   fetch("http://localhost:3000/images")
//     .then((r) => r.json())
//     .then(renderImages);
// }

// function renderImages(arg) {
//   const images = arg["data"];
//   images.forEach(element => {
//     const i = new Image({id: element.id, ...element.attributes});
//     i.attachToDom()
//     // renderItem(element);
//   });
// // }

// function renderImage(image) {
//   const li = document.createElement('li')
//   li.dataset["id"] = image.id
//   li.id = `image-${image.id}`
// }
// will trigger the code from our classes, etc.
const port = "http://localhost:3000";
const imageApi =  new ImageApi(port)
const container = document.getElementById("image-container");
const form = document.getElementById("image-form");
const urlInput = document.getElementById("image-url");
const descInput = document.getElementById("image-desc");

imageApi.getImages()
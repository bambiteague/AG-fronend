// will trigger the code from our classes, etc. 

document.addEventListener("DOMContentLoaded", (event) => {
  
  fetch("http://localhost:3000/images")   
    .then((response) => response.json())
    .then((data) => displayImages(data));

  function displayImages(images) {
    console.log(images);
  }
});

// will trigger the code from our classes, etc.

  const api = new ImageApi
  const form = document.getElementById("image-form");
  const urlInput = document.getElementById("image-url");
  const descInput = document.getElementById("image-desc");

  form.addEventListener('submit', handleSubmit)

  function handleSubmit(e){
     e.preventDefault()
     api.createImage()
     e.target.reset()
  }

 api.getImages()

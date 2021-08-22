// will trigger the code from our classes, etc.
// sets up DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  const api = new PostApi();
  const form = document.getElementById("post-form");
  const urlInput = document.getElementById("image-url");
  const descInput = document.getElementById("post-desc");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    api.createImage();
    e.target.reset();
  }

  api.getPosts();
});

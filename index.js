// will trigger the code from our classes, etc.
// sets up DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("post-form");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    Post.createPost();
    e.target.reset();
  }

  Post.getPosts();
});

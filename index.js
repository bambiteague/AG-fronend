// will trigger the code from our classes, etc.
// sets up DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  const api =  new PostApi
  const form = document.getElementById("post-form");
  const postCard = document.getElementById("");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    api.createPost();
    e.target.reset();
  }


  api.getPosts();
});

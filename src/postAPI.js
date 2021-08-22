class PostApi {
  constructor() {}

  getPosts() {
    fetch("http://localhost:3000/posts")
      .then((r) => r.json())
      .then((json) => {
        json.forEach((postResponse) => {
          const post = new Post({
            imageUrl: postResponse.imageUrl,
            description: postResponse.description,
          });
          post.attachToDom();
        });
      });
  }
// having issues getting images to persist to Db and show on DOM
  createPost() {
    const urlInput = document.getElementById("image-url");
    const descInput = document.getElementById("post-desc");
    const postCardInfo = {
      imageUrl: urlInput.value,   //maybe so mething wrong
      description: descInput.value,
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
      body: JSON.stringify(postCardInfo),
    };
    // pessimistic rendering example
    fetch("http://localhost:3000/posts", configObj)
      .then((r) => r.json())
      .then((json) => {
        const i = new Image({
          imageUrl: json.imageUrl,
          description: json.description,
        });
        i.attachToDom
      });
  }
 
  deleteItem = (id) => {
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(`${"http://localhost:3000/post"}/${id}`, configObj)
      .then((r) => r.json())
      .then((json) => alert(json.message));
  };
}

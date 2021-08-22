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
    const postInfo = {
      imageUrl: urlInput.value,   //maybe so mething wrong here?
      description: descInput.value,
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
      body: JSON.stringify(postInfo),
    };
    // pessimistic rendering example
    fetch("http://localhost:3000/posts", configObj)
      .then((r) => r.json())
      .then((json) => {
        const i = new Image({
          imageUrl: json.imageUrl,
          description: json.description,
        });
        i.attachToDom();
      });
  }

  // connect to a button element on the html doc
  // I need to get a delete button connected to each image to delete that image!!
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

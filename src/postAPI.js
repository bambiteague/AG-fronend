class PostApi {
  constructor() {}
  // fetching and returning json data
  // render the image url into an html element to display on the page
  getPosts() {
    fetch("http://localhost:3000/images")
      .then((r) => r.json())
      .then((json) => {
        json.forEach((postResponse) => {
          const post = new Post({
            imageUrl: postResponse.url,
            description: postResponse.description,
          });
          post.attachToDom();
        });
      });
  }
  // below 'createImage' is for the submission & creation of new images & attaching them to the DOM
  createPost() {
    const postInfo = {
      url: urlInput.value,
      description: descInput.value,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
      body: JSON.stringify(imageinfo),
    };
    // pessimistic rendering
    fetch("http://localhost:3000/posts", configObj)
      .then((r) => r.json())
      .then((json) => {
        const i = new Image({
          image_url: json.data.image_url,
          description: json.data.description,
        });
        i.attachToDom();
      });
  }

  // the delete function, connect to a button element on the html doc
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

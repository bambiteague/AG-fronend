// event listeners/interaction with DB
const POST_URL = "http://localhost:3000/posts";
class Post {
  static all = [];
  static postGrid = document.getElementById("post-grid");

  static getPosts() {
    fetch(POST_URL)
      .then((r) => r.json())
      .then((json) => {
        json.forEach((postResponse) => {
          const post = new Post({
            imageUrl: postResponse.imageUrl,
            description: postResponse.description,
            id: postResponse.id,
          });
          post.attachToDom();
        });
      });
  }

  static deleteItem = (post) => {
    console.log("deleting...");
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(`${POST_URL}/${post.id}`, configObj)
      .then((r) => r.json())
      .then((json) => post.card.remove());
  };

  static createPost() {
    const urlInput = document.getElementById("image-url");
    const descInput = document.getElementById("post-desc");
    const postCardInfo = {
      imageUrl: urlInput.value,
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
    fetch(POST_URL, configObj)
      .then((r) => r.json())
      .then((json) => {
        console.log("Json: ", json);
        const p = new Post({
          imageUrl: json.imageUrl,
          description: json.description,
          id: json.id,
        });
        p.attachToDom();
      });
  }

  static removeFromDom(card) {
    card.remove();
  }

  constructor({ imageUrl, description, id }) {
    this.imageUrl = imageUrl;
    this.description = description;
    this.id = id;

    this.card = document.createElement("div");

    Post.all.push(this);
  }

  render() {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", this.imageUrl);
    this.card.appendChild(cardImage);

    const cardDesc = document.createElement("div");
    cardDesc.innerText = this.description;
    this.card.appendChild(cardDesc);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => Post.deleteItem(this));
    this.card.appendChild(deleteBtn);
  }

  attachToDom() {
    this.render();
    console.log("Attach: ", this.card);
    Post.postGrid.appendChild(this.card);
  }
}

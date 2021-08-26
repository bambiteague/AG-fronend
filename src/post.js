const POST_URL = "http://localhost:3000/posts";
class Post {
  static all = [];
  static postGrid = document.getElementById("post-grid");

  static getPosts() {
    fetch(POST_URL)
      .then((r) => r.json())
      .then((json) => {
        json.forEach((postResponse) => {
          console.log(`this.comments`, postResponse);
    
          // when creating new post i want to pass in the comments
          // or attach them to the DOM

          const post = new Post({
            imageUrl: postResponse.imageUrl,
            description: postResponse.description,
            id: postResponse.id,
            comments: postResponse.comments
            //need comments to persist and reload after refresh

          });
          post.attachToDom();
        });
      });
  }

  // static getPosts() {
  //   fetch(POST_URL)
  //     .then((r) => r.json())
  //     .then((json) => {})}


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

  constructor({ imageUrl, description, id, comments}) {
    this.imageUrl = imageUrl;
    this.description = description;
    this.id = id;
    this.comments = comments;
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

    const commentForm = document.createElement("form");
    commentForm.innerHTML = `
              <div class="comment-form">
              <label for="comment-input">Leave A Comment:</label><br>
              <input type="text" name="comment" />
              <input type="submit" value="comment now!" method="POST"  />
              </div>
           `;
    this.comments.forEach(comment => {
      const newComment = new Comment(comment.post_id, comment.content, this, comment.id)
      newComment.renderComment()
    })
    
    this.card.appendChild(commentForm);
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      Comment.createComment(this, e.target[0].value);
    });
  }

  attachToDom() {
    this.render();
    // console.log("Attach: ", this.card);
    Post.postGrid.appendChild(this.card);
  }
}

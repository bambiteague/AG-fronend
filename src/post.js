// interaction with DB
// remembering all the images
// setting the properties of each image and the html we want to put on    the DOM for each item
// attach event listeners particular to each Image

class Post {
  static all = [];
  static postGrid = document.getElementById("post-grid");

  constructor({ imageUrl, description }) {
    this.imageUrl = imageUrl;
    this.description = description;
    this.card = document.createElement("div");

    Post.all.push(this);
  }

  render() {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", this.imageUrl);
    this.card.appendChild(cardImage);

    const cardDesc = document.createElement("div");
    cardDesc.innerText = this.description;
    this.card.appendChild(cardDesc)
  }

  attachToDom() {
    this.render();
    Post.container.appendChild(this.card);
  }
}

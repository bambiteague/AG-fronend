// event listeners/interaction with DB
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
    Post.postGrid.appendChild(this.card);
  }

  deleteCard() {
    const del = document.createElement('button');
    del.innerHTML = 'Remove this post?';
    del.onclick = function() { 
      deleteButton(this)
    }; 
    postGrid.appendChild(del); 
  }
  
  deleteButton(x) {  
    var parent = document.getElementsByTagName(div)[0];
    parent.removeChild(x);
  }

}

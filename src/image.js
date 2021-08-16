// interaction with DB
// remembering all the images
// setting the properties of each image and the html we want to put on    the DOM for each item
// attach event listeners particular to each Image

class Image {
  static all = [];
  static container = document.getElementById("image-container");

  constructor({ url, description }) {
    //setting the properties of each image
    this.url = url;
    this.description = description;
    this.element = document.createElement("img");
    document.getElementById("body").appendChild(img);
    down.innerHTML = "Image Element Added.";
    Image.all.push(this);
  }

  render() {
    this.element.innerHTML = `
      <div data-id="${id}">
        <span class="url"><img src="${this.attributes.url}"></span><br>
        <span class="description">${this.attributes.description}></span>
      </div>
        <button class="delete" data-id="${id}">Delete</button>`;

    return this.element;
  }

  attachToDom(x) {
    const div = document.getElementById("image-container");

    div.innerHTML = ""; // clear images

    for (counter = 1; counter <= x; counter++) {
      const image = document.createElement("img");
      image.src = " " + counter + ".png";
      div.appendChild(imagem);
    }
    //   this.render();
    //   Image.container.appendChild(this.element);
  }
}

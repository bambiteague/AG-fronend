// interaction with DB
// remembering all the images
// setting the properties of each image and the html we want to put on    the DOM for each item
// attach event listeners particular to each Image

class Image {
  
  static all = [];

  constructor({ url, description }) {
    //setting the properties of each image
    this.url = url;
    this.description = description;

    // setup the html element that will contain the image
    this.element = document.createElement("li");
    this.element.dataset["id"] = id;
    this.element.id = `image-${id}`;
    //remember all items
    Image.all.push(this);
  }

  render() {
    this.element.innerHTML = `
      <div data-id="${id}">
        <span class="url">${this.attributes.url}</span>
        <span class="description">${this.attributes.description}></span>
      </div>
        <button class="delete" data-id="${id}">Delete</button>`;

    return this.element;
  }

  attachToDom(){
    list.appendChild(this.render())
  }

}
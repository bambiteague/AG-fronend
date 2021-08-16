// handle all fetch requests for the Images
class ImageApi {
  constructor(port) {
    this.baseUrl = `${port}/images`;
  }

  // fetching and returning json data
  // render the image url into an html element to display on the page
  getImages() {
    fetch(this.baseUrl)
      .then((r) => r.json())
      .then((images) => images.forEach((image) => renderImage(image.url)));
  }
  renderImage(image) {
    const imageObj = document.querySelector(".image-container");
    const picture = document.createElement("img");
    picture.src = image.attributes.url;
  }

  // below 'createImage' is for the submission & creation of new images & attaching them to the DOM
  createImage() {
    const imageInfo = {
      url: urlInput.value,
      description: descInput.value,
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(imageInfo),
    };
    // pessimistic rendering
    fetch(this.baseUrl, configObj)
      .then((r) => r.json())
      .then((json) => {
        // renderItem(json.data)
        const i = new Image({ id: json.data.id, ...json.data.attributes });
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

    fetch(`${this.baseURL}/${id}`, configObj)
      .then((r) => r.json())
      .then((json) => alert(json.message));
  };
}

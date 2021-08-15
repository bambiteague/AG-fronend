// handle all fetch requests for the Images

class ImageApi {
  constructor(port) {
    this.baseUrl = `${port}/images`;
  }

  getImages() {
    fetch(this.baseUrl)
      .then((r) => r.json())
      .then((image) => {
        image.map((i) => {
          return i;
        });
      });
  }

  // renderImages(image) {
  //   image.map((i) => {
  //     return i;
  //   });
  // }

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

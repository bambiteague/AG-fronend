class ImageApi {
  constructor() {
  }
  // fetching and returning json data
  // render the image url into an html element to display on the page
  getImages() {
    fetch("http://localhost:3000/images") 
      .then( r => r.json() )
      .then( json =>  {
        json.forEach(image => {
          debugger
            const i = new Image({url: image.url, description: image.description})
            console.log(i)
            debugger
        })
    })
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
      body: JSON.stringify(imageinfo)
    };
  
    // pessimistic rendering
    fetch(this.baseUrl, configObj)
      .then((r) => r.json())
      .then((json) => {
        const i = new Image({ url: json.data.url, description: json.data.description});
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

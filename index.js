document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
  const userButton = document.getElementById("butt-on");
  userButton.addEventListener("click", () => {
    fetch("https://source.unsplash.com/random").then((response) => {
      const randomImg = document.getElementById("random-img");
      randomImg.setAttribute("src", response.url)
    });
  });

  function displayUsers(users) {
    console.log(users);
  }
});

//GET YOUR DELIVERABLES DONE FIRST!

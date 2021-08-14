document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
  // const userButton = document.getElementById("butt-on");
  // userButton.addEventListener("click", getUsers);

  function displayUsers(users) {
    console.log(users);
  }
});


//GET YOUR DELIVERABLES DONE FIRST!
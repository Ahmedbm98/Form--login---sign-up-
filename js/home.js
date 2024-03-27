let section = document.querySelector("section");
let btn = document.querySelector("button");

let NameUser = JSON.parse(localStorage.getItem("Users"))[0].theName;

let heading = document.createElement("h1");
heading.textContent = `welcome ${NameUser}`;

section.appendChild(heading);

btn.addEventListener("click", function () {
  location.replace("../index.html");
});

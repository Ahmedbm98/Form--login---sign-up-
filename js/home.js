let txtHeading = document.querySelector(".content h1");
let btn = document.querySelector("button");

// LogOut
btn.addEventListener("click", function () {
  // location.replace("./signUp.html");
  location.href = "./index.js";
});

// Display Name In Heading
let NameUser = location.href.split("?")[1];
console.log(NameUser);

txtHeading.textContent = `welcome ${NameUser}`;

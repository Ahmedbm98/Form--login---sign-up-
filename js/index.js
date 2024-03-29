let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let btn = document.querySelector("button");

let errorPara = document.querySelector(".error");
let openEye = document.querySelector(".fa-eye");
let closeEye = document.querySelector(".fa-eye-slash");

let getUser = JSON.parse(localStorage.getItem("users"));
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  if (email === "" || password === "") {
    errorPara.classList.replace("d-none", "d-block");
    errorPara.textContent = "Email Or Password Is Empty";
    errorPara.style = "color:red; margin-top: 15px";
    return;
  }
  let userFound = false;
  if (getUser !== null) {
    for (let i = 0; i < getUser.length; i++) {
      if (getUser[i].Email === email && getUser[i].Password === password) {
        let userName = getUser[i].Name;
        location.href = `../home.html?${userName}`;
        userFound = true;
        break;
      }
    }
  }

  if (!userFound) {
    errorPara.textContent = "Invalid Email Or Password";
    errorPara.style = "color:red; margin-top: 15px";
  }
});

// Show Password
openEye.addEventListener("click", function () {
  passwordInput.type = "text";
  if (passwordInput.value !== "") {
    openEye.classList.replace("d-block", "d-none");
    closeEye.classList.replace("d-none", "d-block");
  }
});
// Hidden Password
closeEye.addEventListener("click", function () {
  passwordInput.type = "password";
  closeEye.classList.replace("d-block", "d-none");
  openEye.classList.replace("d-none", "d-block");
});

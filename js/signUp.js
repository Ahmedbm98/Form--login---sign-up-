let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

let openEye = document.querySelector(".fa-eye");
let closeEye = document.querySelector(".fa-eye-slash");
let btn = document.querySelector("button");
let errorPara = document.querySelector(".error");

let arrUsers;
if (localStorage.getItem("users") !== null) {
  arrUsers = JSON.parse(localStorage.getItem("users"));
} else {
  arrUsers = [];
}

console.log(arrUsers);
// Create User
btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    validationInput(nameInput, nameReg) &
    validationInput(emailInput, emailReg) &
    validationInput(passwordInput, passwordReg)
  ) {
    let userExist = false;
    for (let i = 0; i < arrUsers.length; i++) {
      if (
        arrUsers[i].Name === nameInput.value &&
        arrUsers[i].Email === emailInput.value &&
        arrUsers[i].Password === passwordInput.value
      ) {
        userExist = true;
        break;
      }
    }

    if (userExist === true) {
      errorPara.textContent = "This Account Is Already Exists";
      errorPara.classList.replace("d-none", "d-block");
      errorPara.style = "color:red; margin-block: 1rem";
    } else {
      let user = {
        Name: nameInput.value,
        Email: emailInput.value,
        Password: passwordInput.value
      };
      arrUsers.push(user);
      localStorage.setItem("users", JSON.stringify(arrUsers));
      location.href = "../index.html";
      // console.log(arrUsers);
    }
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

// Create Pattern Form
let nameReg = /^[a-zA-Z]{3,}(0-9)*/;
let emailReg = /^\w+@\w+\.\w+/;
// let passwordReg = /^\w{5,}([!@#$%^&*()-\+/\*\?\."])+\w*/;
let passwordReg = /(!@#$%^&*()_-\+\*\?"\/)?\w{5,}(!@#$%^&*()_-\+\*\?"\/)?/;

// Validation Input
function validationInput(ele, reg) {
  if (reg.test(ele.value)) {
    ele.style = `border: 1px solid #17A2B8`;
    return true;
  } else {
    ele.style = "border: 1px solid red";
    return false;
  }
}

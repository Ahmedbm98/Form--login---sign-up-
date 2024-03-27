let nameInput = document.querySelector('input[name="name"]');
let emailInput = document.querySelector('input[name="email"]');
let passwordInput = document.querySelector('input[name="password"]');
let openEye = document.getElementById("open-eye");
let closeEye = document.getElementById("close-eye");
let btn = document.querySelector("button");

let correct = document.querySelectorAll(".correct");
let inCorrect = document.querySelectorAll(".incorrect");

let listOfUsers = [];

// Create Pattern Form
let nameReg = /^[a-zA-Z]{3,}(0-9)*/;
let emailReg = /^\w+@\w+\.\w+/;
let passwordReg = /^\w{5,}([!@#$%^&*()-\+/\*\?\."])+/;

// Create User
btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    isValidation(nameInput, nameReg) &
    isValidation(emailInput, emailReg) &
    isValidation(passwordInput, passwordReg)
  ) {
    let user = {
      theName: nameInput.value,
      theEmail: emailInput.value,
      password: passwordInput.value
    };
    listOfUsers.push(user);
    localStorage.setItem("Users", JSON.stringify(listOfUsers));
    resetInputValue();
    location.href = "../index.html";
  }
});

// Reset Input Value
function resetInputValue() {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
}

// Show Password
openEye.addEventListener("click", () => {
  passwordInput.setAttribute("type", "text");
  if (passwordInput.value !== "") {
    closeEye.classList.replace("d-none", "d-block");
    openEye.classList.replace("d-block", "d-none");
  }
});

closeEye.addEventListener("click", (e) => {
  passwordInput.setAttribute("type", "password");
  openEye.classList.replace("d-none", "d-block");
  closeEye.classList.replace("d-block", "d-none");
});

// Check Validation Input
function isValidation(ele, reg) {
  let myP = ele.parentElement.nextElementSibling;
  if (reg.test(ele.value)) {
    myP.classList.replace("d-block", "d-none");
    ele.style = `border: 1px solid #17A2B8`;
    return true;
  } else {
    ele.style = `border: 1px solid red`;
    myP.classList.replace("d-none", "d-block");
    myP.style = `color: red`;
    return false;
  }
}

let emailInput = document.querySelector("input[type='email']");
let passwordInput = document.querySelector("input[type='password']");
let btn = document.querySelector("button");
let errorPara = document.getElementById("error");

let getUser = JSON.parse(localStorage.getItem("Users"));

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  if (email === "" || password === "") {
    errorPara.textContent = "Email Or Password Is Empty";
    errorPara.style.cssText = "color:red; margin-block: 1.2rem";
    return;
  }

  if (getUser !== null) {
    for (let i = 0; i < getUser.length; i++) {
      if (getUser[i].theEmail === email && getUser[i].password === password) {
        location.href = "../pages/welcome.html";
        break;
      } else {
        errorPara.textContent = "Invalid Password Or Email";
        errorPara.style.cssText = "color:red; margin-block: 1.2rem";
      }
    }
  }
});

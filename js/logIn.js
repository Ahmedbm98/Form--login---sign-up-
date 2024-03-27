let emailInput = document.querySelector("input[type='email']");
let passwordInput = document.querySelector("input[type='password']");
let btn = document.querySelector("button");
let errorPara = document.getElementById("error");

let getUser = JSON.parse(localStorage.getItem("Users"));

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (emailInput.value !== "" && passwordInput.value !== "") {
    if (getUser !== null) {
      for (let i = 0; i < getUser.length; i++) {
        if (
          getUser[i].theEmail === emailInput.value &&
          getUser[i].password === passwordInput.value
        ) {
          location.href = "../pages/welcome.html";
        } else {
          errorPara.textContent = "Invalid Email Or Password";
          errorPara.style.cssText = "color: red; margin-block: 1.2rem";
        }
      }
    } else {
      errorPara.textContent = "This account does not exist";
      errorPara.style.cssText = "color: red; margin-block: 1.2rem";
    }
  } else {
    errorPara.textContent = "Email Or Password Is Empty";
    errorPara.style.cssText = "color: red; margin-block: 1.2rem";
  }
});

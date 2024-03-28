let emailInput = document.querySelector("input[type='email']");
let passwordInput = document.querySelector("input[type='password']");
let btn = document.querySelector("button");
let errorPara = document.getElementById("error");

let getUser = JSON.parse(localStorage.getItem("Users"));

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    errorPara.textContent = "Email Or Password Is Empty";
    errorPara.style.cssText = "color:red; margin-block: 1.2rem";
    return;
  }

  let userFound = false;
  if (getUser !== null) {
    for (let i = 0; i < getUser.length; i++) {
      if (getUser[i].theEmail === email && getUser[i].password === password) {
        userFound = true;
        location.href = "../pages/welcome.html";
        break;
      }
    }
  }

  if (!userFound) {
    errorPara.textContent = "Invalid Password Or Email";
    errorPara.style.cssText = "color:red; margin-block: 1.2rem";
  }

  // if (email !== "" && password !== "") {
  //   if (getUser !== null) {
  //     let isLoggedIn = false;

  //     for (let i = 0; i < getUser.length; i++) {
  //       if (getUser[i].theEmail === email && getUser[i].password === password) {
  //         isLoggedIn = true;
  //         break;
  //       }
  //     }

  //     if (isLoggedIn === true) {
  //       location.replace("../pages/welcome.html");
  //     } else {
  //       errorPara.textContent = "Invalid Email Or Password";
  //       errorPara.style.marginBlock = "1.2rem";
  //     }
  //   } else {
  //     errorPara.textContent = "This account does not exist";
  //     errorPara.style = "color:red; margin-block: 1.2rem";
  //   }
  // } else {
  //   errorPara.textContent = "Email Or Password Is Empty";
  //   errorPara.style = "color:red; margin-block: 1.2rem";
  // }
});

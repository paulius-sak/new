"use strict";
const emailInput = document.getElementById("user-email");
const passwordInput = document.getElementById("user-password");
const mainButton = document.getElementById("main-btn");
const infoPlaceholder = [];
mainButton.addEventListener("click", () => {
    const userLoginData = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userLoginData.email)) {
        console.log("User email has bad structure");
        return;
    }
    if (userLoginData.password.length <= 8) {
        console.log("Password should contain at least 9 characters");
        return;
    }
    const userInfoElement = document.createElement("p");
    userInfoElement.textContent = `Email: ${userLoginData.email}, password: ${userLoginData.password}`;
    const userInfoPlaceholder = document.getElementById("user-info");
    if (userInfoPlaceholder) {
        userInfoPlaceholder.appendChild(userInfoElement);
    }
    else {
        userInfoElement.textContent = "error";
        return;
    }
    infoPlaceholder.push(userLoginData);
});

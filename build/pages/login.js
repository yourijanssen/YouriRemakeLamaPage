"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('load', createLoginPage);
function createLoginPage() {
    return __awaiter(this, void 0, void 0, function* () {
        addTitleToForm();
        addInputElements();
        addEventListenerToRegister();
        addEventListenerToLogin();
    });
}
function addSectionToLogin() {
    let section = document.createElement("section");
    return section;
}
function addInputElements() {
    let inputSection = addSectionToLogin();
    inputSection.id = "loginInput";
    let errorMessageSection = addSectionToLogin();
    errorMessageSection.id = "errorMes";
    inputSection.appendChild(createInputElements("text", "email", "Username..."));
    inputSection.appendChild(createInputElements("password", "password", "Password..."));
    inputSection.appendChild(errorMessageSection);
    inputSection.appendChild(createButton("login", "login", "Login"));
    inputSection.appendChild(createButton("register", "register", "Register"));
    document.getElementById("loginForm").appendChild(inputSection);
}
function createInputElements(inputType, inputID, placeHolder) {
    let input = document.createElement("input");
    input.type = inputType;
    input.name = inputID;
    input.id = inputID;
    input.placeholder = placeHolder;
    input.className = "loginInput";
    return input;
}
function createButton(buttonID, buttonName, buttonText) {
    let button = document.createElement("button");
    let textNode = document.createTextNode(buttonText);
    button.id = buttonID;
    button.className = buttonID;
    button.name = buttonName;
    button.appendChild(textNode);
    return button;
}
function addTitleToForm() {
    let loginForm = document.getElementById("loginForm");
    let titleText = document.createElement("h3");
    titleText.innerHTML = "Login";
    loginForm.appendChild(titleText);
}
function addEventListenerToRegister() {
    let registerButton = document.getElementById("register");
    registerButton.addEventListener("click", sendToRegisterPage);
}
function addEventListenerToLogin() {
    let loginButton = document.getElementById("login");
    let loginInput = document.getElementById("password");
    loginButton.addEventListener("click", sendCredentialsToServer);
    loginInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            loginInput.click();
        }
    });
}
function sendToRegisterPage() {
    window.location.href = 'register.html';
}
function sendCredentialsToServer() {
    return __awaiter(this, void 0, void 0, function* () {
        let username = getValueFromInput("email");
        let password = getValueFromInput("password");
        const resp = yield fetch(`http://localhost:4001/login?username=${username}&password=${password}`, { method: 'post' });
        let data = yield resp.json();
        if (data["login"] === "ok") {
            localStorage.setItem("user", JSON.stringify(data["results"][0]));
            gotGoodCredentials();
            setTimeout(function () {
                sendToHomePage();
            }, 500);
        }
        else {
            gotWrongCredentials();
        }
    });
}
function getValueFromInput(id) {
    return document.getElementById(id).value;
}
function gotWrongCredentials() {
    if (document.getElementById("err") === null) {
        let errorSec = document.getElementById("errorMes");
        let errorMesage = document.createElement("p");
        errorMesage.innerHTML = "Incorrect username or password";
        errorMesage.id = "err";
        errorMesage.className = "err";
        errorSec.appendChild(errorMesage);
    }
    else {
        return;
    }
}
function gotGoodCredentials() {
    let errorSec = document.getElementById("errorMes");
    let messagePara = document.getElementById("err");
    if (messagePara) {
        messagePara.innerHTML = "Correct username and password";
        messagePara.className = "good";
        errorSec.appendChild(messagePara);
    }
    else {
        let mesage = document.createElement("p");
        mesage.className = "good";
        mesage.innerHTML = "Correct username and password";
        errorSec.appendChild(mesage);
    }
}
function sendToHomePage() {
    window.location.href = "index.html";
}

window.addEventListener('load', createLoginPage);

async function createLoginPage(): Promise<void> {
    addTitleToForm();
    addInputElements();
    addEventListenerToRegister();
    addEventListenerToLogin();
}

function addSectionToLogin(): HTMLElement {
    let section = document.createElement("section");
    return section;
}

function addInputElements(): void {
    let inputSection: HTMLElement = addSectionToLogin();
    inputSection.id = "loginInput";
    let errorMessageSection: HTMLElement = addSectionToLogin();
    errorMessageSection.id = "errorMes"
    inputSection.appendChild(createInputElements("text", "email", "Username..."));
    inputSection.appendChild(createInputElements("password", "password", "Password..."));
    inputSection.appendChild(errorMessageSection);
    inputSection.appendChild(createButton("login", "login", "Login"));
    inputSection.appendChild(createButton("register", "register", "Register"));
    document.getElementById("loginForm")!.appendChild(inputSection);
}

function createInputElements(inputType: string, inputID: string, placeHolder: string): HTMLInputElement {
    let input: HTMLInputElement = document.createElement("input");
    input.type = inputType;
    input.name = inputID;
    input.id = inputID;
    input.placeholder = placeHolder;
    input.className = "loginInput";
    return input;
}

function createButton(buttonID: string, buttonName: string, buttonText: string): HTMLButtonElement {
    let button = document.createElement("button");
    let textNode = document.createTextNode(buttonText);
    button.id = buttonID;
    button.className = buttonID;
    button.name = buttonName;
    button.appendChild(textNode);
    return button;
}

function addTitleToForm(): void {
    let loginForm: HTMLElement = document.getElementById("loginForm")!;
    let titleText = document.createElement("h3");
    titleText.innerHTML = "Login";
    loginForm.appendChild(titleText);
}

function addEventListenerToRegister(): void {
    let registerButton = document.getElementById("register");
    registerButton!.addEventListener("click", sendToRegisterPage);
}

function addEventListenerToLogin(): void {
    let loginButton = document.getElementById("login");
    let loginInput = document.getElementById("password");
    loginButton!.addEventListener("click", sendCredentialsToServer);
    loginInput!.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            loginInput!.click();
        }
    });
}

function sendToRegisterPage(): void {
    window.location.href = 'register.html';
}

async function sendCredentialsToServer(): Promise<void> {
    let username: string = getValueFromInput("email");
    let password: string = getValueFromInput("password");
    const resp = await fetch(`http://localhost:4001/login?username=${username}&password=${password}`, { method: 'post' });
    let data = await resp.json();
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
}

function getValueFromInput(id: string) {
    return (document.getElementById(id) as HTMLInputElement).value;
}

function gotWrongCredentials(): void {
    if (document.getElementById("err") === null) {
        let errorSec: HTMLElement = document.getElementById("errorMes")!;
        let errorMesage = document.createElement("p");
        errorMesage.innerHTML = "Incorrect username or password";
        errorMesage.id = "err";
        errorMesage.className = "err";
        errorSec.appendChild(errorMesage);
    }
    else{
        return;
    }
}

function gotGoodCredentials(): void {
    let errorSec: HTMLElement = document.getElementById("errorMes")!;
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
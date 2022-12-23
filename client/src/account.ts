import { User } from "./user-verkoper-class.js";

window.addEventListener('load', createAccountPage);

function createAccountPage(): void {
    addAccountInformationSection();
    fillUserInfoOutLocal();
    addEventListenerToButton(updateUserInfo, "save");
    addEventListenerToButton(cancelUpdatingUserInfo, "cancel");
    addEventListenerToButton(deleteUserInfo, "delete");
}

function addAccountInformationSection(): void {
    let accountInfoSec: HTMLElement = addSectionToAccount("accountInfo");
    let accountButtonSec: HTMLElement = addSectionToAccount("accountButton");
    addButtons(accountButtonSec);
    addLabelsToInputELements(accountInfoSec);
    document.getElementById("account")!.appendChild(accountInfoSec);
    document.getElementById("account")!.appendChild(accountButtonSec);
}

function addLabelsToInputELements(accountSec: HTMLElement): void {
    accountSec.appendChild(createLabels("Username", createInputElements("text", "username", "Username...", "accountInput")));
    accountSec.appendChild(createLabels("Full Name", createInputElements("text", "name", "Full Name...", "accountInput")));
    accountSec.appendChild(createLabels("Address", createInputElements("text", "address", "Address...", "accountInput")));
    accountSec.appendChild(createLabels("Email", createInputElements("email", "email", "Email...", "accountInput")));
    accountSec.appendChild(createLabels("Password", createInputElements("password", "password", "Password...", "accountInput")));
    accountSec.appendChild(createLabels("Biotext", createInputElements("text", "bioText", "Biotext...", "bioTextInput")));
}

function createLabels(text: string, input: HTMLElement): HTMLElement {
    let label = document.createElement("label");
    label.innerHTML = text;
    label.className = "labelInput";
    label.appendChild(input);
    return label;
}

function addButtons(accountSec: HTMLElement): void {
    accountSec.appendChild(createButton("save", "save", "Save", "accountButton"));
    accountSec.appendChild(createButton("cancel", "cancel", "Cancel", "accountButton"));
    accountSec.appendChild(createButton("delete", "delete", "Delete account", "accountButton"));
    document.getElementById("account")!.appendChild(accountSec);
}

function addSectionToAccount(id: string): HTMLElement {
    let section = document.createElement("section");
    section.id = id;
    return section;
}

function createInputElements(inputType: string, inputID: string, placeHolder: string, className: string): HTMLInputElement {
    let input: HTMLInputElement = document.createElement("input");
    input.type = inputType;
    input.name = inputID;
    input.id = inputID;
    input.placeholder = placeHolder;
    input.className = className;
    return input;
}

function createButton(buttonID: string, buttonName: string, buttonText: string, className: string): HTMLButtonElement {
    let button = document.createElement("button");
    let textNode = document.createTextNode(buttonText);
    button.id = buttonID;
    button.className = className;
    button.name = buttonName;
    button.appendChild(textNode);
    return button;
}

function fillUserInfoOutLocal() {
    let user = JSON.parse(localStorage.getItem("user")!);
    (document.getElementById("username") as HTMLInputElement).placeholder = user.username;
    (document.getElementById("name") as HTMLInputElement).placeholder = user.name;
    (document.getElementById("address") as HTMLInputElement).placeholder = user.address;
    (document.getElementById("email") as HTMLInputElement).placeholder = user.mail;
    (document.getElementById("password") as HTMLInputElement).placeholder = user.password;
    (document.getElementById("bioText") as HTMLInputElement).placeholder = user.bioText;
}

function updateUserInfo() {
    let user = createNewUserWithInputValues();
    updateInfoToDB(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
}

function createNewUserWithInputValues() {
    let user = JSON.parse(localStorage.getItem("user")!);
    user.username = getValueFromInput("username");
    user.name = getValueFromInput("name");
    user.address = getValueFromInput("address");
    user.mail = getValueFromInput("email");
    user.password = getValueFromInput("password");
    user.bioText = getValueFromInput("bioText");
    return user;
}

function getValueFromInput(id: string): string {
    let inputValue = (document.getElementById(id) as HTMLInputElement).value;
    let user = JSON.parse(localStorage.getItem("user")!);
    if (inputValue.length < 1) {
        inputValue = user[id];
    }
    return inputValue;
}

function addEventListenerToButton(func: EventListenerOrEventListenerObject, element: string){
    let eventListenerObject = document.getElementById(element);
    eventListenerObject!.addEventListener("click", func);
}

function cancelUpdatingUserInfo(): void {
    emptyInputFields();
    fillUserInfoOutLocal();
}

function emptyInputFields(): void {
    (document.getElementById("username") as HTMLInputElement).value = "";
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("address") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("password") as HTMLInputElement).value = "";
    (document.getElementById("bioText") as HTMLInputElement).value = "";
}

async function deleteUserInfo(): Promise<void> {
    localStorage.removeItem("user");
    await fetch("http://localhost:4001/account/delete")
}

async function updateInfoToDB(user: string): Promise<void> {
    await fetch(`http://localhost:4001/account/update`, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: user
    });
}
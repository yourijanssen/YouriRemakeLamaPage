var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('load', createAccountPage);
function createAccountPage() {
    addAccountInformationSection();
    fillUserInfoOutLocal();
    addEventListenerToButton(updateUserInfo, "save");
    addEventListenerToButton(cancelUpdatingUserInfo, "cancel");
    addEventListenerToButton(deleteUserInfo, "delete");
}
function addAccountInformationSection() {
    let accountInfoSec = addSectionToAccount("accountInfo");
    let accountButtonSec = addSectionToAccount("accountButton");
    addButtons(accountButtonSec);
    addLabelsToInputELements(accountInfoSec);
    document.getElementById("account").appendChild(accountInfoSec);
    document.getElementById("account").appendChild(accountButtonSec);
}
function addLabelsToInputELements(accountSec) {
    accountSec.appendChild(createLabels("Username", createInputElements("text", "username", "Username...", "accountInput")));
    accountSec.appendChild(createLabels("Full Name", createInputElements("text", "name", "Full Name...", "accountInput")));
    accountSec.appendChild(createLabels("Address", createInputElements("text", "address", "Address...", "accountInput")));
    accountSec.appendChild(createLabels("Email", createInputElements("email", "email", "Email...", "accountInput")));
    accountSec.appendChild(createLabels("Password", createInputElements("password", "password", "Password...", "accountInput")));
    accountSec.appendChild(createLabels("Biotext", createInputElements("text", "bioText", "Biotext...", "bioTextInput")));
}
function createLabels(text, input) {
    let label = document.createElement("label");
    label.innerHTML = text;
    label.className = "labelInput";
    label.appendChild(input);
    return label;
}
function addButtons(accountSec) {
    accountSec.appendChild(createButton("save", "save", "Save", "accountButton"));
    accountSec.appendChild(createButton("cancel", "cancel", "Cancel", "accountButton"));
    accountSec.appendChild(createButton("delete", "delete", "Delete account", "accountButton"));
    document.getElementById("account").appendChild(accountSec);
}
function addSectionToAccount(id) {
    let section = document.createElement("section");
    section.id = id;
    return section;
}
function createInputElements(inputType, inputID, placeHolder, className) {
    let input = document.createElement("input");
    input.type = inputType;
    input.name = inputID;
    input.id = inputID;
    input.placeholder = placeHolder;
    input.className = className;
    return input;
}
function createButton(buttonID, buttonName, buttonText, className) {
    let button = document.createElement("button");
    let textNode = document.createTextNode(buttonText);
    button.id = buttonID;
    button.className = className;
    button.name = buttonName;
    button.appendChild(textNode);
    return button;
}
function fillUserInfoOutLocal() {
    let user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("username").placeholder = user.username;
    document.getElementById("name").placeholder = user.name;
    document.getElementById("address").placeholder = user.address;
    document.getElementById("email").placeholder = user.mail;
    document.getElementById("password").placeholder = user.password;
    document.getElementById("bioText").placeholder = user.bioText;
}
function updateUserInfo() {
    let user = createNewUserWithInputValues();
    updateInfoToDB(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
}
function createNewUserWithInputValues() {
    let user = JSON.parse(localStorage.getItem("user"));
    user.username = getValueFromInput("username");
    user.name = getValueFromInput("name");
    user.address = getValueFromInput("address");
    user.mail = getValueFromInput("email");
    user.password = getValueFromInput("password");
    user.bioText = getValueFromInput("bioText");
    return user;
}
function getValueFromInput(id) {
    let inputValue = document.getElementById(id).value;
    let user = JSON.parse(localStorage.getItem("user"));
    if (inputValue.length < 1) {
        inputValue = user[id];
    }
    return inputValue;
}
function addEventListenerToButton(func, element) {
    let eventListenerObject = document.getElementById(element);
    eventListenerObject.addEventListener("click", func);
}
function cancelUpdatingUserInfo() {
    emptyInputFields();
    fillUserInfoOutLocal();
}
function emptyInputFields() {
    document.getElementById("username").value = "";
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("bioText").value = "";
}
function deleteUserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        localStorage.removeItem("user");
        yield fetch("http://localhost:4001/account/delete");
    });
}
function updateInfoToDB(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:4001/account/update`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, body: user
        });
    });
}
export {};

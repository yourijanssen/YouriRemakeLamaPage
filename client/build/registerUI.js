/** @author Madelief van Slooten */
/** Creates UI for register block */
import { User, Verkoper } from "./user-verkoper-class.js";
import { register } from './register-server.js';
// makes sure the UI is created when someone enters the /register URL.
window.onload = (event) => {
    createRegisterArea();
};
/**
 * Builds the register block.
 */
function createRegisterArea() {
    getRegisterArea().style.display = 'flex';
    createBlockTitle();
    addInputElements();
    createBottomSection();
    addToRequirementArea();
    createPopUp();
}
/**
 * Gets the html area where everything needs to be appended to.
 * @returns HTMLElement section
 */
function getRegisterArea() {
    let registerBlock = document.getElementById('registerBlock');
    return registerBlock;
}
/**
 * Creates a section, this is used many times in different functions.
 * @returns HTMLElement section element
 */
function registerSection() {
    return document.createElement('SECTION');
}
/**
 * Creates an input field with the correct info you give it.
 * @param placeholdertext string Placeholder text for input field.
 * @param inputType string Type of input, like email or password.
 * @returns HTMLInputElement an input field
 */
function createRegisterInputElement(placeholdertext, inputType, id) {
    let input = document.createElement('input');
    input.type = inputType;
    input.placeholder = placeholdertext;
    input.className = 'registerInput';
    input.id = id;
    input.name = id;
    (id === 'username') ? input.addEventListener('input', checkUsernameRequirements) : input.addEventListener('input', checkPasswordRequirements);
    if (id === 'email') {
        input.addEventListener('input', checkEmail);
    }
    ;
    return input;
}
/**
 * Creates the title of the registerblock.
 */
function createBlockTitle() {
    let registerTitle = document.createElement('h3');
    registerTitle.innerHTML = 'Register';
    getRegisterArea().appendChild(registerTitle);
}
/**
 * builds the section with the inputfields.
 */
function addInputElements() {
    let inputSection = registerSection();
    inputSection.appendChild(createRegisterInputElement('username...', 'text', 'username'));
    inputSection.appendChild(createRegisterInputElement('email...', 'email', 'email'));
    inputSection.appendChild(createRegisterInputElement('password...', 'password', 'password'));
    getRegisterArea().appendChild(inputSection);
}
/**
 * Makes radio button with the info in a label and value you give it.
 * @param labelName string name of the label.
 * @param value string value of the radio button.
 * @returns HTMLLabelElement
 */
function createRadioButton(labelName, value, checked) {
    let label = document.createElement('label');
    let button = document.createElement('input');
    button.type = 'radio';
    button.value = value;
    button.name = 'account type';
    (checked === 'yes') ? button.checked = true : button.checked = false;
    label.innerHTML = labelName;
    label.appendChild(button);
    return label;
}
/**
 * Builds bottom section of registerblock.
 */
function createBottomSection() {
    let accountButtonSection = registerSection();
    accountButtonSection.id = 'accountButtonSection';
    accountButtonSection.appendChild(createRadioButton("I want to support lama's", 'user', 'yes'));
    accountButtonSection.appendChild(createRadioButton("I want to sell lama's", 'seller', 'no'));
    accountButtonSection.appendChild(createRegisterButton());
    getRegisterArea().appendChild(accountButtonSection);
}
/**
 * Creates a button with an event listener, this button registers your account.
 * @returns HTMLButtonElement Button to register
 */
function createRegisterButton() {
    let button = document.createElement('button');
    button.id = 'registerButton';
    button.type = 'button';
    button.innerHTML = 'Register';
    button.addEventListener('click', register);
    return button;
}
/**
 * Creates text that shows rules.
 * @param id string id for the element
 * @param text string for the requirement rule
 * @returns
 */
function addRequirementsText(id, text) {
    let passwordRequirement = document.createElement('p');
    passwordRequirement.innerText = text;
    passwordRequirement.classList.add('requirementRed');
    passwordRequirement.id = id;
    return passwordRequirement;
}
/**
 * adds requirement text to the correct area.
 */
function addToRequirementArea() {
    let requirementSection = registerSection();
    requirementSection.id = 'requirementSection';
    requirementSection.appendChild(addRequirementsText('passReq', 'Password is at least 8 characters'));
    requirementSection.appendChild(addRequirementsText('userReq', 'Username is between 5 and 20 characters'));
    getRegisterArea().appendChild(requirementSection);
}
/**
 * Takes the username input field as an event. So everytime the user types it is checked so the requirement text can show feedback.
 * @param event Event.
 * @returns boolean
 */
export function checkUsernameRequirements(event) {
    var _a, _b;
    let usernameLength = event.target.value.length;
    if (usernameLength <= 20 && usernameLength >= 5) {
        (_a = document.getElementById('userReq')) === null || _a === void 0 ? void 0 : _a.classList.replace('requirementRed', 'requirementGreen');
        return true;
    }
    else {
        (_b = document.getElementById('userReq')) === null || _b === void 0 ? void 0 : _b.classList.replace('requirementGreen', 'requirementRed');
        return false;
    }
}
/**
 * Takes the password input field as an event. So everytime the user types it is checked so the requirement text can show feedback.
 * @param event Event.
 * @returns boolean
 */
export function checkPasswordRequirements(event) {
    var _a, _b;
    let passwordLength = event.target.value.length;
    if (passwordLength >= 8) {
        (_a = document.getElementById('passReq')) === null || _a === void 0 ? void 0 : _a.classList.replace('requirementRed', 'requirementGreen');
        return true;
    }
    else {
        (_b = document.getElementById('passReq')) === null || _b === void 0 ? void 0 : _b.classList.replace('requirementGreen', 'requirementRed');
        return false;
    }
}
/**
 * Regular Expression to check if email format. Pattern was found here:
 * Bron: https://www.w3resource.com/javascript/form/email-validation.php
 * @returns boolean
 */
export function checkEmail() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById('email').value;
    if (email.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}
// LOGICA //
/** Logica staat nu hier in plaats van in een andere file. Dit komt omdat ik heel veel problemen heb met de import en ik
 * nog geen tijd heb gehad dit op te lossen.
 */
/**
 * Gets input value. This is used often so it's made into a getter function.
 * @returns string
 */
export function getUsername() {
    return document.getElementById('username').value;
}
/**
 * Gets input value. This is used often so it's made into a getter function.
 * @returns string
 */
export function getEmail() {
    return document.getElementById('email').value;
}
/**
 * Gets input value. This is used often so it's made into a getter function.
 * @returns string
 */
export function getPassword() {
    return document.getElementById('password').value;
}
/**
 * Checks if radiobutton selected user or seller. Returns number value depending on account type.
 * This will be used later to make the right objects for account saving.
 * @returns number
 */
export function getAccountType() {
    let radioButton = document.querySelector('input[name="account type"]:checked').value;
    if (radioButton === 'user') {
        return 0;
    }
    else {
        return 1;
    }
}
// The next two function will be used for object making. This happens in other issue.
function createNewUser() {
    return new User(getUsername(), getEmail(), getPassword());
}
function createNewVerkoper() {
    return new Verkoper(getUsername(), getEmail(), getPassword());
}
// This function is used to save info into localstorage.
// function registerUserInfo() {
//   let radioButton: string = (<HTMLInputElement>document.querySelector('input[name="account type"]:checked')).value;
//   if (getUsername().length <= 20 && getUsername().length >= 5 && getPassword().length >= 8 && getEmail().length > 0) {
//     //   (radioButton === 'user') ? localStorage.setItem(String(new Date().getMilliseconds()), JSON.stringify(createNewUser())) :
//     //  localStorage.setItem(String(new Date().getMilliseconds()), JSON.stringify(createNewVerkoper()));
//     succesPopUp();
//   } else {
//     console.log('Please enter all fields');
//     failPopUp();
//   }
// }
/**
 * Succes pop up, changed text to give feedback to user.
 */
export function succesPopUp() {
    console.log('Registered Succesfully');
    document.getElementById('popupsection').className = '';
    document.getElementById('popupsection').classList.add('popupSucces');
    document.getElementById('popuptext').innerText = 'Registration succeeded. Welcome to the lama family!';
}
/**
 * Fail pop up, changed text to give feedback to user.
 */
export function failPopUp() {
    console.log('Register Failed! Try Again');
    document.getElementById('popupsection').className = '';
    document.getElementById('popupsection').classList.add('popupFail');
    document.getElementById('popuptext').innerText = 'Registration failed. User already excists or fields are not correct.';
}
/**
 * Creates an area for the popups to get displayed in.
 */
function createPopUp() {
    let popupsection = registerSection();
    let popuptext = document.createElement('p');
    popuptext.id = 'popuptext';
    popupsection.id = 'popupsection';
    popupsection.classList.add('popupHidden');
    popupsection.appendChild(popuptext);
    getRegisterArea().appendChild(popupsection);
}

"use strict";
/** @author Madelief van Slooten 
 * 
*/
function createRegisterArea() {
    console.log('Time to register!');
    getRegisterArea()!.style.display = 'flex';
    createBlockTitle();
    addInputElements();
    createBottomSection();
}
function getRegisterArea() {
    let registerBlock = document.getElementById('registerBlock');
    return registerBlock;
}
function registerSection() {
    return document.createElement('SECTION');
}
function createRegisterInputElement(placeholdertext: string, inputType: string) {
    let input = document.createElement('input');
    input.type = inputType;
    input.placeholder = placeholdertext;
    input.className = 'registerInput';
    return input;
}
function createBlockTitle() {
    let registerTitle = document.createElement('h3');
    registerTitle.innerHTML = 'Register';
    getRegisterArea()!.appendChild(registerTitle);
}
function addInputElements() {
    let inputSection = registerSection();
    inputSection.appendChild(createRegisterInputElement('username...', 'text'));
    inputSection.appendChild(createRegisterInputElement('email...', 'email'));
    inputSection.appendChild(createRegisterInputElement('password...', 'password'));
    getRegisterArea()!.appendChild(inputSection);
}
function createRadioButton(labelName: string, value: string) {
    let label = document.createElement('label');
    let button = document.createElement('input');
    button.type = 'radio';
    button.value = value;
    button.name = 'account type';
    label.innerHTML = labelName;
    label.appendChild(button);
    return label;
}
function createBottomSection() {
    let accountButtonSection = registerSection();
    accountButtonSection.id = 'accountButtonSection';
    accountButtonSection.appendChild(createRadioButton("I want to support lama's", 'user'));
    accountButtonSection.appendChild(createRadioButton("I want to sell lama's", 'seller'));
    accountButtonSection.appendChild(createRegisterButton());
    getRegisterArea()!.appendChild(accountButtonSection);
}
function createRegisterButton() {
    let button = document.createElement('button');
    button.id = 'registerButton';
    button.type = 'button';
    button.innerHTML = 'Register';
    button.addEventListener('click', registerUserInfo);
    return button;
}
function registerUserInfo() {
    console.log('Registered!');
}

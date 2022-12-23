"use strict";
/** @author Madelief van Slooten */
function initAddUI() {
    addTitle('Pricing Options');
    addPricingCards();
    buildLeftSection();
}
function getLeftSection() {
    return document.getElementById('addLeft');
}
function getRightSection() {
    return document.getElementById('addRight');
}
function addTitle(text) {
    let title = document.createElement('h3');
    title.innerHTML = text;
    getRightSection().appendChild(title);
}
function createPricingOptionCard() {
    let card = document.createElement('section');
    card.classList.add('pricingCard');
    card.appendChild(createInputField('Title', 'title', 'text'));
    card.appendChild(createInputField('Benefits', 'benefits', 'text'));
    card.appendChild(createInputField('Price', 'price', 'number'));
    return card;
}
function createInputField(text, id, type) {
    let input = document.createElement('input');
    input.setAttribute('required', '');
    input.id = id;
    input.placeholder = text;
    input.type = type;
    input.classList.add('pricingInput');
    return input;
}
function addPricingCards() {
    for (let i = 0; i < 3; i++) {
        getRightSection().appendChild(createPricingOptionCard());
    }
}
function addInputSection(text, id) {
    let section = document.createElement('section');
    let input = document.createElement('input');
    input.setAttribute('required', '');
    input.id = id;
    input.placeholder = text;
    input.type = 'text';
    section.appendChild(input);
    return section;
}
function buildLeftSection() {
    getLeftSection().appendChild(addInputSection('Lama Name', 'lamaname'));
    getLeftSection().appendChild(addInputSection('Tell us about your lama!', 'lamabio'));
}

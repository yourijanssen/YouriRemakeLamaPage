"use strict";
/** @author Madelief van Slooten */
/** Creates lama-cards in a grid.
 * Uses dummy data for now, will add lama cards with a database when it is made.
 */
/**
 * gets the Lama card product area and sets a dummydata lama.
 */
function initLamaCard() {
    let cardArea = document.getElementById('lamaProductArea');
    addLamaCards(cardArea);
}
/**
 * This function creates a section for a card.It can also be used as a section for other card info.
 * @returns HTMLElement cardsection.
 */
function createSection() {
    let cardSection = document.createElement('SECTION');
    return cardSection;
}
/**
 * This function creates a string containing info about the lama. This will eventually be pulled out a database
 * @param object {[key: string]: string} key, value pairs containing lama data.
 * @returns HTMLParagraphElement
 */
function getInfo(object) {
    let lamaInfoText = document.createElement('p');
    lamaInfoText.innerText = `${object['lamaAge']} years old - ${object['lamaGender']}`;
    return lamaInfoText;
}
/**
 * This function creates a string containing the name of the lama. This will eventually be pulled out a database
 * @param object {[key: string]: string} key, value pairs containing lama data.
 * @returns HTMLParagraphElement
 */
function getName(object) {
    let lamaNameText = document.createElement('h5');
    lamaNameText.innerText = object['lamaName'];
    return lamaNameText;
}
/**
 * Get's image of the lama and adds the class so that the right css is added. This image will eventually be pulled out a database
 * @param object {[key: string]: string} key, value pairs containing lama data.
 * @returns HTMLImageElement
 */
function getImage(object) {
    let lamaImg = document.createElement('img');
    lamaImg.src = object['lamaImage'];
    lamaImg.classList.add('lamaCardImage');
    return lamaImg;
}
/**
 * Using a for loop (This will eventually be the length of lama's in database) cards are created using the correct info.
 * event listeners are added so the cards lead to product page.
 * !! This function will be replaced by backend code later on. !!
 * @param area HTMLElement section for the lama-cards
 */
function addLamaCards(area) {
    let lamaObject = JSON.parse(localStorage.getItem('dummylama')); //This should get info from database
    for (let i = 0; i < 12; i++) {
        let card = createSection();
        card.classList.add('lamaCard');
        card.appendChild(getImage(lamaObject));
        card.appendChild(addSectionToLamaCard(lamaObject));
        card.addEventListener('click', goToProduct);
        area.appendChild(card);
    }
}
/**
 * Adds a section to the card so the info text can get outlined correctly.
 * @param object {[key: string]: string} key, value pairs containing lama data.
 * @returns HTMLElement section
 */
function addSectionToLamaCard(object) {
    let textSection = createSection();
    textSection.classList.add('lamaCardtext');
    textSection.appendChild(getName(object));
    textSection.appendChild(getInfo(object));
    return textSection;
}
/**
 * Event listener function
 */
function goToProduct() {
    window.location.href = './product.html';
}
initLamaCard();

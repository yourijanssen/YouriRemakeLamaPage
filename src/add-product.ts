/** @author Madelief van Slooten */

function initAddUI(){
    addTitle('Pricing Options');
    addPricingCards();
    buildLeftSection();
}

function getLeftSection(): HTMLElement {
    return <HTMLElement>document.getElementById('addLeft')!;
}

function getRightSection(): HTMLElement {
    return <HTMLElement>document.getElementById('addRight')!;
}

function addTitle(text: string): void{
    let title: HTMLParagraphElement = document.createElement('h3');

    title.innerHTML = text;
    getRightSection().appendChild(title);
}

function createPricingOptionCard(): HTMLElement{
    let card: HTMLElement = document.createElement('section');

    card.classList.add('pricingCard');

    card.appendChild(createInputField('Title', 'title', 'text'));
    card.appendChild(createInputField('Benefits', 'benefits', 'text'));
    card.appendChild(createInputField('Price', 'price', 'number'));

    return card;
}

function createInputField(text: string, id: string, type: string): HTMLInputElement{
    let input: HTMLInputElement = document.createElement('input');

    input.setAttribute('required', '');
    input.id = id;
    input.placeholder = text;
    input.type = type;
    input.classList.add('pricingInput');

    return input;
}

function addPricingCards(){
    for (let i = 0; i < 3; i++){
        getRightSection().appendChild(createPricingOptionCard());
    }
}

function addInputSection(text: string, id: string): HTMLElement{
    let section: HTMLElement = document.createElement('section');
    let input: HTMLInputElement = document.createElement('input');

    input.setAttribute('required', '');
    input.id = id;
    input.placeholder = text;
    input.type = 'text';

    section.appendChild(input);

    return section;
}

function buildLeftSection(){
    getLeftSection().appendChild(addInputSection('Lama Name', 'lamaname'));
    getLeftSection().appendChild(addInputSection('Tell us about your lama!', 'lamabio'));
}
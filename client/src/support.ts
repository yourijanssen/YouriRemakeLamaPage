/**  @author Mays AlTimemy */

function initSupportOneTitel() {
  let supOneSec = document.getElementById("supOne");
  let titel: HTMLElement = document.createElement("h2");
  titel.textContent = "Helping Hand";
  titel.className = "titel";
  supOneSec?.appendChild(titel);
}


function initSupportOneBenefits() {
  let supOneSec = document.getElementById("supOne");
  let supBenefits: HTMLElement = document.createElement("tabel");
  let benefitsOne = document.createElement("td");
  let br = document.createElement("br");
  let benefitsTwo = document.createElement("td");
  let brr = document.createElement("br");

  benefitsOne.textContent = "- Weekly picture";
  benefitsTwo.textContent = "- Berrie keychain";
  supBenefits.className = "supBenefitsClass";
  supOneSec?.appendChild(supBenefits);
  supBenefits.appendChild(benefitsOne);
  supBenefits.appendChild(br);
  supBenefits.appendChild(benefitsTwo);
  supBenefits.appendChild(brr);
}
function initSupportOnePrice() {
    let supOneSec = document.getElementById("supOne");
    let price: HTMLElement = document.createElement("h3");
    price.textContent = "$5.00";
    price.className = "Price";
    supOneSec?.appendChild(price);
  }
  
function initSupportOneBtn() {
  let supOneSec = document.getElementById("supOne");
  let btn: HTMLButtonElement = document.createElement("button");
  btn.textContent = "Subscribe";
  btn.id = "btnOne";
  supOneSec?.appendChild(btn);
}
initSupportOneTitel();
initSupportOneBenefits();
initSupportOnePrice();
initSupportOneBtn();
/**
 *
 *
 */

function initSupportTwoTitel() {
  let supOneSec = document.getElementById("supTwo");
  let titel: HTMLElement = document.createElement("h2");
  titel.textContent = "Lama Support";
  titel.className = "titel";
  supOneSec?.appendChild(titel);
}


function initSupportTwoBenefits() {
  let supOneSec = document.getElementById("supTwo");
  let supBenefits: HTMLElement = document.createElement("tabel");
  let benefitsOne = document.createElement("td");
  let br = document.createElement("br");
  let benefitsTwo = document.createElement("td");
  
  benefitsOne.textContent = "- Weekly picture";
  benefitsTwo.textContent = "- Berrie keychain";

  supBenefits.className = "supBenefitsClass";
  supOneSec?.appendChild(supBenefits);
  supBenefits.appendChild(benefitsOne);
  supBenefits.appendChild(br);
  supBenefits.appendChild(benefitsTwo);
  
}
function initSupportTwoPrice() {
    let supOneSec = document.getElementById("supTwo");
    let price: HTMLElement = document.createElement("h3");
    price.textContent = "$5.00";
    price.className = "Price";
    supOneSec?.appendChild(price);
  }

function initSupportTwoBtn() {
  let supOneSec = document.getElementById("supTwo");
  let btn:HTMLButtonElement = document.createElement("button");
  btn.textContent = "Subscribe";
  btn.id = "btnTwo";
  supOneSec?.appendChild(btn);
}
initSupportTwoTitel();
initSupportTwoBenefits();
initSupportTwoPrice();
initSupportTwoBtn();
/**
 *
 */
function initSupportThreeTitel() {
  let supOneSec = document.getElementById("supThree");
  let titel: HTMLElement = document.createElement("h2");
  titel.textContent = "Lama Lover";
  titel.className = "titel";
  supOneSec?.appendChild(titel);
}


function initSupportThreeBenefits() {
  let supOneSec = document.getElementById("supThree");
  let supBenefits: HTMLElement = document.createElement("tabel");
  let benefitsOne = document.createElement("td");
  let br = document.createElement("br");
  let benefitsTwo = document.createElement("td");

  benefitsOne.textContent = "- Weekly picture";
  benefitsTwo.textContent = "- Berrie keychain";

  supBenefits.className = "supBenefitsClass";
  supOneSec?.appendChild(supBenefits);
  supBenefits.appendChild(benefitsOne);
  supBenefits.appendChild(br);
  supBenefits.appendChild(benefitsTwo);
  
}

function initSupportThreePrice() {
    let supOneSec = document.getElementById("supThree");
    let price: HTMLElement = document.createElement("h3");
    price.textContent = "$5.00";
    price.className = "Price";
    supOneSec?.appendChild(price);
  }

function initSupportThreeBtn() {
    let supOneSec = document.getElementById("supThree");
    let btn: HTMLButtonElement = document.createElement("button");
    btn.textContent = "Subscribe";
    btn.id = "btnThree";
    supOneSec?.appendChild(btn);
  }
  initSupportThreeTitel()
  initSupportThreeBenefits() 
  initSupportThreePrice()
  initSupportThreeBtn()

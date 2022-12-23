"use strict";
initImages();
function initImages() {
    //addImagesWithSections(getImages());
    setSlideIndex(0);
    let imgSec = document.getElementById("productImg");
    let imgEl = document.createElement("img");
    imgEl.id = "image2";
    imgSec.appendChild(imgEl);
    moveToNextImage();
    setProductText();
    setProductName();
    setProductProfilePicture();
}
function getLamaObject() {
    return JSON.parse(localStorage.getItem('dummylama'));
}
function getImages() {
    let dummyLama = JSON.parse(localStorage.getItem('dummylama'));
    let img = dummyLama["lamaGalleryImages"];
    return img;
}
function moveToNextImage() {
    let images = getImages();
    let imgSec = document.getElementById("productImg");
    let imgEl = document.getElementById("image2");
    let slideIndex = getSlideIndex();
    imgEl.src = images[slideIndex];
    imgSec.appendChild(imgEl);
}
function plusSlides(n) {
    let imageCount = getImages();
    setSlideIndex(getSlideIndex() + n);
    if (getSlideIndex() < 0) {
        setSlideIndex(imageCount.length - 1);
    }
    else if (getSlideIndex() > (imageCount.length - 1)) {
        setSlideIndex(0);
    }
    moveToNextImage();
}
function getSlideIndex() {
    return Number(localStorage.getItem("slideIndex"));
}
function setSlideIndex(slideIndex) {
    localStorage.setItem("slideIndex", slideIndex);
}
function setProductText() {
    let dummyLama = getLamaObject();
    document.getElementById("lamaText").innerText = dummyLama["lamaDescription"];
}
function setProductName() {
    let dummyLama = getLamaObject();
    document.getElementById("lamaName").innerText = dummyLama["lamaName"];
}
function setProductProfilePicture() {
    let dummyLama = getLamaObject();
    let imgEl = new Image;
    let profileSec = document.getElementById("lamaProfilePicture");
    imgEl = document.createElement("img");
    imgEl.id = "image";
    imgEl.src = dummyLama["lamaImage"];
    profileSec.appendChild(imgEl);
}
function addSection(id) {
    let section = document.createElement("section");
    section.className = id;
    return section;
}

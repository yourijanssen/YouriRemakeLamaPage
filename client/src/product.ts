initImages();

function initImages(): void {
    //addImagesWithSections(getImages());
    setSlideIndex(0);
    let imgSec = document.getElementById("productImg");
    let imgEl: HTMLImageElement = document.createElement("img");
    imgEl.id = "image2";
    imgSec!.appendChild(imgEl);
    moveToNextImage();
    setProductText();
    setProductName();
    setProductProfilePicture();
}

function getLamaObject(): { [key: string]: string } {
    return JSON.parse(localStorage.getItem('dummylama')!);
}

function getImages(): string[] {
    let dummyLama: { [key: string]: string[] } = JSON.parse(localStorage.getItem('dummylama')!);
    let img: string[] = dummyLama["lamaGalleryImages"];
    return img;
}

function moveToNextImage(): void {
    let images: string[] = getImages();
    let imgSec = document.getElementById("productImg");
    let imgEl = document.getElementById("image2")! as HTMLImageElement;
    let slideIndex = getSlideIndex();
    imgEl.src = images[slideIndex];
    imgSec!.appendChild(imgEl);
}

function plusSlides(n: number) {
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

function getSlideIndex(): number {
    return Number(localStorage.getItem("slideIndex"));
}

function setSlideIndex(slideIndex: number) {
    localStorage.setItem("slideIndex", slideIndex as unknown as string);
}

function setProductText(): void {
    let dummyLama: { [key: string]: string } = getLamaObject();
    document.getElementById("lamaText")!.innerText = dummyLama["lamaDescription"];
}

function setProductName(): void {
    let dummyLama: { [key: string]: string } = getLamaObject();
    document.getElementById("lamaName")!.innerText = dummyLama["lamaName"];
}

function setProductProfilePicture(): void {
    let dummyLama: { [key: string]: string } = getLamaObject();
    let imgEl: HTMLImageElement = new Image;
    let profileSec = document.getElementById("lamaProfilePicture");
    imgEl = document.createElement("img");
    imgEl.id = "image";
    imgEl.src = dummyLama["lamaImage"];
    profileSec!.appendChild(imgEl);
}

function addSection(id: string): HTMLElement {
    let section = document.createElement("section");
    section.className = id;
    return section;
}
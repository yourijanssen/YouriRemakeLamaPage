"use strict";
/** @author Madelief van Slooten */
/**
 * Creates some lama dummy data in localstorage
 */
function dummyDataLama() {
    let dummyLama = { 'lamaName': 'Berrie', 'lamaAge': '12', 'lamaGender': 'Male', 'lamaImage': './assets/berrie2.jpg',
        'lamaGalleryImages': ["assets/paus.jpg", "assets/pierre.jpg", "assets/adrian.jpg", "assets/lama-sjaal.jpg", "assets/zaur.jpg"],
        'lamaDescription': "Berrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Berrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!" };
    localStorage.setItem('dummylama', JSON.stringify(dummyLama));
}
dummyDataLama();

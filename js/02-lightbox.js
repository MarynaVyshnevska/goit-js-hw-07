import { galleryItems } from './gallery-items.js';
// Change code below this line
const lightboxConteiner = document.querySelector('.gallery');
const cardsLightbox = createLightboxImg(galleryItems);

lightboxConteiner.insertAdjacentHTML('afterbegin', cardsLightbox);

// create html lightbox
function createLightboxImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <a class="gallery__item" href="${original}">
                    <img 
                        class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" />
                </a>
            `;
        })
        .join('');
    
}

//  Modal window
let lightbox = new SimpleLightbox('.gallery a', {
        /* options */
        captionsData: 'alt',
        captionDelay: 250,
        animationSpeed: 200,
        // nableKeyboard: true defolt -><- + esc
        // масштаб изображения
        scaleImageToRatio: true,

    });





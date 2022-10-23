import { galleryItems } from './gallery-items.js';
// Change code below this line
const lightboxConteiner = document.querySelector('.gallery');
const cardsLightbox = createLightboxImg(galleryItems);

lightboxConteiner.insertAdjacentHTML('afterbegin', cardsLightbox);

lightboxConteiner.addEventListener('click', onLightboxConteinerClick);



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

function onLightboxConteinerClick(e) {
    // запрет на скачивание
    e.preventDefault();

    // что б не кликалось на картинку + modal
    if (e.target.nodeName !== "IMG") {
        return;
    }
    // It's the best gallery for lazy people like me
    let lightbox = new SimpleLightbox('.gallery a', {
        /* options */
        captionsData: 'alt',
        captionDelay: 250,
        animationSpeed: 200,
        // nableKeyboard: true defolt -><- + esc
        // масштаб изображения
        scaleImageToRatio: true,

    });
 
}







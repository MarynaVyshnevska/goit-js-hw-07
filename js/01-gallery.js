import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector('.gallery');
const cardsGallery = createGalleryImg(galleryItems);

galleryConteiner.insertAdjacentHTML('afterbegin', cardsGallery);

galleryConteiner.addEventListener('click', onGalleryConteinerClick);



// create html gallery
function createGalleryImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>
            `;
        })
        .join('');
}


function onGalleryConteinerClick(e) {
    // запрет на скачивание
    e.preventDefault();

    // что б не кликалось на картинку + modal
    if (e.target.nodeName !== "IMG") {
        return;
        } else {
        const instance = basicLightbox.create(`
            <div class="modal">
                <img src="${e.target.dataset.source}" width="1100" height="800">
            </div>`
            )
            instance.show();  
            console.log(e.target.dataset.source);
            window.addEventListener("keydown", (e) => {
                if (e.code === "Escape" || "Enter") {
                    instance.close();
                }
            });
        } 

    changeActiveItemClass();
    
    const imgItem = e.target;
    const parentGalleryItem = imgItem.closest('.gallery__item');
    addActiveItemClass(parentGalleryItem);

    // console.log(parentGalleryItem);
    
}

//  снимаем класс с активного
function changeActiveItemClass() {
    const currentActiveItem = document.querySelector('.gallery__item.is-active');

    if (currentActiveItem) {
        currentActiveItem.classList.remove('is-active');
    }
}
// ставим на активный
function addActiveItemClass(item) {
    item.classList.add('is-active');
}


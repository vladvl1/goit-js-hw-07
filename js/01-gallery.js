import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
const item = createGallery(galleryItems);

container.insertAdjacentHTML("beforeend", item);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
} 

container.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
  <img src = "${event.target.dataset.source}"/>`, {
      onShow: (instance) => {
	document.body.addEventListener("keydown",(evt) => {
            if (evt.key === "Escape") {
                document.body.removeEventListener("keydown",(evt));
                instance.close();
            }
        });
    }
},).show();
    
    if (event.target.nodeName === "IMG") {
        return instance;
    } else {
        return;
    }
  
};

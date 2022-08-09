import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', showFullScreenPicture);

const markupForGallery = createMarkupForGallery(galleryItems);

function createMarkupForGallery(items) {
  return items
    .map(
      item =>
        `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`
    )
    .join(``);
}

galleryEl.insertAdjacentHTML('beforeend', markupForGallery);

function showFullScreenPicture(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  new SimpleLightbox('.gallery a');
}

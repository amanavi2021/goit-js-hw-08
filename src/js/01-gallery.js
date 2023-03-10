// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('afterbegin',markup);

new SimpleLightbox('.gallery a', {captions:true, captionSelector:'img', captionType:'attr', captionsData:'alt',captionPosition:'bottom', captionDelay:250});

function createGalleryMarkup(images){
    return images.map(({preview, original, description}) => {
     return `<a class='gallery__item' href=${original}>
     <img
     class='gallery__image'
     src=${preview}
     alt=${description}
     />
     </a>
     `
    }).join('');
}


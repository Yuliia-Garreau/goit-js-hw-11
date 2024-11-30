// напиши всю логіку роботи додатка.

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import error from "./img/error.png"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryLargeImage = new SimpleLightbox('.item-gallery a', {
  captionsData: 'alt',
  captionDelay: 300,
  className: 'bg-color',
});


const form = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery-list');
const loader = document.querySelector(".loader");

iziToast.settings({
  timeout: 1000,
  position: 'topRight',
  });

  loader.style.display = 'none';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let inputValue = event.target.elements.input.value.trim();
  // loader.style.display = 'block';

  if (inputValue === '') {
    loader.style.display = 'none';
    iziToast.warning({
      title: 'Caution',
      message: 'The field is empty, please type your request',
  });
  
    return ;
  }
  if (inputValue) {
    loader.style.display = 'block';
  }
  

    fetchImages(inputValue)
      .then((response) => {
  if (response.total === 0) { 
      throw new Error();
      }
      loader.style.display = 'none';
    return response.hits;
  })
      .then((images) => {
        gallery.innerHTML = "";
        loader.style.display = 'none';
                
        gallery.innerHTML = renderImages(images);
        inputValue = "";
        galleryLargeImage.refresh();
      }
      )
      .catch(() => {
        loader.style.display = 'none';
        iziToast.error ({
        iconUrl: error,
        titleColor: '#fff',
        messageColor: '#fff',
        imageWidth: 24,
        iconColor: '#fff',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      })}
        )
        .finally(() => {
          event.target.elements.input.value = "";
          })

          
          
}   
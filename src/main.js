// напиши всю логіку роботи додатка.
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


// const makeMessage = username => {
//   return `Welcome, ${username}!`;
// };
// export default makeMessage;
// import makeMessage from './makeMessage';
// console.log(makeMessage('Jacob')); // "Welcom, Jacob!"

// export const makeMessage = username => {
//   return `Welcome, ${username}!`;
// };
// export const levels = ['easy', 'medium', 'hard'];
// import { makeMessage, levels } from './makeMessage';
// console.log(makeMessage('Jacob')); // "Welcom, Jacob!"
// console.log(levels); // ["easy", "medium", "hard"]

const form = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery-list');

iziToast.settings({
  timeout: 1000,
  position: 'topRight',
  });

//   form.addEventListener('submit', (event) => {
   
//    event.preventDefault();
//     const inputValue = event.target.elements.input.value.trim();
    
   
//     fetchImages(inputValue)
//     .then((images) => renderImages(images))
//     .catch((error) => console.log(error));
  
    
//   });
// console.log(fetchImages());

// if (inputValue === '') {
//       iziToast.warning({
//         title: 'Caution',
//         message: 'The field is empty, please type your request',
//     });
//       return console.log('empty');
//     }
//       console.log(inputValue);

// gallery.insertAdjacentHTML("beforeend", fetchImages)


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements.input.value.trim();
console.log(event);

  if (inputValue === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'The field is empty, please type your request',
  });
    return console.log('empty');
  }
    console.log(inputValue);

    fetchImages(inputValue)
      .then((response) => {
  if (response.total === 0) {
            iziToast.error({
              // title: 'Error',
              message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
      }})
      .then((response) => renderImages(response))
      
    fetchImages(inputValue)
    console.log(fetchImages(inputValue));
    
        iziToast.settings({
      timeout: 1000,
      position: 'topRight',
      });
console.log(renderImages(inputValue));
}
gallery.insertAdjacentHTML("beforeend", fetchImages)

console.log(typeof (gallery.insertAdjacentHTML("beforeend", fetchImages)));


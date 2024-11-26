// створи функції для відображення елементів інтерфейсу.

// function createMarkup() {

// }

// export const renderImages = images => {
//   return images
//     .map(
//       image => `
//     <li class='gallery-item'>
//       <a href=${image.largeImageURL}>
//         <img alt=${image.tags} src=${image.webformatURL} class='gallery-image'/>
//       </a>

export const renderImages = (images) => {
        return images
      .map(
        image => `
          <li class="item-gallery">
          <a class="link-gallery" href="${image.largeImageURL}">
            <img  
            class="img-gallery"
              src="${image.webformatURL}" 
              alt="${image.tags}"
            />
          </a>
            <ul>
              <li>
                <p class="likes">Likes
                  <span>${image.likes}</span>
                </p>
              </li>
              <li>
                <p class="views">Views
                  <span>${image.views}</span>
                </p>
              </li>
              <li>
                <p class="comments">Comments
                  <span>${image.comments}</span>
                </p>
              </li>
              <li>
                <p class="downloads">Downloads
                  <span>${image.downloads}</span>
                </p>
              </li>
            </ul>
          </li>
        
      `)
    .join("");
    // gallery.insertAdjacentHTML("beforeend", markup);
    console.log(typeof (images));
    
}

// {
//src "webformatURL": "https://pixabay.com/get/g836fdef8f051e950db41d2f551acecd2701bd5d847f859e1449b4a34561997fe8e045015cc53aff6842324b54753bd512cd869e4cda38e7a5d3b79001e604ee8_640.jpg",
//href "largeImageURL": "https://pixabay.com/get/g63cd19c97221e6e15a821bfe54e56393e6e786f2f49f0cb21c05f41ceb54a547593d524f105508de0d3bc050e297f957d94ee8ffdba49a5aa345c7ba1bcb0cf8_1280.jpg",
//alt "tags": "cat, animal, nature",
// "likes": 1990,
// "views": 868179,
// "comments": 336,
// "downloads": 543018,

//   "id": 1045782,
//   "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cats-eyes-1045782/",
//   "type": "photo",  
//   "previewURL": "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_150.jpg",
//   "previewWidth": 150,
//   "previewHeight": 102,  
//   "webformatWidth": 640,
//   "webformatHeight": 437,  
//   "imageWidth": 2064,
//   "imageHeight": 1410,
//   "imageSize": 1268850,  
//   "collections": 24102,
//   "user_id": 127419,
//   "user": "cocoparisienne",
//   "userImageURL": "https://cdn.pixabay.com/user/2023/10/15/14-40-46-737_250x250.jpeg"
// },

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
            src="${image.webformatURL}"
            class="img-gallery"
               
              alt="${image.tags}"
              title=""
            />
          
            <ul class="list-info">
              
            <li class="list-item-info">
                <p class="info-title">Likes</p>
                <p class="info-value">${image.likes}</p>
            </li>

              <li class="list-item-info">
                <p class="info-title">Views</p>
                <p class="info-value">${image.views}</p>
              </li>

              <li class="list-item-info">
                <p class="info-title">Comments</p>
                <p class="info-value">${image.comments}</p>
              </li>

              <li class="list-item-info">
                <p class="info-title">Downloads</p>
                <p class="info-value">${image.downloads}</p>
              </li>

            </ul>
            </a>
          </li>
        
      `)
    .join("");
}

// {
//src "webformatURL": "https://pixabay.com/get/g836fdef8f051e950db41d2f551acecd2701bd5d847f859e1449b4a34561997fe8e045015cc53aff6842324b54753bd512cd869e4cda38e7a5d3b79001e604ee8_640.jpg",
//href "largeImageURL": "https://pixabay.com/get/g63cd19c97221e6e15a821bfe54e56393e6e786f2f49f0cb21c05f41ceb54a547593d524f105508de0d3bc050e297f957d94ee8ffdba49a5aa345c7ba1bcb0cf8_1280.jpg",
//alt "tags": "cat, animal, nature",
// "likes": 1990,
// "views": 868179,
// "comments": 336,
// "downloads": 543018,
// },

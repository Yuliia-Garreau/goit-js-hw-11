// зберігай функції для HTTP - запитів.

// import inputValue from ".//m"


export const fetchImages = (search) => {

    const searchParams = new URLSearchParams({
        key: "47281419-922d6d2c66ee391f8ff42b6d3", 
        q: search,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
  
 
    const url = `https://pixabay.com/api/?${searchParams}`;
    
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Host: 'http://localhost:5173',
        Origin: 'https://pixabay.com/api',
      },
    };

  return fetch(
    url, options)
    .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}





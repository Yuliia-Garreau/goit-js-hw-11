import{i}from"./assets/vendor-I1I71QQ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const n=s=>{const r=`https://pixabay.com/api/?${new URLSearchParams({key:"47281419-922d6d2c66ee391f8ff42b6d3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r,{method:"GET",headers:{Accept:"application/json",Host:"http://localhost:5173",Origin:"https://pixabay.com/api"}}).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},c=s=>s.map(e=>`
          <li class="item-gallery">
          <a class="link-gallery" href="${e.largeImageURL}">
            <img  
            class="img-gallery"
              src="${e.webformatURL}" 
              alt="${e.tags}"
            />
          </a>
            <ul>
              <li>
                <p class="likes">Likes
                  <span>${e.likes}</span>
                </p>
              </li>
              <li>
                <p class="views">Views
                  <span>${e.views}</span>
                </p>
              </li>
              <li>
                <p class="comments">Comments
                  <span>${e.comments}</span>
                </p>
              </li>
              <li>
                <p class="downloads">Downloads
                  <span>${e.downloads}</span>
                </p>
              </li>
            </ul>
          </li>
        
      `).join(""),u=document.querySelector(".form-search"),p=document.querySelector(".gallery-list");i.settings({timeout:1e3,position:"topRight"});u.addEventListener("submit",f);function f(s){s.preventDefault();const e=s.target.elements.input.value.trim();if(console.log(s),e==="")return i.warning({title:"Caution",message:"The field is empty, please type your request"}),console.log("empty");console.log(e),n(e).then(r=>{if(r.total===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}}).then(r=>c(r)),n(e),console.log(n(e)),i.settings({timeout:1e3,position:"topRight"}),console.log(c(e))}p.insertAdjacentHTML("beforeend",n);console.log(typeof p.insertAdjacentHTML("beforeend",n));
//# sourceMappingURL=index.js.map

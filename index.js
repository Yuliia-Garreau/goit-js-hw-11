import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=o=>{const s=`https://pixabay.com/api/?${new URLSearchParams({key:"47281419-922d6d2c66ee391f8ff42b6d3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s,{method:"GET",headers:{Accept:"application/json",Host:"http://localhost:5173",Origin:"https://pixabay.com/api"}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},c=o=>o.map(t=>`
          <li class="item-gallery">
          <a class="link-gallery" href="${t.largeImageURL}">
            <img  
            class="img-gallery"
              src="${t.webformatURL}" 
              alt="${t.tags}"
            />
          </a>
            <ul>
              <li>
                <p class="likes">Likes
                  <span>${t.likes}</span>
                </p>
              </li>
              <li>
                <p class="views">Views
                  <span>${t.views}</span>
                </p>
              </li>
              <li>
                <p class="comments">Comments
                  <span>${t.comments}</span>
                </p>
              </li>
              <li>
                <p class="downloads">Downloads
                  <span>${t.downloads}</span>
                </p>
              </li>
            </ul>
          </li>
        
      `).join(""),u=document.querySelector(".form-search"),p=document.querySelector(".gallery-list");a.settings({timeout:1e3,position:"topRight"});u.addEventListener("submit",m);function m(o){o.preventDefault();const t=o.target.elements.input.value.trim();if(t===""){a.warning({title:"Caution",message:"The field is empty, please type your request"}),console.log("empty");return}l(t).then(s=>{if(console.log(s),s.total===0)throw new Error(s.status);return s.hits}).then(s=>{p.insertAdjacentHTML("beforeend",c(s))}).catch(()=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=index.js.map

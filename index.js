import{S as f,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p=o=>{const r=`https://pixabay.com/api/?${new URLSearchParams({key:"47281419-922d6d2c66ee391f8ff42b6d3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r,{method:"GET",headers:{Accept:"application/json",Host:"http://localhost:5173",Origin:"https://pixabay.com/api"}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},u=o=>o.map(t=>`
          <li class="item-gallery">
          <a class="link-gallery" href="${t.largeImageURL}">
            <img  
            src="${t.webformatURL}"
            class="img-gallery"
               
              alt="${t.tags}"
              title=""
            />
          
            <ul class="list-info">
              
            <li class="list-item-info">
                <p class="info-title">Likes</p>
                <p class="info-value">${t.likes}</p>
            </li>

              <li class="list-item-info">
                <p class="info-title">Views</p>
                <p class="info-value">${t.views}</p>
              </li>

              <li class="list-item-info">
                <p class="info-title">Comments</p>
                <p class="info-value">${t.comments}</p>
              </li>

              <li class="list-item-info">
                <p class="info-title">Downloads</p>
                <p class="info-value">${t.downloads}</p>
              </li>

            </ul>
            </a>
          </li>
        
      `).join(""),m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",g=new f(".item-gallery a",{captionsData:"alt",captionDelay:300,className:"bg-color"}),d=document.querySelector(".form-search"),n=document.querySelector(".gallery-list"),i=document.querySelector(".loader");c.settings({timeout:1e3,position:"topRight"});i.style.display="none";d.addEventListener("submit",y);function y(o){o.preventDefault();let t=o.target.elements.input.value.trim();if(t===""){i.style.display="none",c.warning({title:"Caution",message:"The field is empty, please type your request"});return}t&&(i.style.display="block"),p(t).then(r=>{if(r.total===0)throw n.innerHTML="",new Error;return i.style.display="none",r.hits}).then(r=>{n.innerHTML="",i.style.display="none",n.innerHTML=u(r),t="",g.refresh()}).catch(()=>{i.style.display="none",c.error({iconUrl:m,titleColor:"#fff",messageColor:"#fff",imageWidth:24,iconColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{o.target.elements.input.value=""})}
//# sourceMappingURL=index.js.map

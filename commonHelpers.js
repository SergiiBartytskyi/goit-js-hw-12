import{a as p,S as b,i as d}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v="/goit-js-hw-12/assets/iconSuccess-286069d5.svg",L="/goit-js-hw-12/assets/iconError-864cff06.svg",S="43934204-71edb5ce863d740adbd705f51",E="https://pixabay.com/api/";async function f(o,t){const s=await p.get(`${E}`,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});if(s.status!==200)throw new Error(s.statusText);return s}function g(o){return o.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,comments:c,downloads:y})=>`
  <div class="photo-card gallery__item">
    <a href="${s}" class="gallery__link">
      <img src="${t}" alt="${i}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${e}
      </p>
      <p class="info-item">
        <b>Views </b>${r}
      </p>
      <p class="info-item">
        <b>Comments </b>${c}
      </p>
      <p class="info-item">
        <b>Downloads </b>${y}
      </p>
    </div>
  </div>
`).join("")}const a={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),target:document.querySelector(".js-guard"),loader:document.querySelector(".loader")};let l="",n="";const h=new b(".gallery a",{captionsData:"alt",captionDelay:250});d.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});const w={root:null,rootMargin:"300px",threshold:1},u=new IntersectionObserver(P,w);a.loader.classList.add("disable");a.formSearch.addEventListener("submit",O);function O(o){o.preventDefault(),l=o.currentTarget.elements.searchQuery.value,l&&(n=1,a.loader.classList.remove("disable"),a.gallery.innerHTML="",f(l,n).then(t=>{if(t.data.totalHits){$(t.data.totalHits),a.gallery.insertAdjacentHTML("beforeend",g(t.data.hits)),u.observe(a.target),h.refresh();const s=Math.ceil(t.data.totalHits/t.data.hits.length);n===s&&(u.unobserve(a.target),m())}else H()}).catch(t=>console.log(t)).finally(()=>{a.formSearch.reset(),a.loader.classList.add("disable")}))}function P(o,t){o.forEach(s=>{s.isIntersecting&&(n+=1,f(l,n).then(i=>{a.gallery.insertAdjacentHTML("beforeend",g(i.data.hits));const e=Math.ceil(i.data.totalHits/i.data.hits.length);n===e&&(t.unobserve(a.target),m()),h.refresh()}).catch(i=>console.log(i)))})}function $(o){d.success({title:"OK",message:`Hooray! We found ${o} images.`,iconUrl:v,theme:"dark",color:"rgb(89, 161, 13)"})}function H(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:L,theme:"dark",color:"rgb(239, 64, 64)"})}function m(){d.info({title:"Oh! No!",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map

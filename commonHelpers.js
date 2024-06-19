import{a as y,S as p,i as d}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const L="/goit-js-hw-12/assets/iconSuccess-286069d5.svg",v="/goit-js-hw-12/assets/iconError-864cff06.svg",S="43934204-71edb5ce863d740adbd705f51",E="https://pixabay.com/api/";async function f(o,t){const a=await y.get(`${E}`,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});if(a.status!==200)throw new Error(a.statusText);return a}function m(o){return o.map(({webformatURL:t,largeImageURL:a,tags:l,likes:s,views:r,comments:n,downloads:b})=>`
  <div class="photo-card gallery__item">
    <a href="${a}" class="gallery__link">
      <img src="${t}" alt="${l}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${s}
      </p>
      <p class="info-item">
        <b>Views </b>${r}
      </p>
      <p class="info-item">
        <b>Comments </b>${n}
      </p>
      <p class="info-item">
        <b>Downloads </b>${b}
      </p>
    </div>
  </div>
`).join("")}const e={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),btnLoad:document.querySelector('button[type="button"]'),loader:document.querySelector(".loader")};let c="",i=1,u=0;const g=new p(".gallery a",{captionsData:"alt",captionDelay:250});d.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});e.loader.classList.add("disable");e.btnLoad.classList.add("disable");e.formSearch.addEventListener("submit",w);e.btnLoad.addEventListener("click",O);function w(o){o.preventDefault(),c=o.currentTarget.elements.searchQuery.value,c&&(i=1,e.btnLoad.classList.add("disable"),e.loader.classList.remove("disable"),e.gallery.innerHTML="",f(c,i).then(t=>{t.data.totalHits?($(t.data.totalHits),e.gallery.insertAdjacentHTML("beforeend",m(t.data.hits)),g.refresh(),u=Math.ceil(t.data.totalHits/t.data.hits.length),e.btnLoad.classList.remove("disable"),i===u&&(e.btnLoad.classList.add("disable"),h())):q()}).catch(t=>console.log(t)).finally(()=>{e.formSearch.reset(),e.loader.classList.add("disable")}))}function O(){e.btnLoad.classList.add("disable"),e.loader.classList.remove("disable"),i+=1,f(c,i).then(o=>{e.gallery.insertAdjacentHTML("beforeend",m(o.data.hits));const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2+190,behavior:"smooth"}),e.btnLoad.classList.remove("disable"),i===u&&(e.btnLoad.classList.add("disable"),h()),g.refresh()}).catch(o=>console.log(o)).finally(()=>{e.loader.classList.add("disable")})}function $(o){d.success({title:"OK",message:`Hooray! We found ${o} images.`,iconUrl:L,theme:"dark",color:"rgb(89, 161, 13)"})}function q(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:v,theme:"dark",color:"rgb(239, 64, 64)"})}function h(){d.info({title:"Oh! No!",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map

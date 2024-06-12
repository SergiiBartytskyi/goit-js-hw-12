import{a as y,S as p,i as d}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const L="/goit-js-hw-12/assets/iconSuccess-286069d5.svg",v="/goit-js-hw-12/assets/iconError-864cff06.svg",S="43934204-71edb5ce863d740adbd705f51",E="https://pixabay.com/api/";async function f(a,s){const o=await y.get(`${E}`,{params:{key:S,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}});if(o.status!==200)throw new Error(o.statusText);return o}function m(a){return a.map(({webformatURL:s,largeImageURL:o,tags:l,likes:t,views:r,comments:n,downloads:h})=>`
  <div class="photo-card gallery__item">
    <a href="${o}" class="gallery__link">
      <img src="${s}" alt="${l}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${t}
      </p>
      <p class="info-item">
        <b>Views </b>${r}
      </p>
      <p class="info-item">
        <b>Comments </b>${n}
      </p>
      <p class="info-item">
        <b>Downloads </b>${h}
      </p>
    </div>
  </div>
`).join("")}const e={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),btnLoad:document.querySelector('button[type="button"]'),loader:document.querySelector(".loader")};let c="",i=1,u=0;const g=new p(".gallery a",{captionsData:"alt",captionDelay:250});d.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});e.loader.classList.add("disable");e.btnLoad.classList.add("disable");e.formSearch.addEventListener("submit",w);e.btnLoad.addEventListener("click",O);function w(a){a.preventDefault(),c=a.currentTarget.elements.searchQuery.value,c&&(i=1,e.btnLoad.classList.add("disable"),e.loader.classList.remove("disable"),e.gallery.innerHTML="",f(c,i).then(s=>{s.data.totalHits?($(s.data.totalHits),e.gallery.insertAdjacentHTML("beforeend",m(s.data.hits)),g.refresh(),u=Math.ceil(s.data.totalHits/s.data.hits.length),e.btnLoad.classList.remove("disable"),i===u&&(e.btnLoad.classList.add("disable"),b())):P()}).catch(s=>console.log(s)).finally(()=>{e.formSearch.reset(),e.loader.classList.add("disable")}))}function O(){e.btnLoad.classList.add("disable"),e.loader.classList.remove("disable"),i+=1,f(c,i).then(a=>{e.gallery.insertAdjacentHTML("beforeend",m(a.data.hits)),e.btnLoad.classList.remove("disable"),i===u&&(e.btnLoad.classList.add("disable"),b()),g.refresh()}).catch(a=>console.log(a)).finally(()=>{e.loader.classList.add("disable")})}function $(a){d.success({title:"OK",message:`Hooray! We found ${a} images.`,iconUrl:L,theme:"dark",color:"rgb(89, 161, 13)"})}function P(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:v,theme:"dark",color:"rgb(239, 64, 64)"})}function b(){d.info({title:"Oh! No!",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map

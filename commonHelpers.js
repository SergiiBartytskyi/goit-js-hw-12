import{a as h,i as l,S as m}from"./assets/vendor-53a1b719.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const r={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),btnLoad:document.querySelector('button[type="button"]'),loader:document.querySelector(".loader")},y="43934204-71edb5ce863d740adbd705f51",p="https://pixabay.com/api/";class b{constructor(){this.searchQuery="",this.currentPage=1,this.totalPages=null}async fetchQuery(){const e=await h.get(`${p}`,{params:{key:y,q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,page:this.currentPage,per_page:15}});if(e.status!==200)throw new Error(e.statusText);return e.data}get query(){return this.searchQuery}set query(e){this.searchQuery=e}incrementPage(){this.currentPage+=1}resetPage(){this.currentPage=1}totalNumberOfPages(e,n){this.totalPages=Math.ceil(e/n)}}function L(s){return s.map(({webformatURL:e,largeImageURL:n,tags:c,likes:t,views:o,comments:i,downloads:g})=>`
  <div class="photo-card gallery__item">
    <a href="${n}" class="gallery__link">
      <img src="${e}" alt="${c}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${t}
      </p>
      <p class="info-item">
        <b>Views </b>${o}
      </p>
      <p class="info-item">
        <b>Comments </b>${i}
      </p>
      <p class="info-item">
        <b>Downloads </b>${g}
      </p>
    </div>
  </div>
`).join("")}function d(s){r.gallery.insertAdjacentHTML("beforeend",L(s))}const P="/goit-js-hw-12/assets/iconSuccess-286069d5.svg",v="/goit-js-hw-12/assets/iconError-864cff06.svg";l.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});function S(s){l.success({title:"OK",message:`Hooray! We found ${s} images.`,iconUrl:P,theme:"dark",color:"rgb(89, 161, 13)"})}function w(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:v,theme:"dark",color:"rgb(239, 64, 64)"})}function E(){l.info({title:"Oh! No!",message:"We're sorry, but you've reached the end of search results."})}const a=new b,u=new m(".gallery a",{captionsData:"alt",captionDelay:250});r.loader.classList.add("disable");r.btnLoad.classList.add("disable");r.formSearch.addEventListener("submit",q);r.btnLoad.addEventListener("click",O);function q(s){s.preventDefault(),r.gallery.innerHTML="",a.query=s.currentTarget.elements.searchQuery.value,a.query&&(a.resetPage(),r.btnLoad.classList.add("disable"),r.loader.classList.remove("disable"),a.fetchQuery().then(({totalHits:e,hits:n})=>{e?(d(n),S(e),a.totalNumberOfPages(e,n.length),f(),u.refresh()):w()}).catch(e=>console.log(e)).finally(()=>{r.formSearch.reset(),r.loader.classList.add("disable")}))}function O(){r.btnLoad.classList.add("disable"),r.loader.classList.remove("disable"),a.incrementPage(),a.fetchQuery().then(({hits:s})=>{d(s);const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2+190,behavior:"smooth"}),f(),u.refresh()}).catch(s=>console.log(s)).finally(()=>{r.loader.classList.add("disable")})}function f(){a.currentPage===a.totalPages?(r.btnLoad.classList.add("disable"),E()):r.btnLoad.classList.remove("disable")}
//# sourceMappingURL=commonHelpers.js.map

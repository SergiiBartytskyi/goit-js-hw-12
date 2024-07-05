import{a as m,i as l,S as y}from"./assets/vendor-53a1b719.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const n={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),btnLoad:document.querySelector('button[type="button"]'),loader:document.querySelector(".loader"),target:document.querySelector(".js-guard")},p="43934204-71edb5ce863d740adbd705f51",b="https://pixabay.com/api/";class P{constructor(){this.searchQuery="",this.currentPage=1,this.totalPages=null}async fetchQuery(){const e=await m.get(`${b}`,{params:{key:p,q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,page:this.currentPage,per_page:15}});if(e.status!==200)throw new Error(e.statusText);return e.data}get query(){return this.searchQuery}set query(e){this.searchQuery=e}incrementPage(){this.currentPage+=1}resetPage(){this.currentPage=1}totalNumberOfPages(e,o){this.totalPages=Math.ceil(e/o)}}function v(r){return r.map(({webformatURL:e,largeImageURL:o,tags:c,likes:t,views:s,comments:i,downloads:h})=>`
  <div class="photo-card gallery__item">
    <a href="${o}" class="gallery__link">
      <img src="${e}" alt="${c}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${t}
      </p>
      <p class="info-item">
        <b>Views </b>${s}
      </p>
      <p class="info-item">
        <b>Comments </b>${i}
      </p>
      <p class="info-item">
        <b>Downloads </b>${h}
      </p>
    </div>
  </div>
`).join("")}function d(r){n.gallery.insertAdjacentHTML("beforeend",v(r))}const L="/goit-js-hw-12/assets/iconSuccess-286069d5.svg",S="/goit-js-hw-12/assets/iconError-864cff06.svg";l.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});function w(r){l.success({title:"OK",message:`Hooray! We found ${r} images.`,iconUrl:L,theme:"dark",color:"rgb(89, 161, 13)"})}function E(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:S,theme:"dark",color:"rgb(239, 64, 64)"})}function O(){l.info({title:"Oh! No!",message:"We're sorry, but you've reached the end of search results."})}const a=new P,f=new y(".gallery a",{captionsData:"alt",captionDelay:250}),q={root:null,rootMargin:"300px",threshold:1},u=new IntersectionObserver($,q);n.loader.classList.add("disable");n.formSearch.addEventListener("submit",I);function I(r){r.preventDefault(),n.gallery.innerHTML="",a.query=r.currentTarget.elements.searchQuery.value,a.query&&(a.resetPage(),u.unobserve(n.target),n.loader.classList.remove("disable"),a.fetchQuery().then(({totalHits:e,hits:o})=>{e?(d(o),w(e),u.observe(n.target),a.totalNumberOfPages(e,o.length),g(u),f.refresh()):E()}).catch(e=>console.log(e)).finally(()=>{n.formSearch.reset(),n.loader.classList.add("disable")}))}function $(r,e){r.forEach(o=>{o.isIntersecting&&(a.incrementPage(),a.fetchQuery().then(({hits:c})=>{d(c),g(e),f.refresh()}).catch(c=>console.log(c)))})}function g(r){a.currentPage===a.totalPages&&(r.unobserve(n.target),O())}
//# sourceMappingURL=commonHelpers.js.map

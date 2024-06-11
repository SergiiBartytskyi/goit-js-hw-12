import{a as b,S as v,i as d}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const L="/goit-js-hw-12/assets/iconSuccess-286069d5.svg",S="/goit-js-hw-12/assets/iconError-864cff06.svg",E="43934204-71edb5ce863d740adbd705f51",w="https://pixabay.com/api/";async function g(s,e){const a=await b.get(`${w}`,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});if(a.status!==200)throw new Error(a.statusText);return a}function m(s){return s.map(({webformatURL:e,largeImageURL:a,tags:n,likes:t,views:r,comments:c,downloads:p})=>`
  <div class="photo-card gallery__item">
    <a href="${a}" class="gallery__link">
      <img src="${e}" alt="${n}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${t}
      </p>
      <p class="info-item">
        <b>Views </b>${r}
      </p>
      <p class="info-item">
        <b>Comments </b>${c}
      </p>
      <p class="info-item">
        <b>Downloads </b>${p}
      </p>
    </div>
  </div>
`).join("")}const o={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),target:document.querySelector(".js-guard"),loader:document.querySelector(".loader")};let l="",i=0,f=0;const h=new v(".gallery a",{captionsData:"alt",captionDelay:250});d.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});const O={root:null,rootMargin:"300px",threshold:1},u=new IntersectionObserver(P,O);o.loader.classList.add("disable");o.formSearch.addEventListener("submit",$);function $(s){s.preventDefault(),l=s.currentTarget.elements.searchQuery.value,l&&(u.unobserve(o.target),i=1,o.loader.classList.remove("disable"),o.gallery.innerHTML="",g(l,i).then(e=>{e.data.totalHits?(_(e.data.totalHits),o.gallery.insertAdjacentHTML("beforeend",m(e.data.hits)),u.observe(o.target),h.refresh(),f=Math.ceil(e.data.totalHits/e.data.hits.length),i===f&&(u.unobserve(o.target),y())):q()}).catch(e=>console.log(e)).finally(()=>{o.formSearch.reset(),o.loader.classList.add("disable")}))}function P(s,e){s.forEach(a=>{a.isIntersecting&&(i+=1,g(l,i).then(n=>{o.gallery.insertAdjacentHTML("beforeend",m(n.data.hits)),i===f&&(e.unobserve(o.target),y()),h.refresh()}).catch(n=>console.log(n)))})}function _(s){d.success({title:"OK",message:`Hooray! We found ${s} images.`,iconUrl:L,theme:"dark",color:"rgb(89, 161, 13)"})}function q(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:S,theme:"dark",color:"rgb(239, 64, 64)"})}function y(){d.info({title:"Oh! No!",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map

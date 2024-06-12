import{a}from"./vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="/goit-js-hw-12/assets/iconSuccess-286069d5.svg",d="/goit-js-hw-12/assets/iconError-864cff06.svg",l="43934204-71edb5ce863d740adbd705f51",f="https://pixabay.com/api/";async function m(i,s){const r=await a.get(`${f}`,{params:{key:l,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}});if(r.status!==200)throw new Error(r.statusText);return r}function g(i){return i.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:o,downloads:c})=>`
  <div class="photo-card gallery__item">
    <a href="${r}" class="gallery__link">
      <img src="${s}" alt="${n}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${e}
      </p>
      <p class="info-item">
        <b>Views </b>${t}
      </p>
      <p class="info-item">
        <b>Comments </b>${o}
      </p>
      <p class="info-item">
        <b>Downloads </b>${c}
      </p>
    </div>
  </div>
`).join("")}export{d as a,m as f,u as i,g as r};
//# sourceMappingURL=styles-23889e00.js.map

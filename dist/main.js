(()=>{"use strict";var e,t;((e,t)=>{const s=document.querySelectorAll("[data-tabs-handler]"),a=document.querySelectorAll("[data-tabs-field]");for(let e of s)e.addEventListener("click",(()=>{s.forEach((e=>e.classList.remove("design-list__item_active"))),e.classList.add("design-list__item_active"),a.forEach((t=>{t.dataset.tabsField===e.dataset.tabsHandler?t.classList.remove("hidden"):t.classList.add("hidden")}))}))})(),e=".menu-list__link",t=".main__scroll",[...document.querySelectorAll(e),document.querySelector(t)].forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),(e=>{const t=document.querySelector(e);t.addEventListener("submit",(e=>{e.preventDefault();const s={};for(let{name:e,value:a}of t.elements)e&&(s[e]=a);fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s)}).then((e=>{if(200===e.status||201===e.status)return e.json();throw new Error(e.status)})).then((e=>{alert("Данные отправлены!"),t.reset()})).catch((e=>{alert("Вам капец! Ошибка "+e.message)}))}))})(".form-test-drive"),((e,t)=>{const s=document.querySelector(e),a=document.querySelector(t);s.addEventListener("click",(()=>{a.classList.remove("hidden")})),a.addEventListener("click",(e=>{const t=e.target;(t.classList.contains("overlay")||t.classList.contains("modal__close"))&&a.classList.add("hidden")}))})(".more",".modal"),((e,t)=>{const s=document.querySelector(e),a=document.querySelector(t);s.addEventListener("click",(()=>{s.classList.toggle("humburger-menu-active"),a.classList.toggle("menu-active"),a.addEventListener("click",(e=>{e.target.classList.contains("menu-list__link")&&(s.classList.remove("humburger-menu-active"),a.classList.remove("menu-active"))}))}))})(".humburger-menu",".menu"),((e,t)=>{const s=document.querySelectorAll(e),a=document.querySelectorAll(t);s.forEach(((e,t)=>{e.addEventListener("click",(()=>{e.classList.contains("feature__link_active")?(e.classList.remove("feature__link_active"),a[t].classList.add("hidden")):(s.forEach((e=>{e.classList.remove("feature__link_active")})),e.classList.add("feature__link_active"),a.forEach((e=>{e.classList.add("hidden")})),a[t].classList.remove("hidden"))}))}))})(".feature__link",".feature-sub")})();
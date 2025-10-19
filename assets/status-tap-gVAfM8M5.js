import{w as e,x as t,y as o,z as n,A as r}from"./ionic-GdGfvgQO.js";import"./vendor-Ca3YkmNv.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=()=>{const s=window;s.addEventListener("statusTap",()=>{e(()=>{const e=s.innerWidth,i=s.innerHeight,a=document.elementFromPoint(e/2,i/2);if(!a)return;const d=t(a);d&&new Promise(e=>o(d,e)).then(()=>{n(async()=>{d.style.setProperty("--overflow","hidden"),await r(d,300),d.style.removeProperty("--overflow")})})})})};export{s as startStatusTap};

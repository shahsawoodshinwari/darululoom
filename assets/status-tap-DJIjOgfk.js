import{v as e,w as t,x as o,y as n,z as r}from"./ionic-CKVbHhzx.js";import"./vendor-CNzDPF33.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=()=>{const s=window;s.addEventListener("statusTap",()=>{e(()=>{const e=s.innerWidth,i=s.innerHeight,a=document.elementFromPoint(e/2,i/2);if(!a)return;const d=t(a);d&&new Promise(e=>o(d,e)).then(()=>{n(async()=>{d.style.setProperty("--overflow","hidden"),await r(d,300),d.style.removeProperty("--overflow")})})})})};export{s as startStatusTap};

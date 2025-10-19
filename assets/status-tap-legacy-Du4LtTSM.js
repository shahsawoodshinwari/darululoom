System.register(["./ionic-legacy-CQcQ_2NC.js","./vendor-legacy-D57PI9vz.js"],function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.w,r=e.x,s=e.y,o=e.z,i=e.A},null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",()=>{const e=window;e.addEventListener("statusTap",()=>{n(()=>{const t=e.innerWidth,n=e.innerHeight,a=document.elementFromPoint(t/2,n/2);if(!a)return;const c=r(a);c&&new Promise(e=>s(c,e)).then(()=>{o(async()=>{c.style.setProperty("--overflow","hidden"),await i(c,300),c.style.removeProperty("--overflow")})})})})})}}});

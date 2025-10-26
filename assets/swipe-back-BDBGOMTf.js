import{q as t,r as e,s as n}from"./ionic-CKVbHhzx.js";import"./vendor-CNzDPF33.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=(o,r,s,i,a)=>{const c=o.ownerDocument.defaultView;let d=t(o);const l=t=>d?-t.deltaX:t.deltaX;return e({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:e=>(d=t(o),(t=>{const{startX:e}=t;return d?e>=c.innerWidth-50:e<=50})(e)&&r()),onStart:s,onMove:t=>{const e=l(t)/c.innerWidth;i(e)},onEnd:t=>{const e=l(t),o=c.innerWidth,r=e/o,s=(t=>d?-t.velocityX:t.velocityX)(t),i=s>=0&&(s>.2||e>o/2),h=(i?1-r:r)*o;let m=0;if(h>5){const t=h/Math.abs(s);m=Math.min(t,540)}a(i,r<=0?.01:n(0,r,.9999),m)}})};export{o as createSwipeBackGesture};

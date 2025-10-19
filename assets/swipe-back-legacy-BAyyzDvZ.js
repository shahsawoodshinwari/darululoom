System.register(["./ionic-legacy-CQcQ_2NC.js","./vendor-legacy-D57PI9vz.js"],function(t,e){"use strict";var n,r,s;return{setters:[t=>{n=t.r,r=t.s,s=t.t},null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
t("createSwipeBackGesture",(t,e,i,o,c)=>{const a=t.ownerDocument.defaultView;let l=n(t);const u=t=>l?-t.deltaX:t.deltaX;return r({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(l=n(t),(t=>{const{startX:e}=t;return l?e>=a.innerWidth-50:e<=50})(r)&&e()),onStart:i,onMove:t=>{const e=u(t)/a.innerWidth;o(e)},onEnd:t=>{const e=u(t),n=a.innerWidth,r=e/n,i=(t=>l?-t.velocityX:t.velocityX)(t),o=i>=0&&(i>.2||e>n/2),d=(o?1-r:r)*n;let h=0;if(d>5){const t=d/Math.abs(i);h=Math.min(t,540)}c(o,r<=0?.01:s(0,r,.9999),h)}})})}}});

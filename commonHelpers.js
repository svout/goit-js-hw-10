var T=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var m=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};var l=(e,t,n)=>(T(e,t,"access private method"),n);import"./assets/modulepreload-polyfill-3cfb730f.js";const u=document.querySelector('button[type="button"]'),v=document.querySelector("[data-days]"),D=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),w=document.querySelector("[data-seconds]"),f=document.getElementById("datetime-picker");u.disabled=!0;let h=new Date;const I={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(iziToast.error({message:"Please choose a date in the future",position:"topRight"}),r(!1)):(r(!0),h=new Date(e[0]))}};flatpickr(f,I);var c,y;class g{constructor(t){m(this,c);this.updateTimer=t,this.isActive=!1}start(){this.isActive||(this.isActive=!0,p(!1),r(!1),this.intervalId=setInterval(()=>{this.updateTime()},1e3))}stop(){clearInterval(this.intervalId),this.isActive=!1,p(!0),r(!0)}updateTime(){const t=h.getTime(),n=Date.now();if(t<=n){this.stop();return}const s=t-n,i=l(this,c,y).call(this,s);this.updateTimer(i)}}c=new WeakSet,y=function(t){const n=t%1e3;t=(t-n)/1e3;const s=t%60;t=(t-s)/60;const i=t%60;t=(t-i)/60;const a=t%24;return{days:(t-a)/24,hrs:a,mins:i,secs:s}};const q=new g(C);u.addEventListener("click",()=>{q.start()});function C({days:e,hrs:t,mins:n,secs:s}){const i=o(e),a=o(t),d=o(n),S=o(s);v.textContent=i,D.textContent=a,b.textContent=d,w.textContent=S}function o(e){return e.toString().padStart(2,"0")}function r(e){u.disabled=!e}function p(e){f.disabled=!e}
//# sourceMappingURL=commonHelpers.js.map
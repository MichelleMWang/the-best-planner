(()=>{"use strict";(()=>{const e=document.getElementById("add-quest-button"),t=document.getElementById("nav-items");let n=[{name:"Schoolwork",commissions:[{name:"Finish Physics Wks"}]}],s=n.find((e=>e.name="Schoolwork"));console.log(s),e.addEventListener("click",(()=>{const e=document.createElement("input");e.type="text",e.classList.add("input-textbox"),t.appendChild(e);const o=document.createElement("button");o.textContent="Add",o.addEventListener("click",(()=>{const c=e.value;e.remove(),o.remove(),function(e){const n=document.createElement("li");n.classList.add("quest-item");const s=document.createElement("a");s.classList.add("quest-item-a"),s.textContent=e,n.appendChild(s),t.appendChild(n)}(c);const m=function(e){const t={name:e,commissions:[]};return n.push(t),t}(c);var d;d=m,document.querySelectorAll(".commissions-item").forEach((e=>e.remove())),0!==d.commissions.length&&function(e){e.commissions.forEach((e=>{i(e)}))}(d),s=m})),t.appendChild(o)}));const o=document.getElementById("commissions-ul"),c=document.getElementById("add-commissions-button");function i(e){const t=document.createElement("li");t.classList.add("commissions-item");const n=document.createElement("div");n.classList.add("commissions-item-left");const s=document.createElement("img");var i;s.classList.add("commission-img"),s.src="./assets/Icon-Commission.png",(i=s).addEventListener("click",(e=>{const t=i.nextElementSibling;console.log(t),t.textContent,e.target.closest(".commissions-item").remove()}));const m=document.createElement("h3");m.classList.add("commissions-title"),m.textContent=e.name,n.appendChild(s),n.appendChild(m),t.appendChild(n),o.insertBefore(t,c)}c.addEventListener("click",(()=>{const e=document.createElement("input");e.type="text",e.classList.add("input-textbox"),o.appendChild(e);const t=document.createElement("button");t.textContent="Add",t.addEventListener("click",(()=>{const n=e.value;e.remove(),t.remove(),i(function(e,t){let n=t.commissions;console.log(n);const s={name:e};return console.log(s),n.push(s),s}(n,s))})),o.appendChild(t)}))})()})();
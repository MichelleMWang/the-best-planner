(()=>{"use strict";(()=>{const e=document.getElementById("add-quest-button"),t=document.getElementById("nav-items");let n=[{name:"Schoolwork",commissions:[{name:"Finish Physics Wks"}]}],s=n.find((e=>e.name="Schoolwork"));e.addEventListener("click",(()=>{const e=document.createElement("input");e.type="text",e.classList.add("input-textbox"),t.appendChild(e);const o=document.createElement("button");o.textContent="Add",o.addEventListener("click",(()=>{const c=e.value;e.remove(),o.remove();const m=function(e){const t={name:e,commissions:[]};return n.push(t),t}(c);!function(e,n){const o=document.createElement("li");o.classList.add("quest-item");const c=document.createElement("a");c.classList.add("quest-item-a"),c.textContent=e,c.addEventListener("click",(()=>{!function(e){document.querySelectorAll(".commissions-item").forEach((e=>e.remove())),0!==e.commissions.length&&function(e){e.commissions.forEach((e=>{i(e)}))}(e)}(n),s=n})),o.appendChild(c),t.appendChild(o)}(c,m)})),t.appendChild(o)}));const o=document.getElementById("commissions-ul"),c=document.getElementById("add-commissions-button");function i(e){const t=document.createElement("li");t.classList.add("commissions-item");const n=document.createElement("div");n.classList.add("commissions-item-left");const i=document.createElement("img");var m;i.classList.add("commission-img"),i.src="./assets/Icon-Commission.png",(m=i).addEventListener("click",(e=>{const t=m.nextElementSibling.textContent,n=s.commissions,o=n.findIndex((e=>e.name===t));n.splice(o,1),console.log("index: "+o),e.target.closest(".commissions-item").remove()}));const d=document.createElement("h3");d.classList.add("commissions-title"),d.textContent=e.name,n.appendChild(i),n.appendChild(d),t.appendChild(n),o.insertBefore(t,c)}c.addEventListener("click",(()=>{const e=document.createElement("input");e.type="text",e.classList.add("input-textbox"),o.appendChild(e);const t=document.createElement("button");t.textContent="Add",t.addEventListener("click",(()=>{const n=e.value;e.remove(),t.remove(),i(function(e,t){let n=t.commissions;console.log(n);const s={name:e};return console.log(s),n.push(s),s}(n,s))})),o.appendChild(t)}))})()})();
const recipes = [
 {id:1,name:"Makaron ze szpinakiem",emoji:"🍝",color:"#e8d9bb",time:20,cost:9,diet:"vege",tag:"Szybki obiad",desc:"Kremowy makaron z czosnkiem, szpinakiem i odrobiną sera.",ingredients:["makaron","szpinak","czosnek","śmietanka","ser"],amounts:["200 g","150 g","2 ząbki","100 ml","30 g"]},
 {id:2,name:"Kurczak z ryżem",emoji:"🍗",color:"#e9d5b7",time:30,cost:13,diet:"meat",tag:"Klasyk",desc:"Prosty, sycący obiad z kurczakiem i warzywami.",ingredients:["pierś z kurczaka","ryż","papryka","cebula"],amounts:["300 g","150 g","1 szt.","1 szt."]},
 {id:3,name:"Placki ziemniaczane",emoji:"🥔",color:"#e3dfb9",time:30,cost:7,diet:"vege",tag:"Budżetowy hit",desc:"Chrupiące placki z kilku podstawowych składników.",ingredients:["ziemniaki","jajka","cebula","mąka"],amounts:["500 g","1 szt.","1 szt.","2 łyżki"]},
 {id:4,name:"Szakszuka",emoji:"🍳",color:"#efd0b9",time:15,cost:8,diet:"vege",tag:"Gotowe w 15 min",desc:"Jajka duszone w pomidorach z przyprawami i pieczywem.",ingredients:["jajka","pomidory","cebula","pieczywo"],amounts:["2 szt.","250 g","1/2 szt.","2 kromki"]},
 {id:5,name:"Tortilla z kurczakiem",emoji:"🌯",color:"#e7d7aa",time:20,cost:14,diet:"meat",tag:"Na szybko",desc:"Tortilla z soczystym kurczakiem, chrupiącymi warzywami i sosem.",ingredients:["tortille","kurczak","sałata","pomidor","jogurt"],amounts:["2 szt.","200 g","garść","1 szt.","2 łyżki"]},
 {id:6,name:"Zupa z czerwonej soczewicy",emoji:"🥣",color:"#e8c8a8",time:35,cost:6,diet:"vege",tag:"Tanie i sycące",desc:"Rozgrzewająca zupa z soczewicy, pomidorów i aromatycznych przypraw.",ingredients:["czerwona soczewica","pomidory","marchew","cebula"],amounts:["150 g","200 g","1 szt.","1 szt."]},
 {id:7,name:"Pieczone udka z warzywami",emoji:"🍗",color:"#dfc9a9",time:45,cost:15,diet:"meat",tag:"Z piekarnika",desc:"Udka i warzywa pieką się razem — mało pracy, dużo smaku.",ingredients:["udka z kurczaka","ziemniaki","marchew","czosnek"],amounts:["2 szt.","400 g","2 szt.","2 ząbki"]},
 {id:8,name:"Kasza z pieczarkami",emoji:"🍄",color:"#d9dfc6",time:25,cost:8,diet:"vege",tag:"Bez mięsa",desc:"Kasza gryczana z podsmażonymi pieczarkami i cebulką.",ingredients:["kasza gryczana","pieczarki","cebula","natka pietruszki"],amounts:["150 g","200 g","1 szt.","1/2 pęczka"]},
 {id:9,name:"Smażony ryż z jajkiem",emoji:"🍚",color:"#e7d8b5",time:15,cost:7,diet:"vege",tag:"Zero marnowania",desc:"Dobry sposób na wykorzystanie ugotowanego wcześniej ryżu.",ingredients:["ugotowany ryż","jajka","marchew","groszek"],amounts:["300 g","2 szt.","1 szt.","garść"]}
];
const $ = id => document.getElementById(id);
let plan = [];
const money = n => `${n.toFixed(0)} zł`;
function renderRecipes(list=recipes){
 const root=$("recipes"); root.innerHTML="";
 $("results-label").textContent = list.length ? `Znaleźliśmy ${list.length} ${list.length===1?"pomysł":list.length<5?"pomysły":"pomysłów"} na obiad` : "Brak dań dla wybranych filtrów";
 list.forEach((r,i)=>{
  const card=document.createElement("article");card.className="recipe-card";
  card.innerHTML=`<div class="recipe-art" style="background:${r.color}"><span>${r.emoji}</span><span class="tag">${r.tag}</span></div><div class="recipe-content"><h3>${r.name}</h3><p>${r.desc}</p><div class="recipe-meta"><span>◷ <strong>${r.time} min</strong></span><span>♧ <strong>${r.diet==="vege"?"Wege":"Z mięsem"}</strong></span></div><p class="ingredients">Główne składniki: ${r.ingredients.slice(0,3).join(", ")}</p><div class="recipe-actions"><span class="price">ok. ${money(r.cost)} <small>/ porcja</small></span><button class="add-button" data-add="${r.id}">+ Dodaj do planu</button></div></div>`;
  root.appendChild(card);
 });
 root.querySelectorAll("[data-add]").forEach(b=>b.addEventListener("click",()=>addToPlan(Number(b.dataset.add))));
}
function applyFilters(){
 const budget=Number($("budget").value),time=Number($("time").value),diet=$("diet").value;
 renderRecipes(recipes.filter(r=>r.cost<=budget&&r.time<=time&&(diet==="all"||r.diet===diet)));
}
function addToPlan(id){plan.push(recipes.find(r=>r.id===id));renderPlan();$("plan").scrollIntoView({behavior:"smooth",block:"start"});}
function renderPlan(){
 $("plan-count").textContent=plan.length;
 $("plan-empty").style.display=plan.length?"none":"flex";
 $("plan-items").innerHTML="";
 plan.forEach((r,i)=>{
  const item=document.createElement("div");item.className="plan-item";
  item.innerHTML=`<div><strong>${r.emoji} ${r.name}</strong><small>${r.time} min · ok. ${money(r.cost)}/porcja</small></div><button class="remove-item" aria-label="Usuń ${r.name} z planu" data-remove="${i}">×</button>`;
  $("plan-items").appendChild(item);
 });
 $("plan-items").querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{plan.splice(Number(b.dataset.remove),1);renderPlan()}));
 const ingredients=new Map();
 plan.forEach(r=>r.ingredients.forEach((name,i)=>{const key=name.toLowerCase();if(!ingredients.has(key))ingredients.set(key,{name,amounts:[]});ingredients.get(key).amounts.push(r.amounts[i]);}));
 const list=$("shopping-list");list.innerHTML="";
 if(!ingredients.size){list.innerHTML='<p class="muted">Dodaj dania do planu, aby zobaczyć składniki.</p>';$("copy-list").disabled=true;return;}
 ingredients.forEach(item=>{
  const label=document.createElement("label");label.innerHTML=`<input type="checkbox"><span>${item.name} <small>(${item.amounts.join(" + ")})</small></span>`;list.appendChild(label);
 });
 $("copy-list").disabled=false;
}
$("find-btn").addEventListener("click",applyFilters);
$("budget").addEventListener("change",applyFilters);$("time").addEventListener("change",applyFilters);$("diet").addEventListener("change",applyFilters);
$("random-btn").addEventListener("click",()=>{const filtered=recipes.filter(r=>r.cost<=Number($("budget").value)&&r.time<=Number($("time").value)&&($("diet").value==="all"||r.diet===$("diet").value));if(filtered.length){const r=filtered[Math.floor(Math.random()*filtered.length)];renderRecipes([r]);$("results-label").textContent="Twoja losowa propozycja";}else{applyFilters();}});
$("clear-plan").addEventListener("click",()=>{plan=[];renderPlan();$("copy-status").textContent="";});
$("copy-list").addEventListener("click",async()=>{
 const text=[...$("shopping-list").querySelectorAll("label")].map(l=>`${l.querySelector("input").checked?"[x]":"[ ]"} ${l.querySelector("span").innerText}`).join("\n");
 try{await navigator.clipboard.writeText(text);$("copy-status").textContent="Lista została skopiowana.";}
 catch(e){const ta=document.createElement("textarea");ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();$("copy-status").textContent="Lista została skopiowana.";}
});
renderRecipes();renderPlan();

// Single source of truth: both pricing cards and comparison table read from PLANS.
const PLANS = [
  {id:"personal",name:"Personal Hosting",tag:"ECONOMICAL",audience:"For students, hobbyists & individuals",monthly:699,annual:6990,websites:"1 website",storage:"5 GB SSD",bandwidth:"Unmetered (fair use)",email:"5 email accounts",domain:"Free .com with 3-year term",ssl:"Free SSL certificate",backup:"Daily · 1-day retention",migration:"Free migration",support:"Email + database support",dashboard:"PK Hosting Dashboard",dns:"Not included",priority:"Not included",popular:false},
  {id:"business",name:"Business Hosting",tag:"MOST POPULAR",audience:"For growing businesses & teams",monthly:1999,annual:19990,websites:"5 websites",storage:"25 GB SSD",bandwidth:"Unmetered (fair use)",email:"25 email accounts",domain:"Free .com with 3-year term",ssl:"Free SSL certificate",backup:"Daily · 3-day retention",migration:"Free migration",support:"Business email support",dashboard:"PK Hosting Dashboard",dns:"Managed DNS help",priority:"Priority setup",popular:true},
  {id:"professional",name:"Professional Hosting",tag:"BEST VALUE",audience:"For software houses & corporates",monthly:3999,annual:39990,websites:"10 websites",storage:"50 GB SSD",bandwidth:"Unmetered (fair use)",email:"50 email accounts",domain:"Free .com with 3-year term",ssl:"Free SSL certificate",backup:"Daily · 5-day retention",migration:"Free migration",support:"Priority support",dashboard:"PK Hosting Dashboard",dns:"Managed DNS help",priority:"Priority support",popular:false}
];
let term = "monthly";
let discount = 0;
const money = n => new Intl.NumberFormat("en-PK",{maximumFractionDigits:0}).format(Math.round(n));
function currentPrice(plan){return term==="monthly"?plan.monthly:plan.annual;}
function renderCards(){
  document.getElementById("cards").innerHTML = PLANS.map(p=>{
    const base=currentPrice(p),shown=base*(1-discount/100);
    const unit=term==="monthly"?"/mo":"/yr";
    const caption=term==="monthly"?"Billed monthly":`Billed annually · Rs ${money(p.annual)} per year`;
    return `<article class="plan ${p.popular?"popular":""}">
      ${p.popular?'<div class="popular-label">MOST POPULAR</div>':""}
      <div class="plan-kicker">${p.tag}</div><h3>${p.name}</h3><div class="plan-desc">${p.audience}</div>
      <div class="pricebox"><div class="price-line"><span class="currency">Rs</span><span class="amount">${money(shown)}</span><span class="period">${unit}</span></div>
      <div class="billing-caption">${caption}${discount?` · ${discount}% demo discount applied`:""}</div></div>
      <a class="plan-cta" href="https://www.pkhosting.com/hosting/">View plan & order <b>↗</b></a>
      <h4>Plan includes</h4><ul class="features">
      <li>${p.migration}</li><li>${p.websites}</li><li>${p.storage} storage</li><li>${p.bandwidth} bandwidth</li><li>${p.email}</li><li>${p.domain}</li><li>${p.ssl}</li><li>${p.backup} backups</li><li>${p.dashboard}</li></ul>
    </article>`;
  }).join("");
  renderTable();
}
function renderTable(){
  const fields=[["Websites","websites"],["SSD storage","storage"],["Bandwidth","bandwidth"],["Email accounts","email"],["Free .com offer","domain"],["SSL certificate","ssl"],["Daily backups","backup"],["Free migration","migration"],["Dashboard","dashboard"],["Managed DNS","dns"],["Setup / support","priority"]];
  document.getElementById("tableHead").innerHTML=`<tr><th>Plan features</th>${PLANS.map(p=>`<th>${p.name}</th>`).join("")}</tr>`;
  document.getElementById("tableBody").innerHTML=fields.map(([label,key])=>`<tr><td>${label}</td>${PLANS.map(p=>`<td>${p[key]}</td>`).join("")}</tr>`).join("");
}
document.querySelectorAll(".term").forEach(btn=>btn.addEventListener("click",()=>{
  term=btn.dataset.term;
  document.querySelectorAll(".term").forEach(b=>{const active=b===btn;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
  renderCards();
}));
document.getElementById("promoForm").addEventListener("submit",e=>{
  e.preventDefault();const code=document.getElementById("promo").value.trim().toUpperCase(),msg=document.getElementById("promoMessage");
  if(code==="WELCOME10"){discount=10;msg.className="promo-message ok";msg.textContent="WELCOME10 applied — 10% demo discount is reflected in the displayed prices.";}
  else{discount=0;msg.className="promo-message bad";msg.textContent=code?"Code not recognised. This demo accepts WELCOME10 only.":"Enter a promo code first.";}
  renderCards();
});
document.getElementById("menu").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
renderCards();

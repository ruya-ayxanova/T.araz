const AZ_L=["Ağlar güler","Gülən ay","Qızaran ay","Qora bişirən","Quyruq doğan","Zumar ayı","Xəzəl ayı","Qırov ayı","Azər","Çillə","Donduran ay","Bayram ayı"];
const AR=["آغلار گولر","گولن آی","قیزاران آی","قورا بیشیرن","قویروق دوغان","زومار آیی","خزل آیی","قیروو آیی","آذر","چیلله","دوندوران آی","بایرام آیی"];
const WDA=["یئل‌لی گون","سود گونو","دوز گونو","آرا گون","اود گونو","سو گونو","آینی گونو"];
const FA_L=["Fərvərdin","Ordibeheşt","Xordad","Tir","Mordad","Şəhrivər","Mehr","Aban","Azər","Dey","Bahman","İsfənd"];
const SEASON_L=["Yaz","Yaz","Yaz","Yay","Yay","Yay","Payız","Payız","Payız","Qış","Qış","Qış"];
const WD_L=["Yelli gün","Süd günü","Düz günü","Ara gün","Od günü","Su günü","Ayni günü"];
const WS_L=["Yel","Süd","Düz","Ara","Od","Su","Ayni"];
const GM_L=["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
const GS_L=["Yan","Fev","Mar","Apr","May","İyn","İyl","Avq","Sen","Okt","Noy","Dek"];
const HM_L=["Məhərrəm","Səfər","Rəbiüləvvəl","Rəbiülaxır","Cümadəlülla","Cümadəlaxır","Rəcəb","Şaban","Ramazan","Şəvval","Zilqədə","Zilhiccə"];

/* Qeydlər: açar "j:ay/gün" (şəmsi), "g:ay/gün" (miladi) və ya "h:ay/gün" (qəməri).
   E(açar, ad, qırmızı(1/0), növ): m=milli, d=dini, r=rəsmi, f=fəsil. Özünüz əlavə edə bilərsiniz. */
const EV={},ON={m:1,d:1,r:1,f:1};
const E=(k,l,a,red,c)=>{(EV[k]=EV[k]||[]).push([l,red,c,a])};
E("j:1/1","Növruz bayramı — yeni il","نوروز بایرامی — یئنی ایل",1,"m");
E("j:1/2","Növruz bayramı","نوروز بایرامی",1,"m");E("j:1/3","Növruz bayramı","نوروز بایرامی",1,"m");E("j:1/4","Növruz bayramı","نوروز بایرامی",1,"m");
E("j:1/12","İslam Respublikası günü","اسلام جمهوریتی گونو",1,"r");
E("j:1/13","Sizdə-bə-dər — təbiət günü","سیزده‌بدر — طبیعت گونو",1,"m");
E("j:3/14","İmam Xomeyninin vəfatı ildönümü","امام خمینینین وفاتی ایلدؤنومو",1,"r");
E("j:3/15","15 Xordad üsyanı ildönümü","۱۵ خرداد قیامی ایلدؤنومو",1,"r");
E("j:4/1","Yayın başlanğıcı","یایین باشلانغیجی",0,"f");
E("j:5/14","Məşrutə (Konstitusiya) inqilabı günü","مشروطه اینقلابی گونو",0,"m");
E("j:6/12","Azərbaycan Demokrat Fırqəsinin qurulması (1324)","آذربایجان دموکرات فیرقه‌سینین قورولماسی (۱۳۲۴)",0,"m");
E("j:6/27","Şəhriyarın vəfatı və Şeir günü","شهریارین وفاتی و شعر گونو",0,"m");
E("j:7/1","Payızın başlanğıcı","پاییزین باشلانغیجی",0,"f");
E("j:9/21","21 Azər — Azərbaycan Milli Hökumətinin ildönümü","۲۱ آذر — آذربایجان میلی حؤکومتینین ایلدؤنومو",0,"m");
E("j:9/30","Çillə (Yelda) gecəsi","چیلله (یئلدا) گئجه‌سی",0,"m");
E("j:10/1","Qışın və Böyük Çillənin başlanğıcı (40 gün)","قیشین و بؤیوک چیللهنین باشلانغیجی (۴۰ گون)",0,"f");
E("j:11/10","Böyük Çillənin sonu, Kiçik Çillənin başlanğıcı","بؤیوک چیللهنین سونو، کیچیک چیللهنین باشلانغیجی",0,"f");
E("j:11/22","İnqilabın qələbə günü","اینقلابین قلبه گونو",1,"r");
E("j:11/29","Təbriz qiyamı ildönümü (1356)","تبریز قیامی ایلدؤنومو (۱۳۵۶)",0,"m");
E("j:11/30","Kiçik Çillənin sonu","کیچیک چیللهنین سونو",0,"f");
E("j:12/29","Neft sənayesinin milliləşdirilməsi günü","نفت صنعتینین میللیلشدیریلمه‌سی گونو",1,"r");
E("g:2/21","Dünya Ana Dili Günü","دونیا آنا دیلی گونو",0,"m");
E("h:1/1","Qəməri yeni il (1 Məhərrəm)","قمری یئنی ایل (۱ محرم)",0,"d");
E("h:1/9","Təsua","تاسوعا",1,"d");E("h:1/10","Aşura","عاشورا",1,"d");
E("h:2/20","Ərbəin (İmam Hüseynin qırxı)","اربعین (امام حسینین قیرخی)",1,"d");
E("h:2/28","Peyğəmbərin vəfatı və İmam Həsənin şəhadəti","پیغمبرین وفاتی و امام حسنین شهادتی",1,"d");
E("h:2/30","İmam Rzanın şəhadəti","امام رضانین شهادتی",1,"d");
E("h:3/17","Peyğəmbərin və İmam Sadiqin mövludu","پیغمبرین و امام صادقین مولودو",1,"d");
E("h:6/3","Həzrət Fatimənin şəhadəti","حضرت فاطمه‌نین شهادتی",1,"d");
E("h:7/13","İmam Əlinin mövludu","امام علینین مولودو",1,"d");
E("h:7/27","Məbəs (peyğəmbərliyin başlanğıcı)","مبعث (پیغمبرلیگین باشلانغیجی)",1,"d");
E("h:8/15","İmam Mehdinin mövludu","امام مهدینین مولودو",1,"d");
E("h:9/1","Ramazan ayının başlanğıcı","رمضان آیینین باشلانغیجی",0,"d");
E("h:9/21","İmam Əlinin şəhadəti","امام علینین شهادتی",1,"d");
E("h:10/1","Ramazan bayramı","رمضان بایرامی",1,"d");E("h:10/2","Ramazan bayramı","رمضان بایرامی",1,"d");
E("h:10/25","İmam Sadiqin şəhadəti","امام صادقین شهادتی",1,"d");
E("h:12/10","Qurban bayramı","قوربان بایرامی",1,"d");
E("h:12/18","Qədir-Xum bayramı","غدیر خم بایرامی",1,"d");

/* Ərəb əlifbası məlumatları */
const FA_A=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
const SEASON_A=["یاز","یاز","یاز","یای","یای","یای","پاییز","پاییز","پاییز","قیش","قیش","قیش"];
const WS_A=["یئل","سود","دوز","آرا","اود","سو","آینی"];
const GM_A=["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"];
const HM_A=["محرم","صفر","ربیع‌الاول","ربیع‌الثانی","جمادی‌الاول","جمادی‌الثانی","رجب","شعبان","رمضان","شوال","ذیقعده","ذیحجه"];
const TA={tabriz:"تبریز",gece:"گئجه",xalca:"خالچا",sehend:"سهند"};
let AZ,FA,SEASON,WD,WS,GM,GS,HM,AB="ar";
function setLang(){AB=S.ab;const a=AB==="ar";AZ=a?AR:AZ_L;FA=a?FA_A:FA_L;SEASON=a?SEASON_A:SEASON_L;WD=a?WDA:WD_L;WS=a?WS_A:WS_L;GM=a?GM_A:GM_L;GS=a?GM_A:GS_L;HM=a?HM_A:HM_L}
const U={
app:["Güney Azərbaycan Təqvimi","گونئی آذربایجان تقویمی"],today:["Bu gün","بو گون"],set:["Ayarlar","آیارلار"],
th:["Tema","تم"],lang:["Əlifba","الفبا"],clk:["Saat","ساعات"],
c_both:["Analoq və rəqəmsal","آنالوق و دیجیتال"],c_an:["Yalnız analoq","یالنیز آنالوق"],c_dg:["Yalnız rəqəmsal","یالنیز دیجیتال"],c_off:["Gizlət","گیزله"],
h24:["24 saatlıq format","۲۴ ساعاتلیق فورمات"],sec:["Saniyələri göstər","ثانیه‌لری گؤستر"],
cal:["Təqvim","تقویم"],gr:["Miladi tarixi göstər","میلادی تاریخی گؤستر"],hj:["Qəməri tarixi göstər","قمری تاریخی گؤستر"],
ntf:["Bildirişlər","بیلدیریشلر"],alr:["Günün münasibətlərini xəbər ver","گونون مناسبتلرینی خبر وئر"],
ask:["İcazə ver","ایجازه وئر"],test:["Sınaq bildirişi","سینه‌ق بیلدیریشی"],testb:["Bildirişlər işləyir.","بیلدیریشلر ایشلییر."],
reset:["Sıfırla","سیفیرلا"],close:["Bağla","باغلا"],prv:["Əvvəlki ay","اؤنجکی آی"],nxt:["Sonrakı ay","سونراکی آی"],
c_m:["Milli","میلی"],c_d:["Dini","دینی"],c_r:["Rəsmi","رسمی"],c_f:["Fəsil","فصیل"],
sh:["Şəmsi","شمسی"],mi:["Miladi","میلادی"],qe:["Qəməri","قمری"],fs:["Fəsil","فصیل"],
noev:["Bu gün üçün qeyd yoxdur.","بو گون اوچون قئید یوخدور."],rem:["Xatırlatmalar","خاطیرلاتمالار"],
ph:["Nəyi xatırladım?","نه‌یی خاطیرلادیم؟"],add:["Əlavə et","علاوه ائت"],tr:["Xatırlatma","خاطیرلاتما"],
need:["Mətn və saat yazın.","متن و ساعات یازین."],past:["Keçmiş vaxt seçilib. Gələcək bir saat seçin.","کئچمیش واخت سئچیلیب. گله‌جک بیر ساعات سئچین."],
ml:["Miladi:","میلادی:"],ql:["Qəməri:","قمری:"],
n1:["Bu mühitdə sistem bildirişi yoxdur; xəbərdarlıqlar səhifə daxilində göstərilir.","بو موحیتده سیستم بیلدیریشی یوخدور؛ خبرداریشلار صحیفه ایچینده گؤستریلیر."],
n2:["Sistem bildirişlərinə icazə verilib.","سیستم بیلدیریشلرینه ایجازه وئریلیب."],
n3:["Bildirişlər bloklanıb. Brauzer ayarlarından icazə verin; o vaxta qədər xəbərdarlıqlar səhifə daxilində görünür.","بیلدیریشلر بلوک اولونوب. براوزر آیارلاریندان ایجازه وئرین؛ او واخته قدر خبرداریشلار صحیفه ایچینده گؤرونور."],
n4:["Sistem bildirişlərinə icazə verilməyib. Xəbərdarlıqlar səhifə daxilində görünür.","سیستم بیلدیریشلرینه ایجازه وئریلمیب. خبرداریشلار صحیفه ایچینده گؤرونور."],
foot:["Əsas təqvim şəmsidir: xanadakı böyük rəqəm şəmsi gün, solda miladi, sağda qəməri gündür.<br>Şəmsi Hicri (İran) təqvimi əsasında. Dini günlər qəməri hesabla göstərilir və İran rəsmi təqvimindən 1–2 gün fərqlənə bilər.","اصلی تقویم شمسیدیر: خانادا بؤیوک رقم شمسی گوندور، ساغدا میلادی، سولدا قمری گوندور.<br>شمسی هجری (ایران) تقویمی اساسیندادیر. دینی گونلر قمری حسابلا گؤستریلیر و ایران رسمی تقویمیندن ۱–۲ گون فرقلنه بیلر."]};
const T=k=>U[k][AB==="ar"?1:0];
const nm=e=>AB==="ar"?e[3]:e[0];
function fa(root){if(AB!=="ar")return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){const v=n.nodeValue.replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);if(v!==n.nodeValue)n.nodeValue=v}}

const LOGO=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1F4E8C"/><rect x="10" y="14" width="44" height="40" rx="6" fill="#fff"/><path d="M10 26l5.5-6 5.5 6 5.5-6 5.5 6 5.5-6 5.5 6 5.5-6 5.5 6V14H10z" fill="#2A9D9B"/><circle cx="32" cy="41" r="8" fill="#E0A526"/><circle cx="35" cy="39" r="7" fill="#fff"/></svg>`;
document.getElementById("logo").innerHTML=LOGO;
document.getElementById("fav").href="data:image/svg+xml,"+encodeURIComponent(LOGO);

const DAY=864e5,$=id=>document.getElementById(id);
const ld=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const mk=c=>new Intl.DateTimeFormat("en-u-ca-"+c+"-nu-latn",{year:"numeric",month:"numeric",day:"numeric",timeZone:"UTC"});
const fJ=mk("persian"),fH=mk("islamic-umalqura");
function P(f,ms){const o={};f.formatToParts(new Date(ms)).forEach(p=>o[p.type]=p.value);return{y:+(o.year||o.relatedYear),m:+o.month,d:+o.day}}
function firstOf(y,m){const a=Date.UTC(y+621,2,21)+Math.round((m-1)*30.44)*DAY;
  for(let o=0;o<=45;o++){for(const s of [o,-o]){const ms=a+s*DAY,p=P(fJ,ms);if(p.y===y&&p.m===m&&p.d===1)return ms}}}
function mlen(first,m){let n=29;while(P(fJ,first+n*DAY).m===m)n++;return n}
const wdi=ms=>(new Date(ms).getUTCDay()+1)%7;
const p2=n=>String(n).padStart(2,"0");

/* Ayarlar */
const DEF={ab:"ar",th:"tabriz",clock:"both",h24:true,sec:true,gr:true,hj:true,alert:true};
let S=Object.assign({},DEF,ld("teqvim-s",{}));
let R=ld("teqvim-r",[]);
const THEMES=[["tabriz","Təbriz","#1F4E8C","#2A9D9B"],["gece","Gecə","#0E1A26","#6FA0DE"],["xalca","Xalça","#2B1119","#F2B84B"],["sehend","Səhənd","#2D7A4A","#E3A72F"]];
function buildThs(){$("ths").innerHTML=THEMES.map(t=>`<button data-th="${t[0]}" aria-pressed="false"><i style="background:linear-gradient(135deg,${t[2]} 50%,${t[3]} 50%)"></i>${AB==="ar"?TA[t[0]]:t[1]}</button>`).join("")}

const n0=new Date();
const TODAY=Date.UTC(n0.getFullYear(),n0.getMonth(),n0.getDate());
let tj=P(fJ,TODAY),cur={y:tj.y,m:tj.m},sel=TODAY;

function i18n(){document.querySelectorAll("[data-i]").forEach(e=>e.textContent=T(e.dataset.i));$("foot").innerHTML=T("foot");
  $("setBtn").setAttribute("aria-label",T("set"));$("prev").setAttribute("aria-label",T("prv"));$("next").setAttribute("aria-label",T("nxt"))}
function applyS(){
  setLang();const a=AB==="ar";
  document.documentElement.dir=a?"rtl":"ltr";document.documentElement.lang=a?"az-Arab":"az";document.title=T("app");
  $("prev").textContent=a?"›":"‹";$("next").textContent=a?"‹":"›";$("s-ab").value=S.ab;
  i18n();buildThs();buildHead();buildChips();
  document.documentElement.dataset.theme=S.th;
  document.body.classList.toggle("nogr",!S.gr);document.body.classList.toggle("nohj",!S.hj);
  $("clock").dataset.m=S.clock;$("clock").hidden=S.clock==="off";
  document.querySelectorAll("[data-th]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.th===S.th)));
  $("s-clock").value=S.clock;
  [["h24","s-h24"],["sec","s-sec"],["gr","s-gr"],["hj","s-hj"],["alert","s-alert"]].forEach(([k,id])=>$(id).checked=!!S[k]);
  tick();
}
function setS(k,v){S[k]=v;sv("teqvim-s",S);applyS()}

/* Bildirişlər */
function toast(t,b){
  const d=document.createElement("div");d.className="toast";
  d.innerHTML=`<div><b></b><span></span></div><button aria-label="Bağla">✕</button>`;
  d.querySelector("b").textContent=t;d.querySelector("span").textContent=b;
  d.querySelector("button").onclick=()=>d.remove();$("toasts").appendChild(d);fa(d);
}
function notify(t,b){
  toast(t,b);
  try{navigator.vibrate&&navigator.vibrate(200)}catch(e){}
  try{if("Notification" in window&&Notification.permission==="granted")new Notification(t,{body:b,icon:document.getElementById("fav").href})}catch(e){}
}
function nstat(){
  $("nst").textContent=!("Notification" in window)?T("n1"):Notification.permission==="granted"?T("n2"):Notification.permission==="denied"?T("n3"):T("n4");
}
function dayAlert(){
  if(!S.alert)return;const ev=evOf(TODAY);if(!ev.length)return;
  if(ld("teqvim-last",0)===TODAY)return;
  notify(T("today"),ev.map(nm).join(" · "));sv("teqvim-last",TODAY);
}
function check(){
  const n=Date.now();let ch=0;
  R.forEach(r=>{if(!r.f&&r.t<=n){r.f=1;ch=1;notify(T("tr")+" · "+p2(new Date(r.t).getHours())+":"+p2(new Date(r.t).getMinutes()),r.text)}});
  if(ch){sv("teqvim-r",R);render()}
}

/* Saat */
(function(){let h="";for(let i=0;i<60;i++){const big=i%5===0,a=i*6*Math.PI/180,r1=big?38:42,r2=46;
  h+=`<line x1="${50+r1*Math.sin(a)}" y1="${50-r1*Math.cos(a)}" x2="${50+r2*Math.sin(a)}" y2="${50-r2*Math.cos(a)}" stroke="var(--soft)" stroke-width="${big?2:.8}"/>`}
  $("ticks").innerHTML=h})();
function tick(){
  const d=new Date(),H=d.getHours(),M=d.getMinutes(),Sx=d.getSeconds();
  const rot=(id,deg)=>$(id).setAttribute("transform","rotate("+deg+" 50 50)");
  rot("hh",(H%12+M/60)*30);rot("mm",(M+Sx/60)*6);rot("ss",Sx*6);
  $("ss").style.display=S.sec?"":"none";
  const h=S.h24?p2(H):String(H%12||12);
  $("tm").textContent=h+":"+p2(M)+(S.sec?":"+p2(Sx):"")+(S.h24?"":(H<12?" AM":" PM"));
  const u=Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()),j=P(fJ,u);
  $("dt").textContent=WD[wdi(u)]+" · "+j.d+" "+AZ[j.m-1]+" "+j.y;
  fa($("clock"));
  if(Sx%15===0)check();
}

/* Təqvim */
function buildHead(){$("head").innerHTML=WS.map((w,i)=>`<div class="wd${i===6?" fri":""}" title="${WD[i]}">${w}</div>`).join("")}
function evOf(ms){
  const j=P(fJ,ms),g=new Date(ms),h=P(fH,ms),r=[];
  [EV["j:"+j.m+"/"+j.d],EV["g:"+(g.getUTCMonth()+1)+"/"+g.getUTCDate()],EV["h:"+h.m+"/"+h.d]].forEach(a=>a&&a.forEach(e=>r.push(e)));
  if(j.m===12&&wdi(ms)===3&&P(fJ,ms+8*DAY).m!==12)r.push(["Çərşənbə Suri — axır çərşənbə axşamı (od çərşənbəsi)",0,"m","چهارشنبه سوری — آخیر چهارشنبه آخشامی (اود چهارشنبه‌سی)"]);
  return r.filter(e=>ON[e[2]]);
}
function render(){
  const first=firstOf(cur.y,cur.m),len=mlen(first,cur.m),last=first+(len-1)*DAY;
  $("mname").textContent=AZ[cur.m-1];$("mar").textContent=AR[cur.m-1];$("myear").textContent=cur.y;
  const g1=new Date(first),g2=new Date(last),ha=P(fH,first),hb=P(fH,last);
  $("msub").textContent=FA[cur.m-1]+" · "+SEASON[cur.m-1]+" · "+T("ml")+" "+GM[g1.getUTCMonth()]+(g1.getUTCMonth()!==g2.getUTCMonth()?" – "+GM[g2.getUTCMonth()]:"")+" "+g2.getUTCFullYear()+" · "+T("ql")+" "+HM[ha.m-1]+(ha.m!==hb.m?" – "+HM[hb.m-1]:"")+" "+hb.y;
  let h="";
  for(let i=0;i<wdi(first);i++)h+='<div class="blank day"></div>';
  for(let d=1;d<=len;d++){
    const ms=first+(d-1)*DAY,g=new Date(ms),ev=evOf(ms),w=wdi(ms);
    const gt=g.getUTCDate()===1||d===1?g.getUTCDate()+" "+GS[g.getUTCMonth()]:g.getUTCDate();
    const cls=["day"];
    if(w===6)cls.push("fri");if(ev.some(e=>e[1]))cls.push("hol");if(ev.length)cls.push("ev");
    if(R.some(r=>r.day===ms))cls.push("rm");
    if(ms===TODAY)cls.push("today");if(ms===sel)cls.push("sel");
    h+=`<button class="${cls.join(" ")}" data-ms="${ms}" aria-label="${d} ${AZ[cur.m-1]}${ev.length?", "+ev.map(nm).join(", "):""}"><b>${d}</b><span class="sm"><small>${gt}</small><small class="h">${(x=>x===1?"☾1":x)(P(fH,ms).d)}</small></span></button>`;
  }
  $("days").innerHTML=h;detail();fa(document.querySelector(".wrap"));
}
function detail(){
  const j=P(fJ,sel),g=new Date(sel),hj=P(fH,sel),ev=evOf(sel);
  const rs=R.filter(r=>r.day===sel).sort((a,b)=>a.t-b.t);
  $("detail").innerHTML=`<h2>${WD[wdi(sel)]}, ${j.d} ${AZ[j.m-1]} ${j.y}</h2>
  <p class="arl" dir="rtl" lang="az-Arab" style="margin:0 0 8px">${WDA[wdi(sel)]}، ${j.d} ${AR[j.m-1]} ${j.y}</p>
  <dl><dt>${T("sh")}</dt><dd>${j.d} ${FA[j.m-1]} ${j.y}</dd>
  <dt>${T("mi")}</dt><dd>${g.getUTCDate()} ${GM[g.getUTCMonth()]} ${g.getUTCFullYear()}</dd>
  <dt>${T("qe")}</dt><dd>${hj.d} ${HM[hj.m-1]} ${hj.y}</dd>
  <dt>${T("fs")}</dt><dd>${SEASON[j.m-1]}</dd></dl>
  ${ev.length?"<ul>"+ev.map(e=>"<li>"+nm(e)+"</li>").join("")+"</ul>":"<p>"+T("noev")+"</p>"}
  <div class="rem"><h3>${T("rem")}</h3>
  ${rs.length?"<ul>"+rs.map(r=>`<li><span>${p2(new Date(r.t).getHours())}:${p2(new Date(r.t).getMinutes())} — <span class="rt"></span>${r.f?" ✓":""}</span><button data-del="${r.id}" aria-label="Sil">✕</button></li>`).join("")+"</ul>":""}
  <div class="rf"><input type="time" id="rt" value="09:00" aria-label="Saat"><input type="text" id="rx" placeholder="${T("ph")}" maxlength="80" aria-label="Xatırlatma mətni"><button id="ra">${T("add")}</button></div></div>`;
  document.querySelectorAll(".rt").forEach((el,i)=>el.textContent=rs[i].text);fa($("detail"));
}
function shift(k){cur.m+=k;if(cur.m>12){cur.m=1;cur.y++}if(cur.m<1){cur.m=12;cur.y--}render()}
$("prev").onclick=()=>shift(-1);$("next").onclick=()=>shift(1);
$("today").onclick=()=>{sel=TODAY;cur={y:tj.y,m:tj.m};render()};
$("days").onclick=e=>{const b=e.target.closest("[data-ms]");if(!b)return;sel=+b.dataset.ms;
  document.querySelectorAll(".day.sel").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");detail()};
$("detail").onclick=e=>{
  const del=e.target.closest("[data-del]");
  if(del){R=R.filter(r=>String(r.id)!==del.dataset.del);sv("teqvim-r",R);render();return}
  if(e.target.id==="ra"){
    const tx=$("rx").value.trim(),tm=$("rt").value;if(!tx||!tm){toast(T("tr"),T("need"));return}
    const g=new Date(sel),[hh,mi]=tm.split(":").map(Number),t=new Date(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate(),hh,mi).getTime();
    if(t<=Date.now()){toast(T("tr"),T("past"));return}
    R.push({id:Date.now(),day:sel,t,text:tx,f:0});sv("teqvim-r",R);render();
  }};
const CATS={m:1,d:1,r:1,f:1};
function buildChips(){$("chips").innerHTML=Object.keys(CATS).map(k=>`<button data-k="${k}" aria-pressed="${!!ON[k]}">${T("c_"+k)}</button>`).join("")}
$("chips").onclick=e=>{const b=e.target.closest("[data-k]");if(!b)return;const k=b.dataset.k;ON[k]=ON[k]?0:1;b.setAttribute("aria-pressed",String(!!ON[k]));render()};

/* Ayarlar pəncərəsi */
$("setBtn").onclick=()=>{nstat();$("dlg").showModal()};
$("s-close").onclick=()=>$("dlg").close();
$("ths").onclick=e=>{const b=e.target.closest("[data-th]");if(b)setS("th",b.dataset.th)};
$("s-clock").onchange=e=>setS("clock",e.target.value);
[["h24","s-h24"],["sec","s-sec"],["gr","s-gr"],["hj","s-hj"],["alert","s-alert"]].forEach(([k,id])=>$(id).onchange=e=>setS(k,e.target.checked));
$("n-ask").onclick=()=>{try{const p=Notification.requestPermission();(p&&p.then?p:Promise.resolve()).then(nstat)}catch(e){nstat()}};
$("n-test").onclick=()=>notify(T("test"),T("testb"));
$("s-reset").onclick=()=>{S=Object.assign({},DEF);sv("teqvim-s",S);applyS()};

$("s-ab").onchange=e=>{setS("ab",e.target.value);render()};
applyS();render();setInterval(tick,1000);
dayAlert();

if("serviceWorker" in navigator&&location.protocol.indexOf("http")===0)navigator.serviceWorker.register("sw.js").catch(()=>{});

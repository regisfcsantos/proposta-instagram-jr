import{d as n,p as f}from"./data-BdZF9JFf.js";import{a as h,e as l,i as p,b as m,m as g,s as q}from"./shell-xnYJDZnp.js";const $={historia:"Para quem quer saber quem ele é em 30 segundos. Começa por 1987.",apoios:"Todos os vídeos de apoio num lugar só. É o destaque para mostrar ao governador e à imprensa.",feitos:"As conquistas dele, ano a ano: demarcação, saúde, secretaria indígena, associação. É o que responde “o que ele já fez?”.",saude:"O trabalho de todo dia como agente de saúde e microscopista de malária.",caititu:"A Aldeia Boa Vista e a Terra Indígena Caititu: de onde ele vem e para onde volta.","na-luta":"Assembleia Legislativa, tribuna, Brasília: espaços de decisão por onde ele já passou.",cultura:"Identidade Apurinã e de outros povos. Só com autorização de quem aparece."};let t,o,x;function b(){const i=location.hash.slice(1);t=n.find(e=>e.id===i)||n[0],o=0;const a=`
    <div id="story" class="relative min-h-0 flex-1 select-none overflow-hidden bg-black text-white">
      <div id="media" class="absolute inset-x-0 top-0 bottom-[68px] overflow-hidden rounded-b-xl"></div>
      <div class="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 to-transparent"></div>
      <div id="bars" class="absolute inset-x-2 top-[58px] flex gap-1 max-[640px]:top-2">${t.itens.map(()=>'<span class="h-[2.5px] flex-1 overflow-hidden rounded bg-white/35"><i class="block h-full w-0 bg-white"></i></span>').join("")}</div>
      <div class="absolute inset-x-3 top-[70px] flex items-center gap-2 max-[640px]:top-5">${h("size-8")}<b class="text-[14px] font-semibold">${f.usuario}</b><span class="text-[14px] text-white/70">${l(t.nome)}</span><span class="ml-auto">${p.more("size-6")}</span><a href="perfil.html" class="text-[28px] leading-none" aria-label="Fechar">×</a></div>
      <p id="sticker" class="pointer-events-none absolute inset-x-6 bottom-[120px] text-center"></p>
      <button id="prev" type="button" class="absolute bottom-[68px] left-0 top-28 w-1/3" aria-label="Anterior"></button>
      <button id="next" type="button" class="absolute bottom-[68px] right-0 top-28 w-2/3" aria-label="Próximo"></button>
      <div class="absolute inset-x-3 bottom-3 flex items-center gap-4 pb-[34px] max-[640px]:pb-1"><span class="flex-1 rounded-full border border-white/50 px-4 py-2.5 text-[14px] text-white/80">Enviar mensagem</span>${p.heart("size-7")}${p.send("size-7")}</div>
    </div>`,r=`
    <div class="flex flex-wrap gap-4">
      ${n.map(e=>`<a href="#${e.id}" class="grid justify-items-center gap-1 text-sm font-semibold ${e.id===t.id?"text-urucum":"text-cinza"}">
        <span class="rounded-full p-[3px] ${e.id===t.id?"ring-2 ring-urucum":"ring-1 ring-linha"}"><img src="${e.capa}" alt="" class="size-16 rounded-full object-cover"></span>${e.nome}</a>`).join("")}
    </div>
    <div class="space-y-2 rounded-xl border border-linha bg-white p-5">
      <p class="text-xs font-bold uppercase tracking-[.14em] text-urucum">Destaque “${l(t.nome)}”</p>
      <p class="text-lg">${l($[t.id])}</p>
      <p class="text-sm text-cinza">${t.itens.length} telas. Toque nas laterais da tela para avançar ou voltar.</p>
    </div>
    ${t.itens.some(e=>e.texto?.startsWith("["))?m("Textos entre colchetes são perguntas para a Andrea: não sabemos o que acontece naquela foto."):""}
    ${t.itens.some(e=>e.consentimento)?m("Este destaque tem fotos que precisam de autorização da comunidade que aparece nelas."):""}
    <div class="space-y-2">
      <h3 class="text-lg font-bold">Capas dos destaques</h3>
      <p>Fotos reais recortadas no rosto ou no gesto principal, como aqui. Capas com ícones genéricos deixam o perfil com cara de empresa.</p>
    </div>
    <div class="space-y-2">
      <h3 class="text-lg font-bold">Como alimentar</h3>
      <p>Todo story bom vai para o destaque certo. Assim o perfil fica completo mesmo nas semanas em que ele estiver sem internet.</p>
    </div>`;g({active:"destaques.html",title:"Os destaques",intro:"Os sete atalhos fixos abaixo da bio. Toque na tela para passar.",screen:a,overlay:!0,dark:!0,notesHTML:r}),document.getElementById("prev").onclick=()=>d(o-1),document.getElementById("next").onclick=()=>d(o+1),d(0)}function d(i){if(clearTimeout(x),i<0&&(i=0),i>=t.itens.length){const s=n.indexOf(t);location.hash=n[(s+1)%n.length].id;return}o=i;const a=t.itens[o],r=document.getElementById("media");r.innerHTML=a.video?`<video class="size-full object-cover" src="${a.video}" poster="${a.poster}" playsinline autoplay muted><track kind="subtitles" srclang="pt" src="${a.track}" default></video>`:a.arte?`<div class="flex size-full items-center bg-rio"><div class="aspect-[3/4] w-full">${q(a.arte)}</div></div>`:`<img src="${a.img}" alt="" class="size-full object-cover">`,document.getElementById("sticker").innerHTML=a.texto?`<span class="rounded-md bg-white box-decoration-clone px-2 py-0.5 text-[20px] font-bold leading-[1.55] text-black">${l(a.texto)}</span>`:"";const e=[...document.querySelectorAll("#bars i")];e.forEach((s,v)=>{s.style.transition="none",s.style.width=v<o?"100%":"0"});const c=e[o],u=()=>d(o+1);if(a.video){const s=r.querySelector("video");s.addEventListener("timeupdate",()=>c.style.width=`${s.currentTime/(s.duration||1)*100}%`),s.addEventListener("ended",u)}else requestAnimationFrame(()=>requestAnimationFrame(()=>{c.style.transition="width 5000ms linear",c.style.width="100%"})),x=setTimeout(u,5e3)}addEventListener("hashchange",b);b();

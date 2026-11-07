import"./style-C-meZdpR.js";import{c as o,l as h,p as c,i as l,a as $,e as t,t as y,o as w,b as k,q as z,s as g,f as j,m as L}from"./shell-k4UXixwW.js";function E(s){if(s.tipo==="reel")return`<div class="relative aspect-[3/4] bg-black">
      <video class="size-full object-cover" src="${s.video}" poster="${s.poster}" playsinline controls preload="none">
        <track kind="subtitles" srclang="pt" label="Português" src="${s.legendaVideo}" default>
      </video>
      <span class="pointer-events-none absolute right-3 top-3 text-white drop-shadow">${l.reels("size-5")}</span>
    </div>`;const a=s.slides?s.slides.map(g):s.imagens.map(e=>`<img src="${e}" alt="" class="size-full object-cover">`);return a.length===1?`<div class="aspect-[3/4] bg-black">${a[0]}</div>`:`<div class="relative">
      <div id="car" class="no-scrollbar flex aspect-[3/4] snap-x snap-mandatory overflow-x-auto">
        ${a.map(e=>`<div class="size-full shrink-0 snap-center">${e}</div>`).join("")}
      </div>
      <span id="carCount" class="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-0.5 text-[12px] font-semibold text-white">1/${a.length}</span>
    </div>`}const B=s=>s>1?`<div id="dots" class="absolute left-1/2 flex -translate-x-1/2 gap-1">${Array.from({length:s},(a,e)=>`<span class="size-1.5 rounded-full ${e?"bg-ig-line":"bg-ig-blue"}"></span>`).join("")}</div>`:"";function b(){const s=location.hash.slice(1),a=Math.max(0,o.findIndex(i=>i.id===s)),e=o[a],p=o[(a-1+o.length)%o.length],u=o[(a+1)%o.length],n=e.apoiador&&h[e.apoiador],m=e.slides?e.slides.length:e.imagens?e.imagens.length:1,x=`
    <div class="relative flex h-11 shrink-0 items-center px-3">
      <a href="perfil.html" aria-label="Voltar ao perfil">${l.back("size-6")}</a>
      <div class="absolute left-1/2 -translate-x-1/2 text-center leading-tight"><p class="text-[11px] font-semibold uppercase text-ig-muted">${c.usuario}</p><p class="text-[16px] font-bold">Publicações</p></div>
    </div>
    <div class="no-scrollbar min-h-0 flex-1 overflow-y-auto">
      <div class="flex items-center gap-2.5 px-3 py-2">
        ${$("size-8",!0)}
        <div class="leading-tight"><p class="text-[14px] font-semibold">${c.usuario}${n?` <span class="font-normal">e</span> [${t(n.nome.replace("Liderança ","liderança "))}]`:""}</p><p class="text-[12px]">Lábrea, Amazonas</p></div>
        <span class="ml-auto">${l.more("size-5")}</span>
      </div>
      ${E(e)}
      <div class="relative flex items-center gap-4 px-3 pt-3">${l.heart()}${l.comment()}${l.repost()}${l.send()}${B(m)}<span class="ml-auto">${l.save()}</span></div>
      <p class="whitespace-pre-line px-3 pb-1 pt-2.5 text-[14px] leading-[18px]"><b class="font-semibold">${c.usuario}</b> ${t(e.legenda)}</p>
      <p class="px-3 pb-5 text-[12px] text-ig-muted">Rascunho · ainda não publicado</p>
    </div>
    ${y("feed")}`,f=`
    <div class="flex flex-wrap items-center gap-2 text-sm">
      <span class="rounded bg-areia px-2 py-0.5 font-bold uppercase tracking-wide">Post ${a+1} de ${o.length}</span>
      <span class="rounded bg-areia px-2 py-0.5 font-bold uppercase tracking-wide">${e.tipo}</span>
      <span class="rounded bg-areia px-2 py-0.5 font-bold uppercase tracking-wide">publicar na semana ${e.semana}</span>
      ${e.fixado?'<span class="rounded bg-rio px-2 py-0.5 font-bold uppercase tracking-wide text-white">fixado</span>':""}
      ${e.id.startsWith("marco")?'<span class="rounded bg-urucum px-2 py-0.5 font-bold uppercase tracking-wide text-white">o que já fizemos</span>':""}
    </div>
    <div class="space-y-1"><h2 class="text-2xl font-extrabold">${t(e.titulo)}</h2>
      ${n?`<p class="text-cinza">${t(n.nome)} · ${t(n.detalhe)}</p>`:""}</div>
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="space-y-1 rounded-xl border border-linha bg-white p-4"><p class="text-xs font-bold uppercase tracking-[.14em] text-urucum">Por que este post</p><p>${t(e.porque)}</p></div>
      <div class="space-y-1 rounded-xl border border-linha bg-white p-4"><p class="text-xs font-bold uppercase tracking-[.14em] text-rio">Como produzir</p><p>${t(e.comoFazer)}</p></div>
    </div>
    ${w(e.confirmar)}
    ${e.consentimento?k("Só publicar com autorização da comunidade que aparece na foto."):""}
    <div class="space-y-2">
      <div class="flex items-center justify-between gap-3"><p class="font-bold">Legenda (rascunho)</p>${z(e.legenda)}</div>
      <p class="whitespace-pre-line rounded-lg border border-linha bg-white p-4 text-[15px]">${t(e.legenda)}</p>
    </div>
    <div class="flex justify-between gap-3 pt-2 text-sm font-semibold">
      <a href="#${p.id}" class="rounded-full border border-linha bg-white px-4 py-2 hover:border-rio">← ${t(p.titulo)}</a>
      <a href="#${u.id}" class="rounded-full border border-linha bg-white px-4 py-2 text-right hover:border-rio">${t(u.titulo)} →</a>
    </div>
    <div class="space-y-2 pt-2">
      <p class="text-xs font-bold uppercase tracking-[.14em] text-cinza">Todos os posts, na ordem da grade</p>
      <div class="grid grid-cols-5 gap-1.5 sm:grid-cols-8">
        ${o.map((i,d)=>`<a href="#${i.id}" title="${t(i.titulo)}" class="block aspect-[3/4] overflow-hidden rounded ${d===a?"ring-2 ring-urucum ring-offset-2":"opacity-80 hover:opacity-100"}">${i.slides?g(i.slides[0]):`<img src="${j(i)}" alt="" class="size-full object-cover">`}</a>`).join("")}
      </div>
    </div>`;L({active:"post.html",title:"Os posts",intro:"Toque nas setas ou nas miniaturas para passar de um post para outro. No carrossel, deslize as imagens dentro do celular.",screen:x,notesHTML:f});const r=document.getElementById("car");r&&r.addEventListener("scroll",()=>{const i=Math.round(r.scrollLeft/r.clientWidth);document.getElementById("carCount").textContent=`${i+1}/${r.children.length}`,[...document.getElementById("dots").children].forEach((d,v)=>d.className=`size-1.5 rounded-full ${v===i?"bg-ig-blue":"bg-ig-line"}`)})}addEventListener("hashchange",()=>{b(),scrollTo({top:0})});b();

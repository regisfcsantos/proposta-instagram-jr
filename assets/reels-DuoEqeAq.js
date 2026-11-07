import{r as n,b as c,p as l}from"./data-BdZF9JFf.js";import{i as a,a as m,e as d,t as u,n as s,m as g}from"./shell-xnYJDZnp.js";const v=`
  <div class="relative min-h-0 flex-1 overflow-hidden bg-black text-white">
    <div class="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center px-4 pt-14 max-[640px]:pt-3">
      <p class="flex items-center gap-1 text-[22px] font-bold drop-shadow">Reels ${a.chevron("size-5")}</p>
      <span class="ml-auto">${a.camera("size-7")}</span>
    </div>
    <button id="som" type="button" class="absolute right-4 top-28 z-10 rounded-full bg-black/50 p-2 max-[640px]:top-16" aria-label="Ligar som">${a.mute("size-5")}</button>
    <div id="feed" class="no-scrollbar h-full snap-y snap-mandatory overflow-y-auto">
      ${n.map(e=>(e.apoiador&&c[e.apoiador],`<article class="relative h-full snap-start">
          <video class="reel-video size-full bg-black object-cover" src="${e.video}" poster="${e.poster}" playsinline loop muted preload="metadata">
            <track kind="subtitles" srclang="pt" label="Português" src="${e.legendaVideo}" default>
          </video>
          <div class="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/75 to-transparent"></div>
          <div class="absolute bottom-6 right-3 grid justify-items-center gap-5 text-[12px] font-semibold">
            <span class="grid justify-items-center gap-1">${a.heart("size-7")}</span>
            <span class="grid justify-items-center gap-1">${a.comment("size-7")}</span>
            <span class="grid justify-items-center gap-1">${a.repost("size-7")}</span>
            <span class="grid justify-items-center gap-1">${a.send("size-7")}</span>
            ${a.moreV("size-6")}
            <img src="${e.poster}" alt="" class="size-7 rounded-md border-2 border-white object-cover">
          </div>
          <div class="absolute bottom-6 left-3 right-16 space-y-2">
            <div class="flex items-center gap-2">${m("size-8")}<b class="text-[14px] font-semibold">${l.usuario}</b><span class="rounded-lg border border-white/70 px-2.5 py-0.5 text-[13px] font-semibold">Seguir</span></div>
            <p class="line-clamp-1 text-[14px]">${d(e.titulo)}</p>
            <p class="flex items-center gap-1.5 text-[13px]">${a.music("size-3.5")} ${l.usuario} · Áudio original</p>
          </div>
        </article>`)).join("")}
    </div>
  </div>
  ${u("reels")}`,b=`
  ${s(1,"Vídeos são o que mais alcança","Segundo o próprio Instagram, os Reels são metade do tempo que as pessoas passam no app e chegam a quem ainda não segue o perfil. É por eles que apoiadores de outros municípios vão conhecê-lo.")}
  ${s(2,"Até 3 minutos e sempre com legenda","Reels com mais de 3 minutos não são recomendados para quem não segue. Por isso o vídeo da história (3min10s) precisa ser cortado. As legendas destes vídeos já foram revisadas e estão na pasta do projeto (.vtt).")}
  ${s(3,"Editar, não só repostar","O Instagram dá menos alcance para vídeo de outra pessoa postado sem edição. Os vídeos de apoio entram com abertura, nome e povo da liderança e legenda na tela. Isso também deixa tudo mais claro para quem assiste.")}
  ${s(4,"Post em colaboração","Se a liderança tiver Instagram, publicar como Collab: o Reel aparece nos dois perfis e soma o alcance dos dois.")}
  ${s(5,"São 3 lideranças, não 5","A liderança Kokama gravou três vezes; usamos a gravação mais completa, que fala com o governador.")}
  ${s(6,"O que mais falta: ele falando","Em nenhum vídeo ele aparece falando. Um vídeo de 45 segundos, gravado de pé, com ele se apresentando, seria o Reel mais importante do perfil.")}
  <div class="space-y-2">
    <p class="text-xs font-bold uppercase tracking-[.14em] text-cinza">Nesta tela</p>
    <ol class="list-decimal space-y-1 pl-5">${n.map(e=>`<li><a class="font-semibold text-rio underline" href="post.html#${e.id}">${d(e.titulo)}</a></li>`).join("")}</ol>
  </div>`;g({active:"reels.html",title:"Os Reels",intro:"Role para cima dentro do celular. Toque no alto-falante para ouvir.",screen:v,overlay:!0,dark:!0,notesHTML:b});const p=document.getElementById("feed"),r=[...p.querySelectorAll("video")];let o=!0;const i=document.getElementById("som");i.addEventListener("click",()=>{o=!o,r.forEach(e=>e.muted=o),i.innerHTML=o?a.mute("size-5"):a.sound("size-5"),i.setAttribute("aria-label",o?"Ligar som":"Desligar som")});r.forEach(e=>e.addEventListener("click",()=>e.paused?e.play():e.pause()));const f=new IntersectionObserver(e=>{for(const t of e)t.isIntersecting&&t.intersectionRatio>.6?t.target.play().catch(()=>{}):t.target.pause()},{root:p,threshold:[0,.6,1]});r.forEach(e=>f.observe(e));

import{c as r,p as a,e as o,d,f as c,s as p,g as n,h as m,j as u,k as x}from"./shell-CTbO2ROe.js";const s=(e,i,t,l)=>`
  <a href="${e}" class="group grid grid-rows-[auto_1fr] overflow-hidden rounded-2xl border border-linha bg-white transition hover:-translate-y-0.5 hover:border-rio">
    <div class="aspect-[4/3] overflow-hidden bg-areia"><img src="${l}" alt="" class="size-full object-cover object-[50%_30%] transition group-hover:scale-[1.03]"></div>
    <div class="space-y-1 p-4"><h3 class="text-lg font-bold text-rio">${i} →</h3><p class="text-[15px] text-cinza">${t}</p></div>
  </a>`,g=r(`
  <div class="no-scrollbar min-h-0 flex-1 overflow-y-auto">
    <div class="flex items-center gap-5 px-4 pt-3">
      <img src="${a.foto}" alt="Foto de perfil de José Raimundo" class="size-[80px] rounded-full object-cover object-[50%_30%] ring-2 ring-[#d62976] ring-offset-2 ring-offset-[var(--ig-bg)]">
      <div><p class="text-[15px] font-semibold">${o(a.nomeExibicao)}</p><p class="text-[13px] text-ig-muted">@${a.usuario}</p></div>
    </div>
    <div class="space-y-[1px] px-4 pt-3 text-[14px]"><p class="font-semibold">${o(a.nome)}</p>${a.bio.map(e=>`<p>${o(e)}</p>`).join("")}</div>
    <div class="flex gap-4 px-4 py-4">${d.slice(0,5).map(e=>`<img src="${e.capa}" alt="" class="size-[56px] rounded-full border border-ig-line object-cover">`).join("")}</div>
    <div class="grid grid-cols-3 gap-[2px]">${c.slice(0,12).map(e=>`<div class="aspect-[3/4] overflow-hidden">${e.slides?p(e.slides[0]):`<img src="${n(e)}" alt="" class="size-full object-cover">`}</div>`).join("")}</div>
  </div>`);document.querySelector("#app").innerHTML=`
  ${m("index.html")}
  <main class="mx-auto max-w-6xl space-y-20 px-4 pb-24 pt-10">
    <section class="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div class="space-y-5">
        <p class="text-xs font-bold uppercase tracking-[.16em] text-urucum">Proposta para a Andrea · novembro de 2026</p>
        <h1 class="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">Quase 40 anos servindo os povos indígenas, <span class="text-urucum">da canoa de casca de pau</span> à Assembleia.</h1>
        <p class="max-w-prose text-lg text-cinza">Esta é a ideia que o Instagram de José Raimundo Apurinã deve repetir em cada post. As telas a seguir mostram como o perfil pode ficar, usando só as fotos, vídeos e áudios enviados.</p>
        <p class="max-w-prose rounded-xl bg-white p-4 text-[15px] ring-1 ring-linha"><b>Abrindo no celular?</b> Cada tela abre como se fosse o próprio Instagram, ocupando a tela toda. O botão verde “Sobre esta tela” mostra as explicações e leva às outras telas.</p>
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="perfil.html" class="rounded-full bg-rio px-6 py-3 font-semibold text-white hover:bg-rio-claro">Ver o perfil novo</a>
          <a href="plano.html" class="rounded-full border border-rio px-6 py-3 font-semibold text-rio hover:bg-white">Ler o plano</a>
        </div>
      </div>
      <div class="hidden lg:block" style="--s:.82">${g}</div>
    </section>

    <section class="space-y-6">
      <h2 class="text-3xl font-extrabold">O que muda</h2>
      <div class="grid gap-5 md:grid-cols-3">
        <div class="space-y-2 rounded-2xl bg-white p-6 ring-1 ring-linha"><p class="font-display text-5xl font-extrabold text-urucum">1</p><h3 class="text-xl font-bold">Um só endereço</h3><p class="text-cinza">Hoje o perfil é <b>@${a.usuarioAtual}</b>, mas os banners divulgam <b>@${a.usuario}</b>. Quem vê o banner não encontra o perfil.</p></div>
        <div class="space-y-2 rounded-2xl bg-white p-6 ring-1 ring-linha"><p class="font-display text-5xl font-extrabold text-urucum">2</p><h3 class="text-xl font-bold">Quem ele é e quem o apoia</h3><p class="text-cinza">Fixados no topo: “Quem é ele” e, ao lado, os vídeos das lideranças de outros povos que declaram apoio a ele.</p></div>
        <div class="space-y-2 rounded-2xl bg-white p-6 ring-1 ring-linha"><p class="font-display text-5xl font-extrabold text-urucum">3</p><h3 class="text-xl font-bold">O que ele já fez</h3><p class="text-cinza">A série “O que já fizemos”: demarcação em 1987, saúde desde 1988, a primeira secretaria indígena de Pauini, a associação da Aldeia Boa Vista.</p></div>
      </div>
    </section>

    <section class="space-y-6">
      <div class="flex flex-wrap items-end justify-between gap-2"><h2 class="text-3xl font-extrabold">As telas</h2><p class="text-cinza">No computador, cada tela traz as explicações ao lado do celular.</p></div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        ${s("perfil.html","Perfil","Bio, destaques e a grade dos primeiros posts.","media/fotos/retrato.jpg")}
        ${s("post.html#quem-e","Carrossel “Quem é”","O currículo dele em 7 imagens, para quem chega pela primeira vez.","media/fotos/selfie-aldeia.jpg")}
        ${s("post.html#marco-2015","O que já fizemos","As conquistas dele, uma por post, em artes da mesma série.","media/fotos/roda-conversa.jpg")}
        ${s("reels.html","Reels","Os vídeos de apoio e a história dele, com legenda na tela.","media/videos/apoio-5.jpg")}
        ${s("destaques.html","Destaques","Sete atalhos fixos: história, apoios, feitos, saúde, território, luta e cultura.","media/fotos/tribuna.jpg")}
        ${s("plano.html","Plano e verificação","Rotina com pouca internet, o que é confirmado e o que falta confirmar.","media/fotos/saude-atendimento.jpg")}
      </div>
    </section>
  </main>
  ${u()}`;document.querySelectorAll(".ig").forEach(e=>e.dataset.ig=x());

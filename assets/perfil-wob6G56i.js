import"./style-C-meZdpR.js";import{p as s,c as t,i as a,a as r,e as o,d as n,t as l,n as i,b as p,m as d,s as c,f as m}from"./shell-k4UXixwW.js";const u=e=>`
  <a href="post.html#${e.id}" class="relative block aspect-[3/4] overflow-hidden bg-ig-line" aria-label="${o(e.titulo)}">
    ${e.slides?c(e.slides[0]):`<img src="${m(e)}" alt="" class="size-full object-cover">`}
    <span class="absolute right-1.5 top-1.5 flex gap-1 text-white drop-shadow-[0_0_2px_rgb(0_0_0/.6)]">
      ${e.fixado?a.pin("size-[18px]"):""}
      ${e.tipo==="reel"?a.reels("size-[18px]"):e.tipo==="carrossel"?a.multi("size-[18px]"):""}
    </span>
  </a>`,b=`
  <div class="flex h-11 shrink-0 items-center gap-4 px-3">
    <a href="index.html" aria-label="Voltar">${a.back("size-6")}</a>
    <span class="text-[16px] font-bold">${s.usuario}</span>
    <span class="ml-auto flex gap-5">${a.bell("size-6")}${a.more("size-6")}</span>
  </div>
  <div class="no-scrollbar min-h-0 flex-1 overflow-y-auto">
    <div class="flex items-center gap-5 px-4 pt-2">
      <a href="destaques.html#historia" aria-label="Ver stories">${r("size-[80px]",!0)}</a>
      <div class="min-w-0 flex-1 space-y-1.5">
        <p class="truncate text-[15px] font-semibold">${o(s.nomeExibicao)}</p>
        <div class="flex justify-between pr-2 text-[13px] leading-[16px]">
          <span><b class="block text-[16px] font-semibold">${t.length}</b>posts</span>
          <span><b class="block text-[16px] font-semibold">—</b>seguidores</span>
          <span><b class="block text-[16px] font-semibold">—</b>seguindo</span>
        </div>
      </div>
    </div>
    <div class="space-y-[1px] px-4 pt-3 text-[14px] leading-[18px]">
      <p class="font-semibold">${o(s.nome)}</p>
      <p class="text-ig-muted">${o(s.categoria)}</p>
      ${s.bio.map(e=>`<p>${o(e)}</p>`).join("")}
      <p class="flex items-center gap-1 font-semibold text-ig-link">${a.link("size-[14px] -rotate-45")} ${o(s.link.texto)}</p>
    </div>
    <div class="flex gap-1.5 px-4 pt-3 text-[14px] font-semibold">
      <span class="flex-1 rounded-lg bg-ig-blue py-[7px] text-center text-white">Seguir</span>
      <span class="flex-1 rounded-lg bg-ig-btn py-[7px] text-center">Mensagem</span>
      <span class="grid w-[34px] place-items-center rounded-lg bg-ig-btn">${a.personAdd("size-4")}</span>
    </div>
    <div class="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-1 pt-4">
      ${n.map(e=>`
        <a href="destaques.html#${e.id}" class="grid w-[64px] shrink-0 justify-items-center gap-1.5 text-[12px] leading-[14px]">
          <span class="rounded-full border border-ig-line p-[3px]"><span class="block size-[56px] overflow-hidden rounded-full bg-ig-line"><img src="${e.capa}" alt="" class="size-full object-cover"></span></span>
          <span class="w-full truncate text-center">${o(e.nome)}</span>
        </a>`).join("")}
    </div>
    <div class="mt-3 grid grid-cols-3">
      <span class="grid place-items-center border-b border-ig-fg py-2.5">${a.grid("size-6")}</span>
      <a href="reels.html" class="grid place-items-center border-b border-ig-line py-2.5 text-ig-muted" aria-label="Reels">${a.reels("size-6")}</a>
      <span class="grid place-items-center border-b border-ig-line py-2.5 text-ig-muted">${a.tag("size-6")}</span>
    </div>
    <div class="grid grid-cols-3 gap-[2px] pt-[2px]">${t.map(u).join("")}</div>
  </div>
  ${l("perfil")}`,x=`
  <div class="space-y-2 rounded-xl border border-dashed border-linha bg-white p-5">
    <p class="text-xs font-bold uppercase tracking-[.14em] text-cinza">Como está hoje</p>
    <p>Usuário <b>@${s.usuarioAtual}</b>, nome “José Raimundo fortino Muniz”. Os banners que já circulam divulgam <b>@${s.usuario}</b>: quem procura esse nome não encontra o perfil.</p>
    <p class="text-sm text-cinza">Com um print da conta atual, este quadro vira um “antes e depois” completo.</p>
  </div>
  ${i(1,"Usuário igual ao dos banners",`Trocar para <b>@${s.usuario}</b>, se estiver livre. Seguidores e posts continuam. Se estiver ocupado, refazer os banners com o usuário atual.`)}
  ${i(2,"Nome que aparece na busca",`O campo “nome” entra na busca do Instagram. Com “Apurinã” e “Saúde Indígena” ali, ele aparece para quem procura esses termos.<div class="mt-2 rounded-md border border-linha bg-white px-3 py-2 font-mono text-sm">${o(s.nome)}</div>`)}
  ${i(3,"Bio em quatro linhas",`Quem ele é, de onde vem, o que já fez e o que defende. Cada linha é um fato que dá para confirmar.<div class="mt-2 whitespace-pre-line rounded-md border border-linha bg-white px-3 py-2 font-mono text-sm">${o(s.bio.join(`
`))}</div>`)}
  ${i(4,"Conta profissional · Figura pública","Gratuito. Libera estatísticas, botão de contato e agendamento de posts pelo Meta Business Suite, essencial quando a internet da aldeia falha.")}
  ${i(5,"Link na bio","“Declare seu apoio” é uma sugestão: um link de WhatsApp com mensagem pronta para quem quiser mandar um vídeo de apoio. <b>Pendente com a Andrea.</b> Se não houver link, a linha some.")}
  ${i(6,"Sete destaques",'Funcionam como um menu permanente: história, apoios, feitos, saúde, território, atuação política e cultura. <a class="font-semibold text-rio underline" href="destaques.html">Ver os destaques</a>.')}
  ${i(7,"Três posts fixados",'Primeiro “Quem é ele”; ao lado, os vídeos das lideranças que o apoiam. Eles ficam sempre no topo, não importa quando foram publicados. <a class="font-semibold text-rio underline" href="post.html">Ver os posts</a>.')}
  ${i(8,"Uma linha do tempo na coluna do meio",'As artes verdes da série <b>“O que já fizemos”</b> são publicadas em ordem cronológica, uma por semana: 1987, 1988, 2015, 2024. Como o Instagram mostra o post mais novo no topo, na grade elas aparecem de cima para baixo como 2024 → 1987, sempre na coluna do meio. <a class="font-semibold text-rio underline" href="plano.html#rotina">Ver o calendário</a>.')}
  ${p("Nas fotos de rituais e de grupo (destaque “Cultura”), só publicar com o ok da comunidade que aparece nelas.")}
`;d({active:"perfil.html",title:"O perfil",intro:"Como um visitante vê a conta. Toque nos posts e nos destaques.",screen:b,notesHTML:x});

// ---------------------------------------------------------------
// Moz Roots Tours — dados dos pacotes (PT/EN)
// Para adicionar/editar um pacote, edite este array.
// "images" -> a primeira entrada é usada como imagem de destaque.
// ---------------------------------------------------------------
const WHATSAPP_NUMBER = "258845224658"; // +258 84 522 4658
const SHOW_IMAGE_NAMES = true; // põe false para esconder os nomes quando acabares a manutenção

const UI = {
  pt: {
    heroEyebrow: "Pacote em destaque",
    reserveWA: "Reservar",
    tabsTitle: "Escolha o seu passeio",
    cash: "Dinheiro",
    card: "Cartão",
    perPerson: "por pessoa",
    duration: "Duração",
    schedule: "Horário",
    reservePkg: "Reservar este pacote",
    call: "Ligar",
    packagesTitle: "Pacotes",
    contact: "Contacto",
    calls: "Chamadas",
    viewLocation: "Ver localização",
    footerDesc: "Centro de atividades e reservas de turismo em Praia do Tofo, Inhambane. Passeios de barco, snorkeling, mangal, kayak, quads, city tour e observação de baleias.",
    openDaily: "Aberto todos os dias, 24 horas",
    waMessage: (name, cash, card) => `Olá! Gostaria de reservar o pacote "${name}" (${cash} dinheiro / ${card} cartão). Podem confirmar disponibilidade?`
  },
  en: {
    heroEyebrow: "Featured package",
    reserveWA: "Book",
    tabsTitle: "Choose your tour",
    cash: "Cash",
    card: "Card",
    perPerson: "per person",
    duration: "Duration",
    schedule: "Schedule",
    reservePkg: "Book this package",
    call: "Call",
    packagesTitle: "Packages",
    contact: "Contact",
    calls: "Calls",
    viewLocation: "View location",
    footerDesc: "Activity and tour booking centre in Tofo Beach, Inhambane. Boat trips, snorkelling, mangroves, kayaking, quad bikes, city tours and whale watching.",
    openDaily: "Open every day, 24 hours",
    waMessage: (name, cash, card) => `Hello! I'd like to book the "${name}" package (${cash} cash / ${card} card). Can you confirm availability?`
  }
};

const PACKAGES = [
  {
    id: "pansy-survivor",
    name: "Pansy & Survivor Island",
    priceCash: 4000,
    priceCard: 4200,
    duration: "6-7h",
    pt: {
      desc: "Uma excursão de dia inteiro (6 a 7 horas) num barco à vela tradicional, pelos pontos mais bonitos do estuário — de Pansy Island a Survivor Island.",
      highlights: ["Recolha de conchas pansy e estrelas-do-mar em Pansy Island", "Snorkeling num recife próximo com peixes tropicais", "Procura de cavalos-marinhos nos bancos de erva marinha", "Visita guiada à aldeia em Survivor Island, com o chefe local", "Almoço buffet de marisco incluído", "Transporte de barco, equipamento de snorkel e água incluídos"]
    },
    en: {
      desc: "A memorable 6–7 hour day tour aboard a traditional sailing boat, exploring some of the most beautiful spots in the estuary — from Pansy Island to Survivor Island.",
      highlights: ["Collect pansy shells and see starfish on Pansy Island", "Snorkel a nearby reef with tropical fish", "Search for seahorses in the seagrass beds", "Guided village tour on Survivor Island, meet the local chief", "Seafood buffet lunch included", "Boat transport, snorkel gear and drinking water included"]
    },
    images: ["assets/images/Pansy island &1.jpg", "assets/images/Pansy island &.jpg","assets/images/Pansy island &2.jpg", "assets/images/Pansy island &3.jpg", "assets/images/Pansy island &4.jpg", "assets/images/Pansy island &5.jpg", "assets/images/Pansy island &6.jpg", "assets/images/Pansy island &7.jpg", "assets/images/Pansy island &8.jpg", "assets/images/Pansy island &9.jpg", "assets/images/Pansy island &10.jpg", "assets/images/Pansy island &11.jpg", "assets/images/Pansy island &13.jpg", "assets/images/Pansy island &12.jpg", "assets/images/Pansy island &14.jpg", "assets/images/Pansy island &15.jpg", "assets/images/Pansy island &16.jpg"]
  },
  {
    id: "catamara-pansy-poente",
    name: "Catamarã – Pansy Island",
    priceCash: 4000,
    priceCard: 4200,
    perPerson: true,
    duration: "4h",
    schedule: { pt: "10h00 às 14h00", en: "10:00 am to 2:00 pm" },
    pt: {
      desc: "Uma experiência inesquecível a bordo do nosso catamarã até Pansy Island: caminhada pelo banco de areia, recolha de conchas, snorkeling e um almoço delicioso servido a bordo no final do passeio.",
      highlights: ["Visita ao banco de areia de Pansy Island", "Recolha de conchas e fotos na ilha", "Snorkeling para observar a vida marinha", "Almoço a bordo incluído"]
    },
    en: {
      desc: "An unforgettable experience aboard our catamaran to Pansy Island: a walk on the sandbank, shell collecting, snorkelling, and a delicious lunch served on board at the end of the trip.",
      highlights: ["Visit to the Pansy Island sandbank", "Shell collecting and photos on the island", "Snorkelling to see marine life", "Lunch on board included"]
    },
    images: ["assets/images/Passeio catamaran.jpg", "assets/images/Passeio catamaran1.jpg", "assets/images/Passeio catamaran2.jpg", "assets/images/Passeio catamaran3.jpg"]
  },
  {
    id: "seahorse-snorkel",
    name: "Seahorse Snorkeling",
    priceCash: 3000,
    priceCard: 3200,
    perPerson: true,
    duration: "4-5h",
    pt: {
      desc: "Faça snorkeling com os nossos guias locais e descubra a vida marinha do estuário de Inhambane. O passeio leva-o aos bancos de erva marinha, casa do cavalo-marinho-girafa e viveiro de várias espécies únicas.",
      highlights: ["Snorkeling nos bancos de erva marinha", "Procura do cavalo-marinho-girafa", "Peixes tropicais e juvenis", "Passeio relaxante em Pansy Island", "Recolha de conchas pansy e fotos da paisagem"]
    },
    en: {
      desc: "Snorkel with our local guides and discover the marine life of the Inhambane estuary. The tour takes you to the seagrass meadows, home to the giraffe seahorse and a nursery for many unique species.",
      highlights: ["Snorkelling in the seagrass meadows", "Looking for the giraffe seahorse", "Tropical and juvenile fish", "Relaxing walk on Pansy Island", "Pansy shell hunting and scenic photos"]
    },
    images: ["assets/images/Seahorse snorkeling.jpg", "assets/images/Seahorse snorkeling1.jpg", "assets/images/Seahorse snorkeling2.jpg", "assets/images/Seahorse snorkeling4.jpg", "assets/images/Seahorse snorkeling5.jpg", "assets/images/Seahorse snorkeling6.jpg", "assets/images/Seahorse snorkeling7.jpg", "assets/images/Seahorse snorkeling8.jpg", "assets/images/Seahorse snorkeling9.jpg", "assets/images/Seahorse snorkeling10.jpg", "assets/images/Seahorse snorkeling11.jpg"]
  },
  {
    id: "mangrove-poente",
    name: "Sunset Mangrove Tour",
    priceCash: 3000,
    priceCard: 3200,
    perPerson: true,
    duration: "4h",
    schedule: { pt: "a partir das 15h00 (maré alta)", en: "from 3:00 pm (high tide)" },
    pt: {
      desc: "Navegue a bordo de um dhow tradicional pelos mangais da Baía de Inhambane numa tarde tranquila, terminando com um pôr-do-sol inesquecível, acompanhado por um guia local que conhece bem a região.",
      highlights: ["Passeio pelos mangais da Baía de Inhambane", "Pôr-do-sol num lugar incrível", "Observação de aves", "Navegação tranquila e relaxante", "Guia da comunidade local", "Ótimo para fotografias"]
    },
    en: {
      desc: "Sail a traditional dhow through the Inhambane Bay mangroves on a relaxed afternoon, ending with an unforgettable sunset, with a local guide who knows the area well.",
      highlights: ["Tour through the Inhambane Bay mangroves", "Sunset in an incredible spot", "Birdwatching", "Relaxed, calm sailing", "Local community guide", "Great for photos"]
    },
    images: ["assets/images/Sunset mangrove.jpg", "assets/images/Sunset mangrove1.jpg", "assets/images/Sunset mangrove2.jpg", "assets/images/Sunset mangrove3.jpg", "assets/images/Sunset mangrove4.jpg", "assets/images/Sunset mangrove5.jpg", "assets/images/Sunset mangrove6.jpg", "assets/images/Sunset mangrove7.jpg", "assets/images/Sunset mangrove8.jpg", "assets/images/Sunset mangrove9.jpg", "assets/images/Sunset mangrove10.jpg", "assets/images/Sunset mangrove.jpg11"]
  },
  {
    id: "kayak",
    name: "Kayaking Tour",
    priceCash: 2800,
    priceCard: 3000,
    perPerson: true,
    duration: "2h",
    pt: {
      desc: "Explore a beleza natural da Baía de Inhambane de forma tranquila, navegando de kayak pelos mangais durante a maré alta, acompanhado por um guia local que conhece bem a região.",
      highlights: ["Passeio pelos mangais da Baía de Inhambane", "Observação de aves", "Guia da comunidade local", "Melhor condição: maré alta"]
    },
    en: {
      desc: "Explore the natural beauty of Inhambane Bay at a gentle pace, kayaking through the mangroves at high tide with a local guide who knows the area well.",
      highlights: ["Tour through the Inhambane Bay mangroves", "Birdwatching", "Local community guide", "Best at high tide"]
    },
    images: ["assets/images/Kayaking.jpg", "assets/images/Kayaking1.jpg", "assets/images/Kayaking2.jpg", "assets/images/Kayaking3.jpg", "assets/images/Kayaking4.jpg"]
  },
  {
    id: "pansy-island",
    name: "Pansy Island",
    priceCash: 2800,
    priceCard: 3000,
    pt: {
      desc: "Navegue num tradicional barco à vela pelas águas da Barra até Pansy Island e viva uma experiência inesquecível em contacto com a natureza. Caminhe pela ilha, observe estrelas-do-mar, faça a sua coleção de conchas e nade várias vezes nas águas cristalinas da Barra.",
      highlights: ["Travessia em barco à vela tradicional", "Caminhada e exploração da ilha", "Observação de estrelas-do-mar (sazonal, conforme maré e época)", "Coleção de conchas, respeitando o ambiente", "Banho nas águas cristalinas da Barra"]
    },
    en: {
      desc: "Sail a traditional wooden boat across the waters of Barra to Pansy Island for an unforgettable experience in nature. Walk the island, spot starfish, collect shells, and swim in the crystal-clear waters of Barra.",
      highlights: ["Crossing by traditional sailing boat", "Island walk and exploration", "Starfish spotting (seasonal, tide-dependent)", "Shell collecting, respecting the environment", "Swimming in Barra's crystal-clear water"]
    },
    images: ["assets/images/Pansy island uma.jpg", "assets/images/Pansy island uma1.jpg", "assets/images/Pansy island uma1.jpg", "assets/images/Pansy island uma2.jpg", "assets/images/Pansy island uma3.jpg", "assets/images/Pansy island uma4.jpg", "assets/images/Pansy island uma5.jpg", "assets/images/Pansy island uma6.jpg"]
  },
  {
    id: "village-matapa",
    name: "Village Tour (Matapa Lesson)",
    priceCash: 2300,
    priceCard: 2500,
    pt: {
      desc: "Um passeio pela aldeia do Tofo para quem quer ir além das praias: caminhar pela comunidade, ouvir histórias e tradições locais, visitar uma família na sua residência e aprender a preparar a matapa, um dos pratos mais conhecidos da culinária moçambicana.",
      highlights: ["Caminhada pela comunidade com histórias e tradições locais", "Visita a uma residência e convívio com uma família local", "Participação na preparação da matapa com as mulheres da comunidade", "História, cultura, gastronomia e comunidade numa só experiência"]
    },
    en: {
      desc: "A walk through the village of Tofo for those who want to go beyond the beaches: walking through the community, hearing local stories and traditions, visiting a family at home, and learning to cook matapa, one of Mozambique's best-known dishes.",
      highlights: ["Community walk with local stories and traditions", "Home visit and time with a local family", "Hands-on matapa cooking with the community's women", "History, culture, food and community in one experience"]
    },
    images: ["assets/images/Village tour.jpg", "assets/images/Village tour1.jpg", "assets/images/Village tour2.jpg", "assets/images/Village tour3.jpg", "assets/images/Village tour4.jpg", "assets/images/Village tour5.jpg", "assets/images/Village tour6.jpg", "assets/images/Village tour7.jpg", "assets/images/Village tour8.jpg", "assets/images/Village tour9.jpg", "assets/images/Village tour10.jpg", "assets/images/Village tour11.jpg", "assets/images/Village tour12.jpg", ]
  },
  {
    id: "horse-ride",
    name: "Horse Ride",
    priceCash: 3500,
    priceCard: 3850,
    perPerson: true,
    duration: "1h30",
    pt: {
      desc: "Descubra as paisagens de Tofo a cavalo! Um passeio tranquilo, divertido e único, por trilhos naturais e ao longo da costa, com tempo para apreciar a praia, tirar fotos e partilhar um momento especial com os cavalos.",
      highlights: ["Passeio a cavalo pela natureza e ao longo da costa", "Vistas lindas da praia e das paisagens do Tofo", "Experiência guiada", "Contacto próximo com os cavalos", "Ótimas oportunidades para fotos", "Descontraído para principiantes e cavaleiros experientes"]
    },
    en: {
      desc: "Enjoy an unforgettable experience exploring the beautiful landscapes of Tofo on horseback! Follow natural trails and the coastline, enjoying the scenery, the beach and the tranquil atmosphere.",
      highlights: ["Horse ride through nature and along the coast", "Beautiful views of the beach and Tofo's landscapes", "Guided experience", "Close interaction with the horses", "Perfect photo opportunities", "Fun for beginners and experienced riders"]
    },
    images: ["assets/images/HORSE RIDE.jpg", "assets/images/HORSE RIDE1.jpg", "assets/images/HORSE RIDE2.jpg", "assets/images/HORSE RIDE3.jpg", "assets/images/HORSE RIDE4.jpg", "assets/images/HORSE RIDE5.jpg", "assets/images/HORSE RIDE6.jpg", "assets/images/HORSE RIDE7.jpg"]
  },
  {
    id: "quads",
    name: "Quad Bike Safari",
    priceCash: 3500,
    priceCard: 3500,
    perPerson: true,
    duration: "2h",
    pt: {
      desc: "Uma aventura de quad bike pelas ruas entre Tofo e Barra: passando pela comunidade local, pelas dunas ao longo do caminho e terminando na Praia da Barra, a desfrutar do areal e das paisagens de Moçambique.",
      highlights: ["Quad bike, combustível, chapéu e óculos de proteção incluídos", "Guia local", "Passagem pela comunidade", "Dunas e Praia da Barra"]
    },
    en: {
      desc: "A quad bike adventure along the roads between Tofo and Barra: passing through the local community, the dunes along the way, and ending at Barra Beach to enjoy the sand and Mozambique's natural scenery.",
      highlights: ["Quad bike, fuel, cap and goggles included", "Local guide", "Passing through the community", "Dunes and Barra Beach"]
    },
    images: ["assets/images/Quad bike safari.jpg", "assets/images/Quad bike safari1.jpg", "assets/images/Quad bike safari2.jpg", "assets/images/Quad bike safari3.jpg", "assets/images/Quad bike safari4.jpg"]
  },
  {
    id: "city-tour",
    name: "Inhambane City Tour",
    priceCash: 2700,
    priceCard: 2700,
    perPerson: true,
    duration: "4-5h",
    pt: {
      desc: "Caminhe pelas ruas de Inhambane e conheça lugares que guardam histórias importantes da comunidade — mais do que ouvir a história contada de longe, venha vê-la, tocá-la e vivê-la no próprio local.",
      highlights: ["Museu de Inhambane", "Mercado local", "Ruas históricas da cidade", "Lugares de importância histórica", "CFM – Caminhos de Ferro de Moçambique"]
    },
    en: {
      desc: "Walk through the streets of Inhambane and discover places that hold important stories from the community — more than hearing the story from afar, come see it, touch it and live it on the spot.",
      highlights: ["Inhambane Museum", "Local market", "Historic city streets", "Places of historical importance", "CFM – Mozambique Railways"]
    },
    images: ["assets/images/Inhambane city.jpg", "assets/images/Inhambane city1.jpg", "assets/images/Inhambane city2.jpg", "assets/images/Inhambane city3.jpg", "assets/images/Inhambane city4.jpg", "assets/images/Inhambane city5.jpg", "assets/images/Inhambane city6.jpg", "assets/images/Inhambane city7.jpg"]
  },
  {
    id: "ocean-safari",
    name: "Ocean Safari",
    priceCash: 4000,
    priceCard: 4400,
    perPerson: true,
    duration: "2h",
    schedule: { pt: "10h00 ou 13h00", en: "10:00 am or 1:00 pm" },
    videos: [
      { src: "assets/videos/safari-video-1.mp4", poster: "assets/images/safari-video-1-poster.jpg" },
      { src: "assets/videos/safari-video-2.mp4", poster: "assets/images/safari-video-2-poster.jpg" },
      { src: "assets/videos/safari-video-3.mp4", poster: "assets/images/safari-video-3-poster.jpg" },
      { src: "assets/videos/safari-video-4.mp4", poster: "assets/images/safari-video-4-poster.jpg" },
      { src: "assets/videos/safari-video-5.mp4", poster: "assets/images/safari-video-5-poster.jpg" },
      { src: "assets/videos/safari-video-6.mp4", poster: "assets/images/safari-video-6-poster.jpg" }
    ],
    pt: {
      desc: "Um passeio de 2 horas pelo Oceano Índico à descoberta da incrível vida marinha do Tofo: golfinhos, tubarões-baleia (sazonal) e mantas (sazonal).",
      highlights: ["Observação de golfinhos", "Nado/snorkeling com tubarão-baleia (sazonal)", "Encontro com mantas (sazonal)", "Passeio de barco", "Guia profissional", "Equipamento de snorkel incluído", "Água potável e briefing de segurança"]
    },
    en: {
      desc: "An exciting 2-hour trip across the Indian Ocean to discover Tofo's incredible marine life: dolphins, whale sharks (seasonal) and manta rays (seasonal).",
      highlights: ["Watch dolphins in their natural habitat", "Swim/snorkel with whale sharks (seasonal)", "Encounter majestic manta rays (seasonal)", "Boat trip", "Professional guide", "Snorkelling equipment included", "Drinking water and safety briefing"]
    },
    images: ["assets/images/Ocean safari.jpg", "assets/images/Ocean safari1.jpg", "assets/images/Ocean safari2.jpg", "assets/images/Ocean safari3.jpg", "assets/images/Ocean safari4.jpg", "assets/images/Ocean safari5.jpg", "assets/images/Ocean safari6.jpg", "assets/images/Ocean safari7.jpg"]
  },
  {
    id: "whale-watching",
    name: "Whale Watching",
    priceCash: 9000,
    priceCard: 9200,
    duration: "3-4h",
    videos: [{ src: "assets/videos/baleia-video.mp4", poster: "assets/images/baleia-video-poster.jpg" }],
    pt: {
      desc: "Um encontro com os gigantes do oceano que ficará para sempre na sua memória. Vamos para o alto-mar em busca das majestosas baleias, para observar o seu comportamento e, com sorte, vê-las bem de perto — sempre a respeitar a natureza e as condições do mar.",
      highlights: ["3 a 4 horas de aventura no alto-mar", "Observação de baleias e informações sobre o seu comportamento", "Possibilidade de nadar com as baleias, se as condições permitirem", "Guias experientes, sempre a respeitar a natureza"]
    },
    en: {
      desc: "A meeting with the giants of the ocean that will stay with you forever. We head offshore in search of majestic whales, to observe their behaviour and, with luck, see them up close — always respecting nature and sea conditions.",
      highlights: ["3 to 4 hours of offshore adventure", "Whale watching with insights into their behaviour", "Chance to swim with the whales, conditions permitting", "Experienced guides, respectful of nature"]
    },
    images: ["assets/images/baleia-salto-barco.jpg", "assets/images/baleia-cauda-poente.jpg", "assets/images/baleia-salto.jpg", "assets/images/baleia-aerea.jpg"]
  }
];

// ---------------------------------------------------------------
// Lógica da página
// ---------------------------------------------------------------
let LANG = "pt";
const fmt = n => n.toLocaleString("pt-PT") + " MT";
const t = () => UI[LANG];
const waLink = pkg => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  t().waMessage(pkg.name, fmt(pkg.priceCash), fmt(pkg.priceCard))
)}`;

const tabsEl = document.getElementById("tabs");
const footerLinksEl = document.getElementById("footer-package-links");
const heroImgA = document.getElementById("hero-img-a");
const heroImgB = document.getElementById("hero-img-b");
let heroShowingA = true;

let activeId = PACKAGES[0].id;

function render() {
  const pkg = PACKAGES.find(p => p.id === activeId);
  const c = pkg[LANG];
  const u = t();

  const nextImg = heroShowingA ? heroImgB : heroImgA;
  const prevImg = heroShowingA ? heroImgA : heroImgB;
  nextImg.src = pkg.images[0];
  nextImg.alt = pkg.name;
  nextImg.classList.add("is-active");
  prevImg.classList.remove("is-active");
  heroShowingA = !heroShowingA;

  document.getElementById("hero-eyebrow").textContent = u.heroEyebrow;
  document.getElementById("hero-title").textContent = pkg.name;
  document.getElementById("hero-price").innerHTML =
    `<strong>${fmt(pkg.priceCash)}</strong> ${u.cash.toLowerCase()} &nbsp;·&nbsp; <strong>${fmt(pkg.priceCard)}</strong> ${u.card.toLowerCase()}` +
    (pkg.perPerson ? ` ${u.perPerson}` : "") +
    (pkg.duration ? ` &nbsp;·&nbsp; ${pkg.duration}` : "");
  document.getElementById("header-reserve").href = waLink(pkg);
  document.getElementById("header-reserve-label").textContent = u.reserveWA;
  document.getElementById("tabs-title").textContent = u.tabsTitle;

  document.getElementById("detail-name").textContent = pkg.name;
  document.getElementById("detail-price").innerHTML =
    `<span>${u.cash}: <b>${fmt(pkg.priceCash)}</b></span><span>${u.card}: <b>${fmt(pkg.priceCard)}</b></span>` +
    (pkg.perPerson ? `<span>${u.perPerson}</span>` : "") +
    (pkg.duration ? `<span>${u.duration}: <b>${pkg.duration}</b></span>` : "") +
    (pkg.schedule ? `<span>${u.schedule}: <b>${pkg.schedule[LANG]}</b></span>` : "");
  document.getElementById("detail-desc").textContent = c.desc;
  document.getElementById("detail-reserve").href = waLink(pkg);
  document.getElementById("detail-reserve-label").textContent = u.reservePkg;
  document.getElementById("detail-call-label").textContent = `${u.call}: +258 84 522 4658`;

  const highlightsEl = document.getElementById("detail-highlights");
  highlightsEl.innerHTML = "";
  c.highlights.forEach(h => {
    const li = document.createElement("li");
    li.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>${h}</span>`;
    highlightsEl.appendChild(li);
  });

  const galleryEl = document.getElementById("gallery");
  galleryEl.innerHTML = "";
  pkg.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = pkg.name;
    img.loading = "lazy";
    img.dataset.filename = src.split("/").pop();
    img.addEventListener("click", () => openImageModal(pkg.images, pkg.images.indexOf(src), pkg.name));
    galleryEl.appendChild(img);
  });

  (pkg.videos || []).forEach(v => {
    const tile = document.createElement("div");
    tile.className = "gallery-video-tile";
    tile.style.backgroundImage = `url('${v.poster}')`;
    tile.innerHTML = `<svg class="play-icon" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="11" fill="rgba(28,26,21,0.55)"/><path d="M10 8l6 4-6 4V8z"/></svg>`;
    tile.addEventListener("click", () => openVideoModal(v.src));
    galleryEl.appendChild(tile);
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.id === activeId);
  });

  document.getElementById("footer-desc").textContent = u.footerDesc;
  document.getElementById("footer-contact-title").textContent = u.contact;
  document.getElementById("footer-packages-title").textContent = u.packagesTitle;
  document.getElementById("footer-calls-label").textContent = `${u.calls}: +258 86 522 4659`;
  document.getElementById("footer-location-label").textContent = u.viewLocation;
  document.getElementById("footer-open-daily").textContent = u.openDaily;

  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("is-active", b.dataset.lang === LANG));
}

function selectPackage(id) {
  activeId = id;
  render();
  document.getElementById("hero").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setLang(lang) {
  LANG = lang;
  render();
}

// ---------------------------------------------------------------
// Modal de vídeo
// ---------------------------------------------------------------
const videoModal = document.getElementById("video-modal");
const videoModalPlayer = document.getElementById("video-modal-player");

function openVideoModal(src) {
  videoModalPlayer.src = src;
  videoModal.classList.add("is-open");
  videoModalPlayer.play().catch(() => {});
}

function closeVideoModal() {
  videoModal.classList.remove("is-open");
  videoModalPlayer.pause();
  videoModalPlayer.currentTime = 0;
  videoModalPlayer.src = "";
}

document.getElementById("video-modal-close").addEventListener("click", closeVideoModal);
videoModal.addEventListener("click", e => { if (e.target === videoModal) closeVideoModal(); });

// ---------------------------------------------------------------
// Modal de imagem (lightbox)
// ---------------------------------------------------------------
const imageModal = document.getElementById("image-modal");
const imageModalImg = document.getElementById("image-modal-img");
const imageModalPrev = document.getElementById("image-modal-prev");
const imageModalNext = document.getElementById("image-modal-next");
const imageModalCounter = document.getElementById("image-modal-counter");

let modalImages = [];
let modalIndex = 0;
let modalAlt = "";

function showModalImage() {
  imageModalImg.src = modalImages[modalIndex];
  imageModalImg.alt = modalAlt;
  const multi = modalImages.length > 1;
  imageModalPrev.classList.toggle("is-hidden", !multi);
  imageModalNext.classList.toggle("is-hidden", !multi);
  imageModalCounter.textContent = multi ? `${modalIndex + 1} / ${modalImages.length}` : "";
}

function openImageModal(images, index, alt) {
  modalImages = images;
  modalIndex = index >= 0 ? index : 0;
  modalAlt = alt || "";
  showModalImage();
  imageModal.classList.add("is-open");
}

function closeImageModal() {
  imageModal.classList.remove("is-open");
}

function showNextImage() {
  modalIndex = (modalIndex + 1) % modalImages.length;
  showModalImage();
}

function showPrevImage() {
  modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
  showModalImage();
}

document.getElementById("image-modal-close").addEventListener("click", closeImageModal);
imageModal.addEventListener("click", e => { if (e.target === imageModal) closeImageModal(); });
imageModalPrev.addEventListener("click", showPrevImage);
imageModalNext.addEventListener("click", showNextImage);

document.addEventListener("keydown", e => {
  if (!imageModal.classList.contains("is-open")) {
    if (e.key === "Escape") closeVideoModal();
    return;
  }
  if (e.key === "Escape") closeImageModal();
  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
});

// Deslizar (swipe) no telemóvel
let touchStartX = null;
imageModal.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].clientX; });
imageModal.addEventListener("touchend", e => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) { dx < 0 ? showNextImage() : showPrevImage(); }
  touchStartX = null;
});

PACKAGES.forEach(pkg => {
  const btn = document.createElement("button");
  btn.className = "tab-btn";
  btn.type = "button";
  btn.dataset.id = pkg.id;
  btn.innerHTML = `<span class="p-name">${pkg.name}</span><span class="p-price">${fmt(pkg.priceCash)}</span>`;
  btn.addEventListener("click", () => selectPackage(pkg.id));
  tabsEl.appendChild(btn);
});

PACKAGES.forEach(pkg => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#topo";
  a.textContent = pkg.name;
  a.addEventListener("click", e => { e.preventDefault(); selectPackage(pkg.id); });
  li.appendChild(a);
  footerLinksEl.appendChild(li);
});

document.querySelectorAll(".lang-btn").forEach(b => {
  b.addEventListener("click", () => setLang(b.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();

render();
// Mostrar o nome do ficheiro ao passar o rato sobre uma imagem da galeria
if (SHOW_IMAGE_NAMES) {
  const nameTag = document.createElement("div");
  nameTag.className = "img-name-tag";
  document.body.appendChild(nameTag);

  const galleryRoot = document.getElementById("gallery");
  galleryRoot.addEventListener("mouseover", e => {
    const name = e.target.dataset && e.target.dataset.filename;
    if (!name) return;
    nameTag.textContent = name;
    nameTag.style.display = "block";
  });
  galleryRoot.addEventListener("mousemove", e => {
    nameTag.style.left = (e.clientX + 14) + "px";
    nameTag.style.top = (e.clientY + 14) + "px";
  });
  galleryRoot.addEventListener("mouseout", e => {
    if (e.target.dataset && e.target.dataset.filename) nameTag.style.display = "none";
  });
}
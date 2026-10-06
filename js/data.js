/**
 * data.js — Mega Fresh Carolina
 * Global data store: store info, categories, and curated featured deals.
 * Products page uses specials.json for the full specials list.
 */

window.storeInfo = {
  name: "Mega Fresh Carolina",
  tagline: "El Mejor Supermercado",
  address: "24 Calle Yunquecito, Carolina, PR 00987",
  phone: "+1 787-257-8050",
  email: "elmejorsupermercado1@gmail.com",
  hours: "Lun–Dom: 6:00 am – 9:00 pm"
};

window.categories = [
  {
    id: "congelados",
    name: "Sodas, Jugos y Congelados",
    description: "Selección completa de bebidas frías y productos congelados.",
    gif: "img/congelados.gif",
    filterKey: "Lácteos y Congelados"
  },
  {
    id: "neveras",
    name: "Lácteos y Proteínas",
    description: "Leche, quesos, proteínas y más. Frescos del día, siempre.",
    gif: "img/neveras.gif",
    filterKey: "Carnes Frescas"
  },
  {
    id: "limpieza",
    name: "Artículos del Hogar",
    description: "Limpieza del hogar y variedad de productos esenciales.",
    gif: "img/limpieza.gif",
    filterKey: "Hogar, Salud y Belleza"
  },
  {
    id: "hygiene",
    name: "Higiene Personal",
    description: "Múltiples selecciones de productos de higiene personal.",
    gif: "img/hygiene.gif",
    filterKey: "Hogar, Salud y Belleza"
  },
  {
    id: "grains",
    name: "Cereales, Galletas y Jugos",
    description: "Amplia variedad de cereales, galletas y jugos refrigerados.",
    gif: "img/grains.gif",
    filterKey: "Gustitos y Ahorros"
  },
  {
    id: "auto",
    name: "Mantenimiento Automotriz",
    description: "Limpieza de autos con todo tipo de aceite lubricante.",
    gif: "img/auto.gif",
    filterKey: "Hogar, Salud y Belleza"
  }
];

/* Featured deals shown on the home page and TV mode: the cover of the
   current Mega Fresh shopper. The full list lives in js/specials.json. */
window.deals = [
  {
    id: 1,
    name: "Costillas de Cerdo",
    detail: "Country Style, sin hueso, frescas · De Estados Unidos",
    category: "Especiales de Portada",
    price: "$1.69 lb.",
    reg: "$3.19 lb.",
    badge: "OFERTA",
    cold: false,
    img: "img/shopper/sp-001.jpg"
  },
  {
    id: 2,
    name: "Agrosuper Pechuga de Pollo",
    detail: "Sin piel y hueso · 8 lb",
    category: "Especiales de Portada",
    price: "$19.99",
    reg: "$31.99",
    badge: "FRÍO",
    cold: true,
    img: "img/shopper/sp-002.jpg"
  },
  {
    id: 3,
    name: "Goya Habichuelas en Agua y Sal",
    detail: "Coloradas, rosadas, pintas, negras, blancas o garbanzos · 15.5 oz",
    category: "Especiales de Portada",
    price: ".89¢",
    reg: "$1.29",
    badge: "OFERTA",
    cold: false,
    img: "img/shopper/sp-004.jpg"
  },
  {
    id: 4,
    name: "Pepsi o 7up Refresco",
    detail: "1.25 lt",
    category: "Especiales de Portada",
    price: ".79¢",
    reg: "$1.39",
    badge: "OFERTA",
    cold: false,
    img: "img/shopper/sp-006.jpg"
  },
  {
    id: 5,
    name: "Welch's Uvas Verdes",
    detail: "Sin semillas · 2 lb",
    category: "Especiales de Portada",
    price: "$5.49",
    reg: "$8.29",
    badge: "OFERTA",
    cold: false,
    img: "img/shopper/sp-010.jpg"
  },
  {
    id: 6,
    name: "Oscar Mayer Deli Fresh Cold Cuts",
    detail: "Variedad · hasta 9 oz",
    category: "Especiales de Portada",
    price: "$4.99",
    reg: "$7.99",
    badge: "OFERTA",
    cold: false,
    img: "img/shopper/sp-011.jpg"
  },
  {
    id: 7,
    name: "La Buena Pesca Camarón Crudo",
    detail: "EZ Peel 31/40 · 12 oz",
    category: "Especiales de Portada",
    price: "$3.99",
    reg: "$6.49",
    badge: "FRÍO",
    cold: true,
    img: "img/shopper/sp-003.jpg"
  },
  {
    id: 8,
    name: "Tomate Tubo",
    detail: "De Estados Unidos · 1 ct",
    category: "Especiales de Portada",
    price: "4 x $5.00",
    reg: "$1.79 c/u",
    badge: "OFERTA",
    cold: false,
    img: "img/shopper/sp-009.jpg"
  }
];

let data = [
  {
    "id": 10,
    "title": "Placa Madre ASUS Prime Z590",
    "detail": "Placa madre compatible con procesadores Intel de última generación.",
    "img": "https://dlcdnwebimgs.asus.com/gain/b6bab2c0-3b46-4808-9794-48decff9e997/w328",
    "price": 65,
    "stock": 15,
    "category": "Hardware y Componentes"
  },
  {
    "id": 11,
    "title": "Funda Protectora para Tablet",
    "detail": "Funda de silicona resistente para tabletas de hasta 10 pulgadas.",
    "img": "https://www.innovartech.com.ar/wp-content/uploads/2021/11/fundatablet_kenwald-1.png",
    "price": 75,
    "stock": 11,
    "category": "Accesorios Generales"
  },
  {
    "id": 12,
    "title": "Cable HDMI Ultra HD 2.1",
    "detail": "Cable compatible con resoluciones 8K y transmisión de alta velocidad.",
    "img": "https://www.omega-store.co/wp-content/uploads/2024/10/KMHM0498K.png.webp",
    "price": 45,
    "stock": 20,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 13,
    "title": "Aire Acondicionado LG Split",
    "detail": "Sistema de aire acondicionado con bajo consumo energético.",
    "img": "https://www.lg.com/cac/images/aire-acondicionado-residencial/MD05818833/gallery/large01.jpg",
    "price": 95,
    "stock": 10,
    "category": "Electro Hogar"
  },
  {
    "id": 14,
    "title": "Tarjeta Gráfica RTX 3080",
    "detail": "Tarjeta gráfica para gaming con soporte Ray Tracing y 12GB de VRAM.",
    "img": "https://www.gigabyte.com/FileUpload/Global/WebPage/824/img/1.png",
    "price": 125,
    "stock": 3,
    "category": "Hardware y Componentes"
  },
  {
    "id": 15,
    "title": "Lente Canon EF 50mm f/1.8",
    "detail": "Lente con apertura rápida ideal para retratos y poca luz.",
    "img": "https://static.wixstatic.com/media/1a92e1_6b0e389d4fd04bd0a94ecc8ed7bb1e5d~mv2.png/v1/fill/w_500,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a92e1_6b0e389d4fd04bd0a94ecc8ed7bb1e5d~mv2.png",
    "price": 100,
    "stock": 5,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 16,
    "title": "Cargador Portátil PowerBank 20,000mAh",
    "detail": "Batería externa con múltiples puertos para cargar tus dispositivos.",
    "img": "https://dcdn.mitiendanube.com/stores/004/886/199/products/diseno-sin-titulo-72-1695f4e7ee75efc20f17154428028000-1024-1024.png",
    "price": 55,
    "stock": 18,
    "category": "Accesorios Generales"
  },
  {
    "id": 17,
    "title": "Switch Ethernet TP-Link TL-SG105",
    "detail": "Switch de 5 puertos Gigabit para redes domésticas o pequeñas oficinas.",
    "img": "https://soundcity.com.ar/wp-content/uploads/2020/08/TL-SG105-1-510x383.png",
    "price": 115,
    "stock": 2,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 18,
    "title": "Licuadora Oster Pro",
    "detail": "Licuadora de alto rendimiento con múltiples velocidades y funciones.",
    "img": "https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/b/0/b03982.jpg",
    "price": 70,
    "stock": 6,
    "category": "Electro Hogar"
  },
  {
    "id": 19,
    "title": "Audífonos Bluetooth",
    "detail": "Audífonos inalámbricos con excelente calidad de sonido y batería de larga duración.",
    "img": "https://prophonechile.cl/wp-content/uploads/2020/07/negro1.png",
    "price": 75,
    "stock": 11,
    "category": "Accesorios Generales"
  },
  {
    "id": 20,
    "title": "Cable HDMI 4K",
    "detail": "Cable de alta velocidad compatible con resoluciones 4K para transmisión de video nítido.",
    "img": "https://png.pngtree.com/png-vector/20231006/ourmid/pngtree-white-background-showcasing-a-robust-and-broad-hdmi-cable-in-png-image_10079587.png",
    "price": 45,
    "stock": 20,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 21,
    "title": "Plancha a Vapor Compacta",
    "detail": "Plancha portátil con función de vapor para un planchado rápido y eficiente.",
    "img": "https://http2.mlstatic.com/D_NQ_NP_965834-MLU69241468137_052023-O.webp",
    "price": 95,
    "stock": 10,
    "category": "Electro Hogar"
  },
  {
    "id": 22,
    "title": "Procesador Intel i7",
    "detail": "Procesador de alto rendimiento ideal para juegos y edición de video.",
    "img": "https://w7.pngwing.com/pngs/917/937/png-transparent-laptop-intel-core-i5-intel-core-i7-processor-blue-electronics-text.png",
    "price": 125,
    "stock": 3,
    "category": "Hardware y Componentes"
  },
  {
    "id": 23,
    "title": "Cámara Reflex Canon",
    "detail": "Cámara digital con lente intercambiable para fotógrafos profesionales.",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81WTNK-UXEL._AC_SL1500_.jpg",
    "price": 100,
    "stock": 5,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 24,
    "title": "Teclado Mecánico RGB",
    "detail": "Teclado con retroiluminación personalizable y switches mecánicos para gamers.",
    "img": "https://static.wixstatic.com/media/71a6c2_478704e54ca04d558a47bbb3e3854adc~mv2.png/v1/fill/w_288,h_288,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/03.png",
    "price": 55,
    "stock": 18,
    "category": "Accesorios Generales"
  },
  {
    "id": 25,
    "title": "Router de Alta Velocidad",
    "detail": "Router inalámbrico con tecnología avanzada para conexión estable y rápida.",
    "img": "https://i.blogs.es/1a7f06/d-link-dwr-953v2/1366_2000.png",
    "price": 115,
    "stock": 2,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 26,
    "title": "Horno Microondas Digital",
    "detail": "Microondas con múltiples funciones y pantalla táctil intuitiva.",
    "img": "https://images.fravega.com/f300/a3500b86977929efad3f9d059f73c435.jpg.webp",
    "price": 70,
    "stock": 6,
    "category": "Electro Hogar"
  },
  {
    "id": 27,
    "title": "Tarjeta Gráfica RTX 3060",
    "detail": "Tarjeta gráfica de última generación para juegos y diseño gráfico.",
    "img": "https://m.media-amazon.com/images/I/71tduSp8ooL._AC_SX679_.jpg",
    "price": 80,
    "stock": 8,
    "category": "Hardware y Componentes"
  },
  {
    "id": 28,
    "title": "Trípode Profesional",
    "detail": "Trípode ajustable de aluminio con cabezal giratorio para cámaras.",
    "img": "https://i0.wp.com/m.media-amazon.com/images/I/51HqeLaz2IL.jpg?w=880&ssl=1",
    "price": 90,
    "stock": 10,
    "category": "Cámaras y Fotografía"
  }
];

const items = [
  {
    id: 1,
    name: "Ryzen 3 2400g",
    img: "https://i.pinimg.com/474x/32/29/06/322906dfbf22584a17cf9c0db65d4004.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: "100.000",
    Stock: "5",
    Category: "Remeras-Unisex",
  },
  {
    id: 2,
    name: "Ryzen 1X 3200X",
    img: "https://cdn.shopify.com/s/files/1/1000/2058/products/fronts_0000_Nemesis-purple-jersey.png?v=1574109654",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "90.000",
    Stock: "5",
    Category: "Remeras-Esport",
  },
  {
    id: 3,
    name: "Ryzen5V 3300G",
    img: "https://cdn.shopify.com/s/files/1/1000/2058/products/Velosoback1.png?v=1537856322",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "120.000",
    Stock: "5",
    Category: "Remeras-Esport",
  },
  {
    id: 4,
    name: "Ryzen7D 4800T",
    img: "https://www.pngkey.com/png/full/971-9716850_scythe-gaming-jersey-sports-jersey.png",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "150.000",
    Stock: "5",
    Category: "Remeras-Esport",
  },
  {
    id: 5,
    name: "Ryzen7N 5000U",
    img: "https://i.pinimg.com/originals/29/9a/25/299a2535fca506579db54809875f2a8d.png",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "180.000",
    Stock: "disponible",
    Category: "Remeras-Unisex",
  },
  {
    id: 6,
    name: "RyzenXF XEON",
    img: "https://i.pinimg.com/originals/99/7f/23/997f23be092346a9a4c30c1ed2623e0c.png",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "420.000",
    Stock: "disponible",
    Category: "Remeras-Unisex",
  },
  {
    id: 7,
    name: "Ryzen9 VIDUA",
    img: "https://i.pinimg.com/originals/4a/e8/10/4ae810861470df7805146240ad1f546d.png",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "570.000",
    Stock: "disponible",
    Category: "Remeras-Esport",
  },
  {
    id: 8,
    name: "Ryzen0f VIDUA",
    img: "https://dbnfutbol.com.ar/wp-content/uploads/2019/02/946-1.jpg",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "820.000",
    Stock: "disponible",
    Category: "Kits-Complex",
  },
  {
    id: 9,
    name: "Ryzen7H VIDUA",
    img: "https://http2.mlstatic.com/D_NQ_NP_889681-MLV32121205468_092019-O.jpg",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "620.000",
    Stock: "disponible",
    Category: "Remeras-Esport",
  },
  {
    id: 10,
    name: "RyzenJ6 VIDUA",
    img: "https://www.pngitem.com/pimgs/m/337-3377540_gaming-clan-t-shirts-without-logo-hd-png.png",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "950.000",
    Stock: "disponible",
    Category: "Remeras-Unisex",
  },
  {
    id: 10,
    name: "RyzenJ6 VIDUA",
    img: "https://www.pngitem.com/pimgs/m/337-3377540_gaming-clan-t-shirts-without-logo-hd-png.png",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "950.000",
    Stock: "disponible",
    Category: "Kits-Complex",
  },
  {
    id: 10,
    name: "RyzenJ6 VIDUA",
    img: "https://www.pngitem.com/pimgs/m/337-3377540_gaming-clan-t-shirts-without-logo-hd-png.png",
    description: "Procesador gamer AMD Ryzen 5 3600X 100-10000",
    price: "950.000",
    Stock: "disponible",
    Category: "Kits-Complex",
  },
];

export const getFetch = new Promise((resolve) => {
  //aca tareas asincronicas

  setTimeout(() => {
    resolve(items);
  }, 2000);
});

const items = [
    { id: 1,
      name:'Ryzen 3 2400g',
      img:"https://magnusmisiones.com/wp-content/uploads/2020/05/pc-gamer.png",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 80.000,
      Stock:'disponible'
    },
    { id: 2,
      name:'Ryzen 5 3200X',
      img:"https://signetic.com.uy/wp-content/uploads/2020/09/Pc-Ryzen-3400g.jpg",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 90.000,
      Stock:'disponible'
    },
    { id: 3,
      name:'Ryzen5 3300G',
      img:"https://nanotroniconline.com/wp-content/uploads/2020/08/5-3400g-spec-05.png",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 120.000,
      Stock:'disponible'
    },
    { id: 4,
      name:'Ryzen7 4800T',
      img:"https://www.xt-pc.com.ar/img/productos/Pics_Prod/PGA088.jpg",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 150.000,
      Stock:'disponible'
    },
    { id: 5,
      name:'Ryzen7 5000U',
      img:"https://www.xt-pc.com.ar/img/productos/Pics_Prod/PGA088.jpg",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 180.000,
      Stock:'disponible'
    },
    { id: 6,
      nombre:'Ryzen9 XEON',
      img:"https://magnusmisiones.com/wp-content/uploads/2020/05/pc-gamer.png",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 200.000,
      Stock:'disponible'
    },
    { id: 7,
      nombre:'Ryzen9 VIDUA',
      img:"https://www.xt-pc.com.ar/img/productos/Pics_Prod/PGA088.jpg",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 220.000,
      Stock:'disponible'
  },
      { id: 8,
      nombre:'Ryzen9 VIDUA',
      img:"https://www.xt-pc.com.ar/img/productos/Pics_Prod/PGA088.jpg",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 220.000,
      Stock:'disponible'
    },
    { id: 9,
      nombre:'Ryzen9 VIDUA',
      img:"https://www.xt-pc.com.ar/img/productos/Pics_Prod/PGA088.jpg",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 220.000,
      Stock:'disponible'
    },
    { id: 10,
      nombre:'Ryzen9 VIDUA',
      img:"https://www.xt-pc.com.ar/img/productos/Pics_Prod/PGA088.jpg",
      description:'Procesador gamer AMD Ryzen 5 3600X 100-10000',
      price: 220.000,
      Stock:'disponible'
    },
];
   

export const getFetch = new Promise((resolve)=>{
    //aca tareas asincronicas
   
        setTimeout(()=>{
            resolve(items)
        }, 2000)
 })
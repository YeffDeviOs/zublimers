import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemDetail from "../itemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
// import { getFetch } from '../Array/Dataprueba'
import { getFirestore } from '../../Servicios/getFirebase';


// const items = [
//   {
//     id: 1,
//     name: "Ryzen 3 2400g",
//     img: "https://i.pinimg.com/474x/32/29/06/322906dfbf22584a17cf9c0db65d4004.jpg",
//     img2: "https://static.dafiti.com.ar/p/everlast-0575-351435-1-product.jpg",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     price: "100.000",
//     Stock: "5",
//     Category: "Remeras-Unisex",
//   }
// ];

// const getFetch = new Promise((resolve) => {
//   //aca tareas asincronicas

//   setTimeout(() => {
//     resolve(items);
//   }, 2000);
// });
const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { idDetalle } = useParams()





      useEffect(() => {


        const dbQuery = getFirestore()

        dbQuery.collection('items').doc('idDetalle').get()
        .then(resp => {
            setItems( { id: resp.id, ...resp.data() } )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   
        
    }, [idDetalle])


  // useEffect(() => {
  //   setTimeout(() => {
  //           getFetch
  //           .then(resp =>  setItems(resp))
  //           .catch(err => console.log(err)) 
  //           .finally(()=> setLoading(false))            
  //           }, 2000);
  // },
  // [idDetalle]);

  // console.log(idDetalle);

  return (
    <>
      <h3 className="mt-2">[Quick View]</h3>
      {loading ? (
        <Spinner animation="border" variant="secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail items={items} />
      )}
    </>
  );
};

export default ItemDetailContainer;

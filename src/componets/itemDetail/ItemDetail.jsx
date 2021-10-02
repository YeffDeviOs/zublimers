import React from "react";
import ItemCounter from "../ItemCount/ItemCounter";
import Variantes from "./Variantes";
import './ItemDetail.css'
import {useCartContext} from '../Context/CartContext'


const ItemDetail = ({ item }) => {

    const  {agregarItem,} = useCartContext()

    console.log(agregarItem)
    
    const onAdd=(cant)=>{
        // console.log(cant) 
        agregarItem( {item: item, quantity: cant} )
        //setCambiarBoton(false)      
    }  

  
  return (
    <>
        <div className="container">
          <div key={item.id} className="wrapper" >
            <div className="imgcontainer">
              <img className=" imgproduct" src={item.img} alt="product" />
              <Variantes/>

            </div>
          <div className="infocontainer">
            <h2 className="titleproduct ">{item.name}</h2>
            <h3 className="subtitleproduct ">${item.price}</h3>
            <p className="textproduct">
                {item.description}

            </p>
              <h5 className="textcategory text-danger">Category: {item.Category}</h5>
            <div className="counterproduct">
              <ItemCounter initial={1} stock={5} onAdd={onAdd}/>
              </div>
            </div>
          </div>
        </div>
        

    </>
  );
};

export default ItemDetail;

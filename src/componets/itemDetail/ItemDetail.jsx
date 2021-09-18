import React from "react";
// import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import ItemCounter from "../ItemCount/ItemCounter";
import './ItemDetail.css'


const ItemDetail = ({ items }) => {
  return (
    <>
      {items.map((item) => (


        <div className="container">
          <div key={item.id} className="wrapper" >
            <div className="imgcontainer">
              <img className=" imgproduct" src={item.img} alt="product" />
            </div>
          <div className="infocontainer">
            <h2 className="titleproduct ">{item.name}</h2>
            <h3 className="subtitleproduct ">${item.price}</h3>
            <p className="textproduct">
              {item.description}
            </p>
              <h5 className="textcategory text-danger">Category: {item.Category}</h5>
            <div className="counterproduct">
              <ItemCounter />
              </div>
            {/* <Link to={`/detalle/${item.id}`}> */}
            <Button variant="btn btn-outline-warning">Add to Cart</Button>
            {/* </Link> */}
            </div>
          </div>
        </div>
        

      ))}
    </>
  );
};

export default ItemDetail;

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../ItemCount/ItemCounter.css';


function ItemCounter({stock, initial, onAdd}) {
  const [number, setNumber] = useState(initial);
  const [cambiarBoton, setCambiarBoton] = useState(true)



  const handleUp = () => {
    if (number < stock) {
     setNumber(number + 1 )
   };

  };

  const handleDown = () => {
    if (number > 1) {
     setNumber(number - 1 )
   };

  };

  const agregarCarrito=()=>{
    onAdd(number)
    setCambiarBoton(false)
  }


  return (
    <>
    <div className="Counter">
      <btn className="btn btn-outline-dark mx-3" attached="left" onClick={handleDown}>-</btn>
      {/* <a className="mx-3" href="/"><Button secondary>Clear</Button></a> */}
      <div><h4>{number}</h4></div>
      <btn className="btn btn-outline-dark mx-3" attached="right" onClick={handleUp}>+</btn>
      </div>

      <div>
          {cambiarBoton ?
                <Button className="" onClick={agregarCarrito} >Agregar Al carrito</Button>                
            : 
            <div>
                <Link to="/Cart" >
                    <Button variant="btn btn-outline-danger" className="btn btn-outline-dark mx-3" >Terminar Compra</Button>            
                </Link>
                <Link to="/" >
                    <Button className="btn btn-outline-dark">Seguir Comprando</Button>      
                </Link>
            </div>
            
          }
        </div>
      </>
  );
}

export default ItemCounter;

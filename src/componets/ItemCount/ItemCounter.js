import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link , Router } from 'react-router-dom';
// import '../css/ItemCount.css';


function ItemCounter () {
  const [number, setNumber] = useState(0);
  // const [stock, setStock] = useState(Number(0));


  const handleUp = () => {
    setNumber((number + 1));
    // setStock(stock - 1)
  };

  const handleDown = () => {
    setNumber(Math.max(number - 1, 0));
    // setStock(stock + 1)
  };

  return (
    <div className="Counter">
      <h4>{number}</h4>
      <Button className="btn-danger" onClick={handleDown}>-</Button>
      <Button className="btn-danger" onClick={handleUp}>+</Button>
				<Router>
				<Link to="/"><Button secondary>Añadir</Button></Link>
				</Router>

    </div>
  );
}

export default ItemCounter

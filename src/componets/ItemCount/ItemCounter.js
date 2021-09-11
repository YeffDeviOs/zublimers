import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import { Link , Router } from 'react-router-dom';
import '../ItemCount/ItemCounter.css';


function ItemCounter( stockinit) {
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
    <div className="Counter d-flex">
      <btn className="btn btn-outline-dark sm mx-2" attached="left" onClick={handleDown}>-</btn>
      {/* <a className="mx-3" href="/"><Button secondary>Clear</Button></a> */}
      <div><h4>{number}</h4></div>
      <btn className="btn btn-outline-dark sm mx-2" attached="right" onClick={handleUp}>+</btn>

    </div>
  );
}

export default ItemCounter;

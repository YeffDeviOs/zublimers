import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext"
import { Button } from "react-bootstrap";




const CartWidget = () => {

      const { iconCart } = useCartContext()

  return (
    <div>
      <Link className="Iconlogo px-5" to="../Cart">
        <img src="./cart-icon.png" width="60" alt="cart" />
        <spam></spam>
        <Button variant="btn btn-outline-primary">{iconCart()}</Button>

      </Link>
    </div>
  );
};

export default CartWidget;

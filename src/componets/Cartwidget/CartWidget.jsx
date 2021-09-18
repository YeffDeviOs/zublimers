import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link  className="Iconlogo px-5" to="../Cart">
        <img src="./cart-icon.png" width="60" alt="cart" />
      </Link>
    </div>
  );
};

export default CartWidget;

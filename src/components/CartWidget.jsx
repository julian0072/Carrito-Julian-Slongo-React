import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to={"/cart"} className="material-symbols-outlined">
        shopping_cart <p className="numero-carrito">0</p>
      </Link>
    </div>
  );
};

export default CartWidget;

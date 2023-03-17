import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to={"/cart"} className="material-symbols-outlined">
        shopping_cart <span className="numero-carrito">0</span>
      </Link>
    </div>
  );
};

export default CartWidget;

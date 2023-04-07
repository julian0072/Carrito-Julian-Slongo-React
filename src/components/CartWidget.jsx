import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div>
      <Link to={"/cart"} className="material-symbols-outlined">
        shopping_cart <span className="numero-carrito">{cartCount}</span>
      </Link>
    </div>
  );
};

export default CartWidget;

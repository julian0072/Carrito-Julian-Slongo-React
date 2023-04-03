import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

const ItemCount = ({ id, name, price, stock }) => {
  const { cart, addToCart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const restar = () => {
    if (count < 1) {
    } else {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count >= stock) {
    } else {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {
    const prod = {
      id,
      name,
      price,
      cantidad: count,
    };

    addToCart(prod);
  };

  return (
    <div>
      <div>
        <Button
          className="border border-dark p-2 m-3 rounded-4 "
          onClick={restar}
        >
          -
        </Button>

        <span>{count}</span>

        <Button
          className="border border-dark p-2 m-3 rounded-4 "
          onClick={sumar}
        >
          +
        </Button>
      </div>
      <div>
        <button
          onClick={handleAddToCart}
          className="border border-dark p-2 m-2 rounded-5 b"
        >
          {" "}
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

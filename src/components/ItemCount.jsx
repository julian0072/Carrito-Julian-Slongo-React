import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

const ItemCount = ({ id, name, price, stock, Imagen }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const restar = () => {
    if (count < 1) {
      Swal.fire("No puedes tener menos que 0");
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
      Imagen,
    };

    addToCart(prod);
  };

  return (
    <div>
      <div>
        <Button className="  boton-container" onClick={restar}>
          -
        </Button>

        <span className="span-boton fw-bold">{count}</span>

        <Button className="  boton-container " onClick={sumar}>
          +
        </Button>
      </div>
      <div>
        <button
          onClick={handleAddToCart}
          className="fw-bold border border-dark boton-agregar p-3"
        >
          <Link className=" boton-agregar p-3" to={"/cart"}>
            {" "}
            Agregar al carrito: {count}{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

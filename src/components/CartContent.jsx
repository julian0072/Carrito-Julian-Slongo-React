import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, nullCart, totalCart, setCart } =
    useContext(CartContext);
  const { id } = useParams();
  const cartFilter = cart.filter((prod) => prod.id == id);
  const total = cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);

  return (
    <>
      <div className="d-flex justify-content-center py-5 my-5">
        {cart <= 0 ? (
          <span className="py-5 my-5 ">
            <h2 className="text-white fw-bold">El carrito esta vacio</h2>
            <Link to={"/catalogue"}>
              <button className="btn btn-secondary my-5 py-3">
                Lista de productos
              </button>
            </Link>
          </span>
        ) : (
          cart.map((prod) => (
            <div key={prod.id}>
              <Card className="m-5 d-flex   " style={{ width: "25rem" }}>
                <Image src={prod.Imagen} />
                <div className="p-5 m-5">
                  <h6 className="fw-bold py-1">{prod.name}</h6>
                  <h6 className="fw-bold py-1">Cantidad: {prod.cantidad}</h6>
                  <h6 className="fw-bold py-1">Precio c/u: ${prod.price}</h6>
                  <h6 className="fw-bold py-1">
                    Total: ${prod.price * prod.cantidad}
                  </h6>
                </div>
                <Button onClick={() => removeItem(prod.id)}>
                  Eliminar producto
                </Button>
              </Card>
            </div>
          ))
        )}
      </div>
      {cart != 0 ? (
        <div className="container-fluid p-5 m-5" style={{ width: "32rem" }}>
          <div>
            <Button className="m-3">Finalizar compra</Button>

            <Button className="m-3" onClick={() => nullCart()}>
              Vaciar carrito
            </Button>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <h3>Total:</h3>
            <h3>${total}</h3>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default Cart;

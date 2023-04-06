import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, removeItem, nullCart, totalCart, setCart } =
    useContext(CartContext);
  const { id } = useParams();
  const cartFilter = cart.filter((prod) => prod.id == id);
  const total = cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSweetAlert = () => {
    Swal.fire("Compra realizada. ¡Muchas gracias!");
  };

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
            <div key={prod.id} className="">
              <Card
                className="m-2 d-flex justify-content-center   "
                style={{ width: "20rem", height: "27rem" }}
              >
                <div>
                  <Image src={prod.Imagen} className="img-carrito" />
                  <h6 className="fw-bold py-1">{prod.name}</h6>
                  <h6 className="fw-bold ">Cantidad: {prod.cantidad}</h6>
                  <h6 className="fw-bold ">Precio c/u: ${prod.price}</h6>
                  <h6 className="fw-bold ">
                    Total: ${prod.price * prod.cantidad}
                  </h6>
                  <Button
                    onClick={() => removeItem(prod.id)}
                    className="p-2 my-2"
                  >
                    Eliminar producto
                  </Button>
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
      {cart != 0 ? (
        <div>
          <div className="container-fluid pb-5">
            <div className="d-flex justify-content-center flex-column">
              <div className="my-3 text-center d-flex justify-content-center p-2">
                <h3 className="fw-bold text-white mb-2 display-5">Total:</h3>
                <h3 className="fw-bold text-white display-5">${total}</h3>
              </div>
              <div>
                <Button className="m-3 p-3" onClick={() => setShowModal(true)}>
                  Finalizar compra
                </Button>
                <Button className="m-3 p-3" onClick={() => nullCart()}>
                  Vaciar carrito
                </Button>
              </div>
            </div>
          </div>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h2>Su compra</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label fw-bold">
                    Nombre
                  </label>
                  <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label fw-bold">
                    Apellido
                  </label>
                  <input type="text" className="form-control" id="apellido" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label fw-bold">
                    Dirección
                  </label>
                  <input type="text" className="form-control" id="direccion" />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-around align-item-center">
              <h4>Total: ${total}</h4>

              <Button
                variant="primary"
                onClick={() => {
                  handleCloseModal();
                  handleSweetAlert();
                }}
              >
                Enviar
              </Button>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default Cart;

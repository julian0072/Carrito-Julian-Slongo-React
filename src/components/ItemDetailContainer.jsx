import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data/data.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemDetailContainer(props) {
  const { id } = useParams();
  const producto = Data.find((producto) => producto.id === parseInt(id));

  return (
    <>
      <div className="container-fluid d-flex justify-content-center py-5">
        <Card style={{ width: "24rem" }}>
          <Card.Img src={producto.imgUrl} alt={producto.nombre} />
          <Card.Body>
            <Card.Title className="py-3 fw-bold">{producto.nombre}</Card.Title>
            <Card.Text>
              <p className="fw-bold">Categoría: {producto.categoria}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                tempore vero commodi temporibus ad voluptates perferendis.
                Facere laboriosam maxime deleniti!
              </p>
              <p className="fw-bold">Stock: {producto.cantidad}</p>
              <p className="fw-bold">Precio: {producto.precio}</p>
              <hr />
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default ItemDetailContainer;

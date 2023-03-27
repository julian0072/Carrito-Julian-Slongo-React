import React from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Data from "../data/data.json";
import { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "../context/StateComponent";

function ItemDetailContainer(props) {
  const { id } = useParams();
  const producto = Data.find((producto) => producto.id === Number(id));

  const { contador, sumar, restar, reset } = useContext(CounterContext);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center py-5">
        <Card className="py-5" style={{ width: "24rem" }}>
          <Card.Img src={producto.imgUrl} alt={producto.nombre} />
          <Card.Body>
            <Card.Title className="py-3 fw-bold">{producto.nombre}</Card.Title>
            <Card.Text className="py-2">
              <span className="fw-bold">Categoría: {producto.categoria}</span>
              <br />
              <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                tempore vero commodi temporibus ad voluptates perferendis.
                Facere laboriosam maxime deleniti!
              </span>
              <br /> <br />
              <span className="fw-bold">Stock: {producto.cantidad}</span>
              <br />
              <br />
              <span className="fw-bold">Precio: {producto.precio}</span>
            </Card.Text>

            <button
              className="border border-dark p-2 m-2 rounded-5 b"
              onClick={sumar}
            >
              +
            </button>
            <Button className="px-5" variant="primary">
              {contador}
            </Button>
            <button
              className="border border-dark p-2 m-2 rounded-5 b"
              onClick={restar}
            >
              -
            </button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ItemDetailContainer;

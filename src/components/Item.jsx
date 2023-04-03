import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";

const Item = ({ id, nombre, precio, stock, imagen, categoria }) => {
  return (
    <div className="g-3 col-lg-6 p-5 ">
      <Col>
        <Card style={{ width: "23rem" }}>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title className="py-3 fw-bold">{nombre}</Card.Title>
            <Card.Text className="fw-bold py-1">
              Stock: {stock} <br />
              Precio: $ {precio} <br />
              Categoria: {categoria}
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Link to={`/item/${id}`}>
              <button className="btn btn-primary">Detalle</button>
            </Link>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Item;

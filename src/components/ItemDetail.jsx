import React from "react";
import { Image } from "react-bootstrap";

import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

const ItemDetail = ({ products }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="container-fluid p-5 m-5 d-flex justify-content-center align-item-center">
        <Card className="py-5" style={{ width: "24rem" }}>
          <Image className="image-prod" src={products.Imagen} />
          <br />
          <h5>{products.Nombre}</h5> <br />
          <span className="fw-bold">{products.Descripcion}</span> <br />
          <h6>Categoria: {products.Categoria} </h6>
          <br />
          <h6>Stock: {products.Stock}</h6> <br />
          <h6>Price: ${products.Precio}</h6> <br />
          <div className="d-flex justify-content-center">
            <ItemCount
              id={products.id}
              name={products.Nombre}
              price={products.Precio}
              stock={products.Stock}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;

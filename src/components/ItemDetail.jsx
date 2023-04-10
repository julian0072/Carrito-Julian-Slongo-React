import { Image } from "react-bootstrap";

import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ products }) => {
  const [loading, setLoading] = useState(false);
  const { addToCart, cart, setCartCount } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="container-fluid p-5 m-5 d-flex justify-content-center align-item-center">
        <Card className="py-5 " style={{ width: "32rem" }}>
          <div>
            <Image className="image-prod" src={products.Imagen} />
          </div>
          <br />
          <h5>{products.Nombre}</h5> <br />
          <span className="fw-bold">{products.Descripcion}</span> <br />
          <h6 className="fw-bold">Categoria: {products.Categoria} </h6>
          <br />
          <h6 className="fw-bold">Stock: {products.Stock}</h6> <br />
          <h6 className="fw-bold">Price: ${products.Precio}</h6> <br />
          <div className="d-flex justify-content-center">
            <ItemCount
              id={products.id}
              name={products.Nombre}
              price={products.Precio}
              stock={products.Stock}
              Imagen={products.Imagen}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;

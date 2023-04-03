import { Container } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="row p-5 m-5">
      <Container className="container-fluid ">
        <div className="row container-fluid p-5 ">
          {products.map((prod) => (
            <Item
              key={prod.Nombre}
              id={prod.id}
              nombre={prod.Nombre}
              precio={prod.Precio}
              stock={prod.Stock}
              imagen={prod.Imagen}
              categoria={prod.Categoria}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ItemList;

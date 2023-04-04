import { Container } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className=" p-5 m-5">
      <Container className=" d-flex justify-content-center flex-wrap ">
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
      </Container>
    </div>
  );
};

export default ItemList;

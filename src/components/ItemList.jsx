import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Data from "../data/data.json";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemListContainer() {
  return (
    <Container className="py-5">
      <Row xs={1} sm={2} md={4} className="g-4">
        {Data.map((producto, idx) => {
          return (
            <Col key={idx}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={producto.imgUrl} />
                <Card.Body>
                  <Card.Title className="py-3 fw-bold">
                    {producto.nombre}
                  </Card.Title>
                  <Card.Text className="fw-bold py-3">
                    Stock: {producto.cantidad}
                  </Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-center p-3 gap-5">
                  <Link to="/ItemDetailContainer">Detalle</Link>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ItemListContainer;

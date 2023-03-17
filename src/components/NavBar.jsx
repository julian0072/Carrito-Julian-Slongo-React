import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className="p-4">
      <Container>
        <Navbar.Brand href="#home" className="ms-5">
          <h3>
            <Link to={"/"}>JS</Link>{" "}
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="ms-5">
              <Link to={"/"}>Inicio</Link>{" "}
            </Nav.Link>
            <Nav.Link href="#link" className="ms-5">
              <Link to={"/catalogue"}>Catalogo</Link>
            </Nav.Link>
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="ms-5"
            >
              <NavDropdown.Item href="#action/3.1">
                Categoria 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Categoria 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Categoria 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default BasicExample;

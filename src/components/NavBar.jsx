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
        <Navbar.Brand className="ms-5">
          <h3>
            <Link to={"/"}>JS</Link>{" "}
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link ms-5">
              Inicio
            </Link>
            <Link to={"/catalogue"} className="nav-link ms-5">
              Catalogo
            </Link>
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="ms-5"
            >
              <NavDropdown.Item href="#action/3.1">Shooter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fifa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Estrategia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

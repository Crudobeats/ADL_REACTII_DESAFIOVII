import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarritoContext from "../context/CarritoContext";


export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Pizzería Mamma Mía
        </Link>
        <Nav className="ml-auto">
          <Link to="/carrito" className="nav-link">
          🛒 Carrito
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

import React, { useContext } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import pizzaData from "../assets/pizzas.json";
import CarritoContext from "../context/CarritoContext";

import "../assets/NavbarStyle.css";

export default function Home() {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content">
        <Row>
          {pizzaData.map((pizza) => (
            <Col key={pizza.id} xs={12} sm={6} md={4} lg={4}>
              <Card style={{ marginBottom: "1rem" }}>
                <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                <Card.Body>
                  <Card.Title>{pizza.name}</Card.Title>
                  <Card.Text>
                    <strong>Ingredientes:</strong>
                  </Card.Text>
                  <ul>
                    {pizza.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                  <Link to={`/detalles/${pizza.id}`}>
                    <Button variant="primary">Ver más</Button>
                  </Link>{" "}
                  <Button
                    variant="danger"
                    onClick={() => {
                      agregarAlCarrito(pizza);
                      navigate("/carrito");
                    }}
                  >
                    Agregar al carrito
                  </Button>
                  <Card.Title>Precio: ${pizza.price}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

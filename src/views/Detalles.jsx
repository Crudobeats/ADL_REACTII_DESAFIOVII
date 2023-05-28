import React, { useContext, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import pizzaData from "../assets/pizzas.json";
import CarritoContext from "../context/CarritoContext";
import "../assets/NavbarStyle.css";

export default function Detalles() {
  const { id } = useParams();
  const pizza = pizzaData.find((pizza) => pizza.id === id);
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(pizza); 
    alert("Pizza agregada al carrito");
    handleAgregarAlCarrito();
  };

  return (
    <div className="detail-container">
      <Card className="detail-card">
        <Row>
          <Col md={4}>
            <Card.Img className="img-detail" src={pizza.img} alt={pizza.name} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>{pizza.desc}</Card.Text>
              <Card.Text>
                <strong>Ingredientes:</strong>
              </Card.Text>
              <ul>
              {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <Button variant="danger" onClick={() => agregarAlCarrito(pizza)}>
                Agregar al carrito
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

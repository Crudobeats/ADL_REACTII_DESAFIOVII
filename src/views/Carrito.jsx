import React, { useContext, useState, useEffect } from "react";
import { Table, Image, Form, Button } from "react-bootstrap";
import CarritoContext from "../context/CarritoContext";

export default function Carrito() {
  const { carrito, actualizarCantidad, eliminarDelCarrito } =
    useContext(CarritoContext);

  const [totalPagar, setTotalPagar] = useState(0);

  useEffect(() => {
    const total = carrito.reduce((acc, pizza) => {
      const subtotal = pizza.price * pizza.cantidad;
      pizza.subtotal = subtotal;
      return acc + subtotal;
    }, 0);
    setTotalPagar(total);
  }, [carrito]);

  const handleCantidadChange = (event, pizzaId) => {
    const cantidad = parseInt(event.target.value, 10);
    actualizarCantidad(pizzaId, cantidad);
  };

  const handleEliminar = (pizzaId) => {
    eliminarDelCarrito(pizzaId);
  };

  return (
    <div>
      <h4 className="tableTitle">Carrito de compras</h4>
      {carrito.length === 0 ? (
        <div className="tableTitle">No hay elementos en el carrito</div>
      ) : (
        <Table  className="pizzaTable" striped bordered hover>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Valor</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((pizza) => (
              <tr key={pizza.id}>
                <td className="thumbnail-pizza">
                  <Image src={pizza.img} alt={pizza.name} thumbnail />
                </td>
                <td>{pizza.name}</td>
                <td>${pizza.price}</td>
                <td>
                  <Form.Control
                    type="number"
                    min={1}
                    value={pizza.cantidad ?? ""}
                    onChange={(event) => handleCantidadChange(event, pizza.id)}
                  />
                </td>
                <td>${pizza.subtotal}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleEliminar(pizza.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Total a pagar:</td>
              <td>${totalPagar}</td>
            </tr>
          </tfoot>
        </Table>
      )}
    </div>
  );
}

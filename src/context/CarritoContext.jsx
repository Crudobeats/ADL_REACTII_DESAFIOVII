import React, { createContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [totalPagar, setTotalPagar] = useState(0);

  const agregarAlCarrito = (pizza) => {
    setCarrito([...carrito, pizza]);
  };

  const eliminarDelCarrito = (pizzaId) => {
    setCarrito(carrito.filter((pizza) => pizza.id !== pizzaId));
  };

  const actualizarCantidad = (pizzaId, cantidad) => {
    setCarrito(
      carrito.map((pizza) =>
        pizza.id === pizzaId ? { ...pizza, cantidad } : pizza
      )
    );
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;

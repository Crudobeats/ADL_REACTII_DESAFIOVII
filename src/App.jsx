import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Detalles from "./views/Detalles";
import Carrito from "./views/Carrito";
import { CarritoProvider } from "./context/CarritoContext";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <CarritoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalles/:id" element={<Detalles />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </CarritoProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

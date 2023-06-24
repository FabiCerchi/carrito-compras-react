import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  const [carrito, agregarProducto] = useState([]);

  // Creamos nuestra lista de productos
  const [productos, ] = useState([
    {id:0, articulo:"Pure de Tomate", precio:100},
    {id:1, articulo:"Mayonesa", precio:200},
    {id:2, articulo:"Pringles", precio:800},
    {id:3, articulo:"Oreo", precio:300}
  ])

  return (
    <>
      <Header
          titulo="El Mercadito"
      />
      <h1>Listado de productos</h1>
      {
        productos.map(producto => 
        <Producto
            producto={producto}
            productos={productos}
            carrito = {carrito}
            agregarProducto = {agregarProducto}
            key={producto.id}
        />)
      }
        <Carrito
          carrito= {carrito}
          agregarProducto = {agregarProducto}
        />

      <Footer/>
    </>
  );
}

export default App;

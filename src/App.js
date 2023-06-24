import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];

  const [carrito, agregarProducto] = useState(carritoGuardado);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Creamos nuestra lista de productos
  const [productos] = useState([
    { id: 0, nombre: "Arroz", precio: 80, img: "https://example.com/imagen-arroz.jpg" },
    { id: 1, nombre: "Fideos", precio: 60, img: "https://example.com/imagen-fideos.jpg" },
    { id: 2, nombre: "Aceite de Oliva", precio: 200, img: "https://example.com/imagen-aceite.jpg" },
    { id: 3, nombre: "Leche", precio: 120, img: "https://example.com/imagen-leche.jpg" },
    { id: 4, nombre: "Pan", precio: 30, img: "https://example.com/imagen-pan.jpg" },
    { id: 5, nombre: "Jabón de Lavandería", precio: 50, img: "https://example.com/imagen-jabon.jpg" },
    { id: 6, nombre: "Detergente para Platos", precio: 70, img: "https://example.com/imagen-detergente.jpg" },
    { id: 7, nombre: "Papel Higiénico", precio: 90, img: "https://example.com/imagen-papel.jpg" },
    { id: 8, nombre: "Café", precio: 150, img: "https://example.com/imagen-cafe.jpg" },
    { id: 9, nombre: "Azúcar", precio: 40, img: "https://example.com/imagen-azucar.jpg" },
    { id: 10, nombre: "Cepillo de Dientes", precio: 150, img: "https://example.com/imagen-cafe.jpg" },
    { id: 11, nombre: "Desodorante", precio: 30, img: "https://example.com/imagen-azucar.jpg" }
  ])

  return (
    <>
      <Header
        titulo="El Mercadito"
      />
      <h1 className='text-center'>Listado de productos</h1>
      <Container className=''>
        <Row>
          {
            productos.map(producto =>
              <>
                <Col>
                  <Producto
                    producto={producto}
                    productos={productos}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                    key={producto.id}
                  />
                </Col>
              </>
            )
          }
        </Row>
      </Container>
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer />
    </>
  );
}

export default App;

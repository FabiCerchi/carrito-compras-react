import React from 'react';
import { Card, Button} from 'react-bootstrap';

const Producto = ({ producto, productos, carrito, agregarProducto }) => {

    //Extraigo los valores de producto
    const { id, nombre, precio, cantidadComprada } = producto; //Destructuring

    //Funcion para comprar un producto
    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        const productoCarrito = carrito.find(producto => producto.id === id);
        if (!productoCarrito) {
            producto.cantidadComprada = 1
            agregarProducto([...carrito, producto]);
        } else {
            productoCarrito.cantidadComprada += 1
            agregarProducto([...carrito])
        }
    };

    const eliminarProducto = (carrito, id) => {
        const producto = carrito.filter(
            producto => producto.id === id
        )[0];
        if (producto.cantidadComprada > 1) {
            producto.cantidadComprada -= 1
            agregarProducto([...carrito])
        } else {
            const carritoActualizado = carrito.filter(producto => producto.id !== id);
            agregarProducto(carritoActualizado)
        }
    };

    return (
        <>

            {productos ?
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ nombre } />
                        <Card.Body>
                            <Card.Title>{ nombre }</Card.Title>
                            <Card.Text>{ nombre }</Card.Text>
                            <Card.Text>Precio: { precio }</Card.Text>
                            <Button variant="primary"
                                type="button"
                                onClick={() => seleccionarProducto(id)}>Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </>
                :
                <>
                    <li>{id} | {nombre} | {precio} | {cantidadComprada}</li>
                    <button
                        type="button"
                        onClick={() => eliminarProducto(carrito, id)}
                    >Eliminar</button>
                </>
            }

            <br />
        </>
    );
}

export default Producto;
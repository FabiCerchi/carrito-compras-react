import React from 'react';

const Producto = ({ producto, productos, carrito, agregarProducto }) => {

    //Extraigo los valores de producto
    const { id, articulo, precio, cantidadComprada } = producto; //Destructuring

    //Funcion para comprar un producto
    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        const productoCarrito = carrito.find(producto => producto.id === id);
        if(!productoCarrito){
            producto.cantidadComprada = 1
            agregarProducto([...carrito, producto]);
        }else{
           productoCarrito.cantidadComprada += 1
           agregarProducto([...carrito])
        }
    };

    const eliminarProducto = (carrito, id) => {
        const producto = carrito.filter(
            producto => producto.id === id
        )[0];
        if(producto.cantidadComprada > 1){
            producto.cantidadComprada-=1
            agregarProducto([...carrito])
        }else{
            const carritoActualizado = carrito.filter(producto => producto.id !== id);
            agregarProducto(carritoActualizado)
        }
    };

    return (
        <>

            {productos ?
                <>
                    <li>{id} | {articulo} | {precio}</li>
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                    >Comprar</button>
                </>
                :
                <>  
                    <li>{id} | {articulo} | {precio} | {cantidadComprada}</li>
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
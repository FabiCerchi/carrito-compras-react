import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito,agregarProducto}) => {
    return ( 
        <>
            <h5>Changuito de compra</h5>
            {
                carrito.map(producto => 
                    <Producto 
                        key={producto.id}
                        producto = {producto}
                        carrito = {carrito}
                        agregarProducto = {agregarProducto}
                    />
                    )
            }
        </>
     );
}
 
export default Carrito;
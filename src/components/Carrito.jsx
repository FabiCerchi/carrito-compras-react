import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito,agregarProducto}) => {

    const total = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.precio*producto.cantidadComprada;
      }, 0);

    const vaciarCarrito  = () => {
        agregarProducto([])
    }
    return ( 
        <>
            <h5>Changuito de compra</h5>
            {
                total>0
                ?
                <p>{total}</p>
                :
                <p></p>
            }
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
            <button
                type="button"
                onClick={() => vaciarCarrito(carrito)}
            >Vaciar Carrito</button>

        </>
     );
}
 
export default Carrito;
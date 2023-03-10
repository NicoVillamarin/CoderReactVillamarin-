import React from 'react'
import '../App.css'
import { useContext } from 'react'
import { CounterContext } from '../context/CartContext.jsx'
import SendOrder from './SendOrder'
import { BsFillTrashFill } from "react-icons/bs";


const Cart = () => {

    const { cart, removeItem, removeAll } = useContext(CounterContext);

    /* Esta funcion unicamente sirve para poder agregar un formato de numero con 00.00*/

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number)
    }

    /* Esta funcion suma todo el total de los productos selecionados */ 
    const calcularTotalCompra = () => {
        let total = 0;
        cart.forEach((producto) => {
                total += producto.precio
        });
    };
    

    return (
        <>
            <div>
                <button className='btn btn-warning' onClick={removeAll}>Eliminar todos los productos</button>
            </div>
            <div className='bloqWidget'>
                {
                    cart.map((item) => {

                        return (
                            <div key={item.id}>
                                <div className="card cardWidget" >
                                    <img
                                        src={`../src/assets/img_producto/${item.img}.jpg`}
                                        className="card-img-top imgWidget"
                                        alt="..."
                                    />
                                    <div className="card-body text-widget">
                                        <h5 className="card-title fw-bold">{item.producto}</h5>
                                        <p className="card-text fw-bolder">Precio ARS:<span className='spanInfo'> ${formatNumber(item.precio)}</span></p>
                                        <p className="card-text fw-bolder">Cantidad seleccionada:<span className='spanInfo'> {item.cantidad}</span></p>
                                        <p className="card-text fw-bolder">Total parcial:<span className='spanInfo'> ${formatNumber(item.precio * item.cantidad)} </span></p>
                                    </div>
                                    <div>
                                        <button className='buttonEliminar' onClick={removeItem}>
                                            {/* Este componente es Unicamente un icono */}
                                        <BsFillTrashFill />
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        );
                    })
                }
            </div>
            {/* Componete que contiene el */}
            <SendOrder />
        </>
    )
}

export default Cart
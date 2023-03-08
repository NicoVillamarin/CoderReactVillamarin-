import React from 'react'
import '../App.css'
import { useContext } from 'react'
import { CounterContext } from '../context/CartContext.jsx'
import SendOrder from './SendOrder'
import { BsFillTrashFill } from "react-icons/bs";

const Cart = () => {

    const [cart, setCart] = useContext(CounterContext);

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number)
    }

    const eliminarItem = (id) =>{
        
    }

    return (
        <>
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
                                        <button className='buttonEliminar' onClick={eliminarItem}>
                                        <BsFillTrashFill />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <SendOrder />
        </>
    )
}

export default Cart
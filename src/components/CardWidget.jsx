import React, { useContext } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'
import { CounterContext } from '../context/CartContext.jsx'

const CardWidget = () => {

    const [cart, setCart] = useContext(CounterContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
    return (
        <div className='bloqueBoton'>
            <Link to={"/cart"}>
                <button type="button" className="btn btn-warning btn-lg buttonCompra">🛒<span>{quantity}</span></button>

            </Link>
        </div>
    )
}

export default CardWidget;
import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

const CardWidget = () => {
    return(
        <div className='bloqueBoton'>
            <Link to={"/cart"}>
            <button type="button" className="btn btn-warning btn-lg buttonCompra">🛒<span>0</span></button>
            </Link>
        </div>
    )
}

export default CardWidget;
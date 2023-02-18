import React from 'react'
import "../App.css"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'




function Item({ id, producto, precio, cantidad, img}) {

    function formatNumber(number){
        return new Intl.NumberFormat().format(number)
    }
    return (
        <>
            <div className="card cardProd" key={id}>
                <img src={`../src/assets/img_producto/${img}.jpg`} className="card-img-top imgProd" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{producto}</h5>  
                    <p className="card-text fw-bolder">Precio ARS: ${formatNumber(precio)}</p>
                    <p className="card-text">Stock: {cantidad}</p>
                    <ItemCount stock={cantidad}/>
                    <Link to={`/item/${id}`}>
                    <p className="btn btn-warning">Detalles</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item
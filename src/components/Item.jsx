import React from 'react'
import "../App.css"
import ItemCount from './ItemCount'




function Item({ producto, precio, cantidad, img}) {

    function formatNumber(number){
        return new Intl.NumberFormat().format(number)
    }
    return (
        <>
            <div className="card cardProd">
                <img src={`./src/assets/img_producto/${img}.jpg`} className="card-img-top imgProd" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{producto}</h5>  
                    <p className="card-text fw-bolder">Precio ARS: ${formatNumber(precio)}</p>
                    <p className="card-text">Stock: {cantidad}</p>
                    <ItemCount stock={cantidad}/>
                    <p className="btn btn-warning">Detalles</p>
                </div>
            </div>
        </>
    )
}

export default Item
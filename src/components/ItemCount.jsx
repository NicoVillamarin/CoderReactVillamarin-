import React, { useState } from 'react'
import "../App.css"


const ItemCount = ({stock}) => {

    let [Agregar, SetAgregar] = useState([0])

    const AgregarProd = () =>{
        if(Agregar <= stock){
            SetAgregar(Agregar++)
        }
        
    }

    const Descontar = () =>{
        if(Agregar >= 0){
            SetAgregar(Agregar--)
        }
        
    }
    return (
        <div className='BloqueCount'>
            <button onClick={Descontar} className="btn btn-warning">-</button>
            <span className='SpanCount'>{Agregar} </span>
            <button onClick={AgregarProd} className="btn btn-warning">+</button>
        </div>
    )
}

export default ItemCount
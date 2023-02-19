import React, { useState } from 'react'
import "../App.css"


const ItemCount = ({stock}) => {

    let [Agregar, SetAgregar] = useState(0) 
 
    const AgregarProd = () =>{
        if(Agregar < stock){
            SetAgregar(Agregar +1)
        }
        
    } 

    const Descontar = () =>{
        if(Agregar > 0){
            SetAgregar(Agregar -1)
        }
        
    }
    return (
        <div className='BloqueCount'>
            <button onClick={Descontar} className="btn btn-secondary">-</button>
            <span className='SpanCount'>{Agregar} </span>
            <button onClick={AgregarProd} className="btn btn-secondary">+</button>
        </div>
    )
}

export default ItemCount
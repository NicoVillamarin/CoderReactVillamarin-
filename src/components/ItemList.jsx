import React from 'react'
import Item from './Item'
import "../App.css"

const ItemList = ({product}) => {
    
    return (
        <div className='BloqueProd'>
            {
                product.map((prod)=>{
                    return(
                            <div key={prod.id} className="listProd"> 
                            <Item producto={prod.producto} precio={prod.precio} cantidad={prod.cantidad} descripcion={prod.descripcion} img={prod.img}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList
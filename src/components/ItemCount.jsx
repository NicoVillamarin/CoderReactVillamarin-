import React, { useState, useContext } from 'react'
import "../App.css"
import { CounterContext } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, id, precio, producto }) => {

    const [cart, setCart] = useContext(CounterContext);
    let [Agregar, SetAgregar] = useState(0)

    const AgregarProd = () => {
        if (Agregar < stock) {
            SetAgregar(Agregar + 1)
        }

    }

    const Descontar = () => {
        if (Agregar > 0) {
            SetAgregar(Agregar - 1)
        }

    }

    const agregarAlCarrito = () => {
        setCart((agrItems) => {
            const itemAgregado = agrItems.find((items) => items.id === id);
            if (itemAgregado) {
                return agrItems.map((items) => {
                    if (items.id === id) {
                        return { ...items, cantidad: items.cantidad + Agregar };
                    } else {
                        return items;
                    }
                })
            } else {
                return [...agrItems, { id, cantidad: Agregar, precio, producto }];
            }
        })
    }

    return (
        <div className='BloqueCount'>
            <button onClick={Descontar} className="btn btn-secondary">-</button>
            <span className='SpanCount'>{Agregar} </span>
            <button onClick={AgregarProd} className="btn btn-secondary">+</button>
            <button className="btn btn-secondary" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
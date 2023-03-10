import React from "react";
import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CounterContext = createContext(null);

/* Componente CartContext crea un context para poder pasar por parametros lo que se requiere (Casi la misma logica que Props,) */

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const removeItem = (id) =>{
        setCart(cart.filter((item)=> item.id !== id));
    }


    const removeAll = () =>{
        setCart([]);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Todos los productos fueron eliminado',
            showConfirmButton: false,
            timer: 1500
          })
    }

    
    return (
        <CounterContext.Provider value={{ cart, setCart, removeItem, removeAll }}>
            {children}
        </CounterContext.Provider>  
    );
};

export default CartContext;

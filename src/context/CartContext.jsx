import React from "react";
import { createContext, useState } from "react";


export const CounterContext = createContext(null);

/* Componente CartContext crea un context para poder pasar por parametros lo que se requiere (Casi la misma logica que Props,) */

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const removeItem = (id) =>{
        setCart(cart.filter((item)=> item.id !== id));
    }


    return (
        <CounterContext.Provider value={[ cart, setCart, removeItem]}>
            {children}
        </CounterContext.Provider>  
    );
};

export default CartContext;

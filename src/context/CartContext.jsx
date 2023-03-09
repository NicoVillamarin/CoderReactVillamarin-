import React from "react";
import { createContext, useState } from "react";


export const CounterContext = createContext(null);

/* Componente CartContext crea un context para poder pasar por parametros lo que se requiere (Casi la misma logica que Props) */

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);


    return (
        <CounterContext.Provider value={[ cart, setCart ]}>
            {children}
        </CounterContext.Provider>
    );
};

export default CartContext;

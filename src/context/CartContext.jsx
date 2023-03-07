import React from "react";
import { createContext, useState } from "react";


export const CounterContext = createContext(null);

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);


    return (
        <CounterContext.Provider value={[ cart, setCart ]}>
            {children}
        </CounterContext.Provider>
    );
};

export default CartContext;

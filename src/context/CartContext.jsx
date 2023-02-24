import React from "react";
import { createContext, useState } from "react";
export const CounterContext = createContext();

const CartContext = ({ children }) => {
    const [counter, setCounter] = useState([]);


    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CartContext;

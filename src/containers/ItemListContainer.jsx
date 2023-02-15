import React from "react";
import ItemList from "../components/ItemList";
import {useEffect, useState} from "react"
import "../App.css"

const ItemListContainer = ({greeting}) =>{
    const getProduc = async () => {
        const response = await fetch('./data.json');
        const data = await response.json(); 
        return data;
    };
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        getProduc().then((product)=> setProduct(product))
    }, []);
    return(
        <>
            <h1 className="TituloPrincipal">Bienvenidos a {greeting}</h1>
            <ItemList product={product}/>
            
        </>
    );
}

export default ItemListContainer;

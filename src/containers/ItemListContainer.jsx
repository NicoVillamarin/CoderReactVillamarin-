import React from "react";
import ItemList from "../components/ItemList";
import "../App.css"
import { useParams } from "react-router-dom";
import Info from "../../data.json"
import Error from "../components/Error";


const ItemListContainer = ({greeting}) =>{
    
    const { category } = useParams();
    const itemFilter = Info.filter((product) =>product.category === category)
    return(
        <>
            <h1 className="TituloPrincipal">{greeting}</h1>
            {category ? <ItemList product={itemFilter}/> : <ItemList product={Info}/>}
        </>
    );
}

export default ItemListContainer;

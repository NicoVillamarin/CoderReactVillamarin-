import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import "../App.css"
import { useParams } from "react-router-dom";
import {getProducts}  from "../../data.js"
import Loading from "../components/Loading";

const ItemListContainer = ({ greeting }) => {

    const { categoryid } = useParams();
    const [loading, setLoading] = useState(true);
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (categoryid) {
                    setListaProductos(res.filter((item) => item.category === categoryid));
                } else {
                    setListaProductos(res);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [categoryid]);

    return (
        <>
            <h1 className="TituloPrincipal">{greeting}</h1>
            {loading ? <Loading /> : <ItemList product={listaProductos} />}
        </>
    );
}

export default ItemListContainer;

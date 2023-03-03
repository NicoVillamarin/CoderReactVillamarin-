import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import "../App.css"
import { useParams } from "react-router-dom";
import { getProducts } from "../../data.js"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "../components/Loading";

const ItemListContainer = ({ greeting }) => {

    const { categoryid } = useParams();
    const [loading, setLoading] = useState(true);
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const itemsCollection = collection(db, "Productos");
    
        getDocs(itemsCollection)
            .then((snapshot) => {
                if (categoryid) {
                    setListaProductos(snapshot.docs.filter((doc) => ({ id: doc.category === categoryid, ...doc.data() }) ));
                } else {
                    setListaProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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

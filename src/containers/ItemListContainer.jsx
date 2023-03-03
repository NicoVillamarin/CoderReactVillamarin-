import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import "../App.css"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "../components/Loading";

const ItemListContainer = ({ greeting }) => {

    const { categoryid } = useParams();
    const [loading, setLoading] = useState(true);
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const itemsCollection = categoryid ? query(collection(db, "Productos"), where("category", "==", categoryid)) : collection(db, "Productos");
    
        getDocs(itemsCollection)
            .then((snapshot) => {
                setListaProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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

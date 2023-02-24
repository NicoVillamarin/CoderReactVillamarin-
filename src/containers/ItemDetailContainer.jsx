import React from 'react'
import { useParams } from 'react-router-dom'
import Info from "../../data.json"
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () => {
  const productos = Info;
  const { id } = useParams();
  const FiltradoProducto = productos.filter((prod) =>prod.id == id);

  
  return (
    <div>
      <ItemDetail productos={FiltradoProducto}/>
    </div>
  )
}

export default ItemDetailContainer
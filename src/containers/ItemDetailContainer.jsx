import React, { useEffect, useState } from 'react';
import { getProducts } from '../../data';
import ItemDetail from '../components/ItemDetail';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getProducts()
      .then((res) => setDetalleProducto(res.find((item) => item.id === parseInt(id))))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      {loading ? <Loading /> : <ItemDetail detalleProducto={detalleProducto} />}
    </div>
  );
};

export default ItemDetailContainer
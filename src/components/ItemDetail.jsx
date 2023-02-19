import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const FiltradoProducto = productos.filter((prod) =>prod.id == id);

    function formatNumber(number){
        return new Intl.NumberFormat().format(number)
    }

    return (
        <div>
            {FiltradoProducto.map((prod) => {
                return (
                    <div className="card cardProdDetail" key={prod.id}>
                        <img
                            src={`../src/assets/img_producto/${prod.img}.jpg`}
                            className="card-img-top imgProd"
                            alt="..."
                        />
                        <div className="card-body bg-warning">
                            <h5 className="card-title fw-bold">{prod.producto}</h5>
                            <p className="card-text fw-bolder">
                                Precio ARS: ${formatNumber(prod.precio)}
                            </p>
                            <p className="card-text">Descripcion: {prod.descripcion}</p>
                            <p className="card-text fw-bolder">Stock: {prod.cantidad}</p>
                            <ItemCount stock={prod.cantidad} />
                            <Link to={"/cart"}>
                                <button className="btn btn-secondary">Agregar al carrito</button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemDetail;

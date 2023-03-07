import React from 'react'
import '../App.css'
import { useContext } from 'react'
import { CounterContext } from '../context/CartContext.jsx'


const Cart = () => {

    const [cart, setCart] = useContext(CounterContext);

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number)
    }

    return (
        <>
            {
                cart.map((item) => {
                    <div className="card cardProd" key={item.id}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{item.producto}</h5>
                            <p className="card-text fw-bolder">Precio ARS: ${formatNumber(item.precio)}</p>
                            <p className="card-text fw-bolder">Stock: {item.cantidad}</p>
                        </div>
                    </div>
                })
            }
            <div className='BloqueCart'>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Cart
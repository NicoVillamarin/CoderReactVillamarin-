import React from 'react'
import '../App.css'
import {collection, getFirestore, addDoc} from "firebase/firestore"
import { useState } from 'react'

const SendOrder = () => {
    const [ordenID, setOrdenID] = useState(null)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("");
    const db = getFirestore();
    const handleSubmit = (e) =>{
        e.preventDefault()
        addDoc(orderCollection, order).then(({id})=> setOrdenID(id))
        setEmail("")
    }
    const order = {
            nombre,
            email,
    }
    const orderCollection = collection(db, "orden")

  return (
    <>
        <div className='BloqueCart'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value
                        )
                        }/>
                        <label className="form-label">Nombre y apellido</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=> setNombre(e.target.value
                        )
                        }/>
                    </div>       
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <h2>Id de la orden: {ordenID}</h2>
                </form>
            </div>
    </>
  )
}

export default SendOrder
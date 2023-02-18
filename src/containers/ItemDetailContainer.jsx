import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Info from "../../data.json"
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () => {

  return (
    <div>
      <ItemDetail productos={Info}/>
    </div>
  )
}

export default ItemDetailContainer
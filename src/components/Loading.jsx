import React from 'react'

/* Componente sencillo para poder visualizar un sponner de carga */

const Loading = () => {
  return (
    <div className='bloqueLoading'>

      <div className="spinner-grow text-warning circule" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning circule" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning circule" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

    </div>
  )
}

export default Loading
import React from 'react'
import './estilos.scss'
const Descripcion = (props) => {

    const { descripcion} = props.parrafo;

  return (
    <>
        <div className='container-parrafo'>
          <p >{descripcion}</p>
        </div>
    </>
  )
}

export default Descripcion
import React from 'react'
import './estilos.scss'
const Izquierdo = (props) => {
    return (
        <div className='tarjeta-izquierdo'>
            <img src={props.imagen} alt="" />
            <div className='tarjeta-izquierdo-text'>
                <h1>{props.titulo}
                </h1>
                <p>{props.descripcion}</p>
            </div>
        </div>
    )
}

export default Izquierdo
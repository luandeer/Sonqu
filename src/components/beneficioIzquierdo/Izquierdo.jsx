import React from 'react'
import './estilos.scss'
const Izquierdo = (props) => {
    return (
        <div className='tarjeta-izquierdo'>
            
            <div className='tarjeta-izquierdo-text'>
                <h1>{props.titulo}
                </h1>
                <p>{props.descripcion}</p>
            </div>
            <img src={props.imagen} alt="" />
        </div>
    )
}

export default Izquierdo
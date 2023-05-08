import React from 'react'
import './estilos.scss'
const Derecho = (props) => {
    return (
        <div className='tarjeta-derecho'>
            <img src={props.imagen} alt="" />
            <div className='tarjeta-derecho-text'>
                <h1>{props.titulo}
                </h1>
                <p>{props.descripcion}</p>
            </div>
            
        </div>
    )
}

export default Derecho
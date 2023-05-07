import React from 'react'
import './estilos.scss'
const Derecho = (props) => {
    return (
        <div className='container-beneficios-contenido-tarjeta'>
            <div className='container-beneficios-contenido-tarjeta-text'>
                <h1>{props.titulo}
                </h1>
                <p>{props.descripcion}</p>
            </div>
            <img src={props.imagen} alt="" />
        </div>
    )
}

export default Derecho
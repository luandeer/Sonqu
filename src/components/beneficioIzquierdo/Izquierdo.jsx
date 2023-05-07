import React from 'react'
import './estilos.scss'
const Izquierdo = (props) => {
    return (
        <div className='container-beneficios-contenido-tarjeta'>
            <img src={props.imagen} alt="" />
            <div className='container-beneficios-contenido-tarjeta-text'>
                <h1>{props.titulo}
                </h1>
                <p>{props.descripcion}</p>
            </div>
        </div>
    )
}

export default Izquierdo
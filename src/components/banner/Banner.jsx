import React from 'react'
import './estilos.scss'
const Banner = (props) => {
    
    return (
        <>
            <div className="container-banner">
                <img src={props.portada} alt="" />
            </div>
        </>
    )
}

export default Banner
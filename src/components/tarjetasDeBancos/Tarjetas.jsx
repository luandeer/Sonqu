import React from "react";
import './estilos.scss'
const Tarjetas = (props) => {
    const { img, numeroCuenta, descripcion } = props.imagen;

    return (
        <>
            <div className="contenedor-tarjeta">
                <img src={img} alt="" />
                <h1>{descripcion}</h1>
                <p>{numeroCuenta}</p>
            </div>
        </>
    );
};

export default Tarjetas;

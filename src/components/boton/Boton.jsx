import React from "react";
import './estilos.scss'
const Boton = (props) => {
    //destructuracion
    //ej: colorPrimario = props.datos.colorPrimario
    const { icono, nombre, color, link } = props.datos;

    return (
        <>
            <a href={link} className="botones-header" target="_blank" style={{ backgroundColor: color }}>
                <div className="boton" >
                    <img src={icono} alt="" />
                </div>
                {nombre}
            </a>
        </>
    );
};

export default Boton;

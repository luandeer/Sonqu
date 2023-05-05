import React from "react";
import './estilos.scss'
const Boton = (props) => {
    //destructuracion
    //ej: colorPrimario = props.datos.colorPrimario
    const { icono, nombre, color } = props.datos;

    return (
        <>
            <a href="#" className="botones-header" style={{ backgroundColor: color }}>
                <div className="boton" >
                    <img src={icono} alt="" />
                </div>
                {nombre}
            </a>
        </>
    );
};

export default Boton;

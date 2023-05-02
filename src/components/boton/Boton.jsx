import React from "react";
import './estilos.scss'
const Boton = (props) => {
    //destructuracion
    //ej: colorPrimario = props.datos.colorPrimario
    const { icono, nombre, color } = props.datos;

    return (
        <>
            <div className="boton"  style={{ backgroundColor: color }}>
                <img src={icono} alt="" />
                <a href="#">
                    {nombre}
                </a>
            </div>
        </>
    );
};

export default Boton;

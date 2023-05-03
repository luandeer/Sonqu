import React from "react";
import {useState} from 'react'
import "./estilos.scss";
import logo from "../../assets/images/logo.png";
import Boton from "../boton/Boton";
import iconoOne from "../../assets/icons/iconoOne.png";
import iconoTwo from "../../assets/icons/iconoTwo.png";
const Header = () => {

    const[activeNav, setActiveNav] = useState('#')

    const boton = [
        {
            nombre: "Redes Sociales",
            icono: `${iconoTwo}`,
            color: "#EA5455",
        },
        {
            nombre: "Contáctame",
            icono: `${iconoOne}`,
            color: "#0DC143",
        },
    ];

    return (
        <header>
            <div className="logo">
                {/**<img src={logo} alt="imagen del logo" /> */}
                <h1><span>Sonqu</span></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Inicio</a>
                    </li>
                    <li>
                        <a href="#">Suscríbete</a>
                    </li>
                    <li>
                        <a href="#">Beneficios</a>
                    </li>
                </ul>
            </nav>
            <div className="botones-header"> 
            {boton.map((botones, position) => {
                return <Boton datos={botones} key={position} />;
            })}
            </div>
            
        </header>
    );
};

export default Header;

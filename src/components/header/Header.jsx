import React from "react";
import { useState } from 'react'
import "./estilos.scss";
import logo from "../../assets/images/logo.png";
import Boton from "../boton/Boton";
import iconoOne from "../../assets/icons/iconoOne.png";
import iconoTwo from "../../assets/icons/iconoTwo.png";

import { Link } from "react-router-dom";

const Header = () => {

    const [activeNav, setActiveNav] = useState('/')

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
                <Link to='/' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''} >
                    <h1><span>Sonqu</span></h1>
                </Link>

            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/suscribete" onClick={() => setActiveNav('/suscribete')} className={activeNav === '/suscribete' ? 'active' : ''}>Suscríbete</Link>
                    </li>
                    <li>
                        <Link to="/beneficios" onClick={() => setActiveNav('/beneficios')} className={activeNav === '/beneficios' ? 'active' : ''}>Beneficios</Link>
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

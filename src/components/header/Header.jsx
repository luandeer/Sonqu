import React from "react";
import { useState } from "react";
import "./estilos.scss";
import logo from "../../assets/images/logo.png";
import Boton from "../boton/Boton";

import iconoOne from "../../assets/icons/iconoOne.png";
import iconoTwo from "../../assets/icons/iconoTwo.png";

import { CgMenu } from "react-icons/cg";

import { Link } from "react-router-dom";

const Header = () => {
    const [activeNav, setActiveNav] = useState("/");

    const [isOpen, setIsOpen] = useState(true);

    const boton = [
        {
            nombre: "Recetas",
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
                {/**<img src={logo} alt="imagen del logo" />
         * <h1><span>Sonqu</span></h1>
         */}
                <Link
                    to="/"
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <img src={logo} alt="imagen del logo" />
                </Link>
            </div>
            <nav>
                {isOpen === true ? (
                    <ul>
                        <li>
                            <Link
                                to="/"
                                onClick={() => setActiveNav("/")}
                                className={activeNav === "/" ? "active" : ""}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/suscribete"
                                onClick={() => setActiveNav("/suscribete")}
                                className={activeNav === "/suscribete" ? "active" : ""}
                            >
                                Suscríbete
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/beneficios"
                                onClick={() => setActiveNav("/beneficios")}
                                className={activeNav === "/beneficios" ? "active" : ""}
                            >
                                Beneficios
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <></>
                )}
                <div className="header-section-3">
                <div className="botones-header-home">
                    {boton.map((botones, position) => {
                        return <Boton datos={botones} key={position} />;
                    })}
                </div>

                <div className="menu-toogle">
                    <CgMenu  onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            </nav>
            
        </header>
    );
};

export default Header;

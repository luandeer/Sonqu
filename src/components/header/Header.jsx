import React from "react";
import { useState, useRef } from "react";
import "./estilos.scss";
import logo from "../../assets/images/logo.png";
import Boton from "../boton/Boton";

import iconoOne from "../../assets/icons/iconoOne.png";
import iconoTwo from "../../assets/icons/iconoTwo.png";

import { CgMenu } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    //para el boton de desplazamiento al inicio
    const scrollRef = useRef(null);

    const boton = [
        {
            nombre: "Recetas",
            icono: `${iconoTwo}`,
            color: "#EA5455",
            link: "",
        },
        {
            nombre: "Contáctame",
            icono: `${iconoOne}`,
            color: "#0DC143",
            link: "https://api.whatsapp.com/send?phone=51938091040&text=Hola,%20sonqu.%20Te%20escribo%20desde%20tu%20sitio%20web...",
        },
    ];

    // useEffect para limpiar el estado de la ruta anterior
    /** useEffect(() => {
              return () => {
                  setActiveNav("");
              };
          }, [activeNav]); */

    return (
        <header id="header">
            <div className="logo">
                {/**<img src={logo} alt="imagen del logo" />
         * <h1><span>Sonqu</span></h1>
         */}
                <NavLink to="/">
                    <img src={logo} alt="imagen del logo" />
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active" : "")}
                            to="/"
                            end
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active" : "")}
                            to="/suscribete"
                            end
                        >
                            Suscríbete
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active" : "")}
                            to="/beneficios"
                            end
                        >
                            Beneficios
                        </NavLink>
                    </li>
                </ul>

                <div className="header-section-3">
                    <div className="botones-header-home">
                        {boton.map((botones, position) => {
                            return <Boton datos={botones} key={position} />;
                        })}
                    </div>

                    <div className="nav-togle">
                        {isOpen === true ? (
                            <ul>
                                <li>
                                    <NavLink
                                        end
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                        to="/"
                                    >
                                        Inicio
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        end
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                        to="/suscribete"
                                    >
                                        Suscríbete
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        end
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                        to="/beneficios"
                                    >
                                        Beneficios
                                    </NavLink>
                                </li>
                            </ul>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className="menu-toogle">
                        
                        {isOpen === false ? (
                        <CgMenu onClick={() => setIsOpen(!isOpen)} />

                        ) : (
                            <CgCloseO onClick={() => setIsOpen(!isOpen)}/>
                        )}
                    </div>
                </div>
            </nav>

            <a
                className="header-boton-subir"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                ref={scrollRef}
            >
                <BsFillArrowUpCircleFill />
            </a>
        </header>
    );
};

export default Header;

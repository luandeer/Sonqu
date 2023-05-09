import React from "react";
import Banner from "../components/banner/Banner";
import portada1 from "../assets/images/portada1.jpg";
import Videos from "../components/videos/Videos";
import ericHome from "../assets/images/fotoSonqu3.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import "../assets/scss/estilosHome.scss";
const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container-home-1">
                    <Banner portada={`${portada1}`} />
                </div>
                <div className="container-home-2">
                    <div className="container-home-2-div">
                        <img src={ericHome} alt="" /> 
                        <div className="home-titulo">
                            
                            <h1>Unete a la comunidad</h1>
                            <p>
                            ¡Se parte de este nuevo espacio web separado de Facebook! y aprovecha nuestros beneficios exclusivos por tan solo S/ 10.00 al mes.
                            </p>
                            <p  className="siguenos">Síguenos en:</p>
                            <div className="home-titulo-redes">
                                <a href="">
                                    <BsFacebook />
                                </a>
                                <a href="">
                                    <BsTiktok />
                                </a>
                                <a href="">
                                    <BsYoutube />
                                </a>
                                <a href="">
                                    <BsInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="home-botones">
                        <a href="">Quiero ser un suscriptor(a)</a>
                        <a href="">Beneficios de suscriptor(a)</a>
                        <a href="">Visita nuestras redes sociales</a>
                        <a href="">Ver mas recetas de sonqu</a>
                    </div>
                </div>

                <div className="container-home-videos">
                    <h1>Recetas Exclusivas</h1>
                    <Videos />
                </div>
            </section>
        </>
    );
};

export default Home;

import React from "react";
import Banner from "../components/banner/Banner";
import portada1 from "../assets/images/banner1.jpg";
//import Videos from "../components/videos/Videos";
import ericHome from "../assets/images/fotoSonqu3.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import { Link } from "react-router-dom";

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
                            <h1>¡Unete a la comunidad!</h1>
                            <p>
                                "Se parte de este nuevo espacio web separado de Facebook" y
                                aprovecha nuestros beneficios exclusivos por tan solo S/ 8.50
                                al mes.
                            </p>
                            <p className="siguenos">Síguenos en nuestras redes:</p>
                            <div className="home-titulo-redes">
                                <a href="https://www.facebook.com/Sonquoficial" target="_blank">
                                    <BsFacebook />
                                </a>
                                <a href="https://www.tiktok.com/@sonquoficial" target="_blank">
                                    <BsTiktok />
                
                                </a>
                                <a href="https://www.youtube.com/@sonqu" target="_blank">
                                    <BsYoutube />
                                </a>
                                <a href="https://www.instagram.com/sonqu.oficial/" target="_blank">
                                    <BsInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="home-botones">
                        <Link to="/suscribete">Quiero ser un suscriptor(a)</Link>
                        <Link to="/beneficios">Beneficios de suscriptor(a)</Link>
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbeacons.ai%2Fsonqu.oficial%3Ffbclid%3DIwAR3dckm6nIiCPHAXNB_2dwu2ztqmsOHConMjPbFMRuiuEbiTdhG5Sg8AG80&h=AT395r7ou25YxFB4Y2KFLncBO_RXZBt66_GEfFiDFW8VccEdpkHJiMOcvPHEMqs1YxGRAJF-jshXf4-jKnsXbRLKC5ZGeb3ZsGfWndrNGrEEgofBLq5ahtOm1ge1kuabqMi-HQ" target="_blank">Visita nuestras redes sociales</a>
                        <a href="https://www.youtube.com/@sonqu/videos" target="_blank">Ver mas recetas de sonqu</a>
                    </div>
                </div>

                {/**<div className="container-home-videos">
                    <h1>Recetas Exclusivas</h1>
                    
                </div> */}
            </section>
        </>
    );
};

export default Home;

import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import portada1 from "../assets/images/portada1.jpg";
import Videos from "../components/videos/Videos";

import "../assets/scss/estilosHome.scss";
const Home = () => {
    return (
        <>
            <div className="container-home">
                <Header />
                <Banner portada={`${portada1}`} />
                <div className="container-home-div">
                    <div className="home-titulo">
                        <h1>¡Hola familia, soy Sonqu!</h1>
                        <h2>Te doy la bienvenida a nuestro sitio web oficial </h2>
                    </div>
                    <p>
                        Aquí podrás acceder a tu suscripción, a los beneficios de convertirte en suscriptor, a todas nuestras redes sociales y a nuestras recetas exquisitas perfectas para ti. A un solo CLICK.
                    </p>
                    <div className="home-botones">
                        <a href="">Quiero ser suscriptor(a)</a>
                        <a href="">Beneficios por ser suscriptor(a)</a>
                        <a href="">Visita nuestras redes sociales</a>
                        <a href="">Ver mas recetas de sonqu</a>
                    </div>
                </div>
            </div>

            <div className="container-home-videos">
                <h1>Recetas Exclusivas</h1>
                <Videos />
            </div>
        </>
    );
};

export default Home;

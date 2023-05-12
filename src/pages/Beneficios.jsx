import React from "react";
import Banner from "../components/banner/Banner";
import portada1 from "../assets/images/banner2.jpg";
import beneficio1 from "../assets/images/beneficios/beneficio1.png";
import beneficio2 from "../assets/images/beneficios/beneficio2.png";
import beneficio3 from "../assets/images/beneficios/beneficio3.png";
import beneficio4 from "../assets/images/beneficios/beneficio4.png";
import beneficio5 from "../assets/images/beneficios/beneficio5.png";
import Izquierdo from "../components/beneficioIzquierdo/Izquierdo";
import Derecho from "../components/beneficioDerecho/Derecho";
import "../assets/scss/estilosBeneficio.scss";
import { Link } from "react-router-dom";

const Beneficios = () => {
  return (
    <section className="container-beneficios">
      <Banner portada={`${portada1}`} />
      <div className="container-beneficios-contenido">
        <h1 className="container-beneficios-contenido-text">
          Beneficios del suscriptor:
        </h1>
        <div className="container-beneficios-contenido-cajas">
        <Izquierdo
          imagen={`${beneficio1}`}
          titulo="Premios cada mes"
          descripcion="Sortearemos diversos premios como microondas, lavadoras, licuadoras y muchos más productos."
        />
        <Derecho
          imagen={`${beneficio2}`}
          titulo="Cupón de descuento exclusivo"
          descripcion="Tendras un buen descuento en los productos de Quality Products."
        />
        <Izquierdo
          imagen={`${beneficio3}`}
          titulo="Dos clases en vivo"
          descripcion="Para todos los colaboradores y sucriptores."
        />
        <Derecho
          imagen={`${beneficio4}`}
          titulo="Recomendarás recetas"
          descripcion="Podrás grabarte sugeriendo una receta y apareceras en el próximo video si deseas."
        />
        <Izquierdo
          imagen={`${beneficio5}`}
          titulo="Contribuirás a las donaciones de caridad"
          descripcion="Parte del dinero de tu suscripción sera donada o utilizada para realizar ayuda social."
        />
        </div>

        <Link className='beneficios-boton' to="/suscribete">¡Únete YA, que cada vez somos más!</Link>
      </div>
    </section>
  );
};

export default Beneficios;

import React from "react";
import Banner from "../components/banner/Banner";
import portada1 from "../assets/images/portada1.jpg";
import beneficio1 from "../assets/images/beneficiosImg/beneficio1.jpg";
import beneficio2 from "../assets/images/beneficiosImg/beneficio2.jpg";
import beneficio3 from "../assets/images/beneficiosImg/beneficios3.jpg";
import beneficio4 from "../assets/images/beneficiosImg/beneficio4.jpg";
import beneficio5 from "../assets/images/beneficiosImg/beneficio5.jpg";
import Izquierdo from "../components/beneficioIzquierdo/Izquierdo";
import Derecho from "../components/beneficioDerecho/Derecho";
import "../assets/scss/estilosBeneficio.scss";
const Beneficios = () => {
  return (
    <section className="container-beneficios">
      <Banner portada={`${portada1}`} />
      <div className="container-beneficios-contenido">
        <h1 className="container-beneficios-contenido-text">
          Beneficios del suscriptor:
        </h1>
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
    </section>
  );
};

export default Beneficios;

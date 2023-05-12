import React from 'react'
import '../assets/scss/estilosSuscribete.scss'
import Descripcion from '../components/descripcionSuscribete/Descripcion'
import Tarjetas from '../components/tarjetasDeBancos/Tarjetas'

import bancoNacion from '../assets/images/bancoNacion.jpg'
import bbva from '../assets/images/BBVA.jpg'
import bcp from '../assets/images/bcp.jpg'
import cajaHuancayo from '../assets/images/cajaHuancayo.jpg'
import interbank from '../assets/images/interbank.jpg'
import yapePlin from  '../assets/images/yapePlin.png'

const Suscribete = () => {

    const tarjetas = [
        {
            img: `${bancoNacion}`,
            descripcion: "Cuenta",
            numeroCuenta: "345 3067457335"
        },
        {
            img: `${bbva}`,
            descripcion: "Cuenta",
            numeroCuenta: "011 0814 0208249938"
        },
        {
            img: `${bcp}`,
            descripcion: "Cuenta",
            numeroCuenta: "41070493470017"
        },
        {
            img: `${cajaHuancayo}`,
            descripcion: "Cuenta",
            numeroCuenta: "107 0142 11002162992"
        },
        {
            img: `${interbank}`,
            descripcion: "Cuenta",
            numeroCuenta: "5463005054600"
        },
        {
            img: `${yapePlin}`,
            descripcion: "Número de teléfono",
            numeroCuenta: "923 996 816"
        }
    ];

    const cajas = [
        {
            descripcion: "Suscríbete solo en dos pasos: Realiza el pago y registra tus datos en el formulario."
        },
        {
            descripcion: "El costo mensual de la suscripción es de S/. 8.50 soles. "
        },
        {
            descripcion: "La suscripción dura un mes calendario. "
        },
        {
            descripcion: "Los suscriptores pueden ganar una vez al mes como máximo. "
        },
        {
            descripcion: "Los ganadores de cada sorteo, recibirán su premio asi no esten conectados. Todo será publicado."
        },
        {
            descripcion: "Los datos deben ser registrados de manera correcta. "
        },
        {
            descripcion: "Enviar la captura del pago(NECESARIO) al número de teléfono oficial(938 091 040). "
        }
    ];


    return (

        <section >
            <div className='container-suscribete-1'>
                <div className='container-suscribete-1-1'>
                    <h1 className='title-1'>¡Sonqu! Te da la bienvenida</h1>
                    
                    <iframe className='video' src="https://www.youtube.com/embed/S8HDfxBSa34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='container-suscribete-1-2'>
                    <h1 className='title-2'>¡Felicidades ya casi eres miembro de nuestra comunidad!</h1>
                    <p className='container-suscribete-1-parrafo'>Solo faltaría realizar el pago y registrar tus datos en nuestro formulario mediante el botón rojo y asi obtendrás todos los beneficios que ofrece Sonqu.</p>
                    <a className='container-suscribete-1-boton' href="https://forms.gle/5Ea4yKFKCXYdnxGp8" target='_blank'>Regístra tus datos Aquí</a>
                </div>
            </div>

            <div className="container-suscribete-2">
                <h1>Te dejo las recomendaciones que debes tener en cuenta:</h1>
                {
                    cajas.map((caja, position) => {
                        return <Descripcion parrafo={caja} key={position} />;
                    })
                }
            </div>

            <div className="container-suscribete-3">
                <h1>Medios de pago (a nombre de Eric Raul Layme Reginaldo)</h1>
                <div className='container-suscribete-3-tarjetas'>
                    {
                        tarjetas.map((tarjeta, position)=>{
                            return <Tarjetas imagen={tarjeta} key={position}></Tarjetas>;
                        })
                    }
                </div>

                <a className='container-suscribete-3-boton' href="https://api.whatsapp.com/send?phone=51938091040&text=Hola,%20sonqu.%20Voy%20a%20enviarte%20la%20captura%20del%20pago%20que%20acabo%20de%20hacer." target='_blank'>Envía captura del pago al whatsapp</a>
            </div>

        </section>
    )
}

export default Suscribete
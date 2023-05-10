import React from 'react'
import './footer.scss'
import {FaFacebookF} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

import logo from '../../assets/images/logo.png'

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-distributed">
            <img src={logo} alt="" />
            <div className="footer-right">

                <a href="https://www.facebook.com/Sonquoficial" target="_blank"><FaFacebookF/></a>
                <a href="https://www.tiktok.com/@sonquoficial" target="_blank"><FaTiktok/></a>
                <a href="https://www.youtube.com/@sonqu" target="_blank"><FaYoutube/></a>
                <a href="https://www.instagram.com/sonqu.oficial/" target="_blank"><FaInstagram/></a>

            </div>

            <div className="footer-left">
                
                <p className="footer-links">
                    <Link className="link-1" to="/">Inicio</Link>

                    <Link to="/suscribete">Suscríbete</Link>

                    <Link to="/beneficios">Beneficios</Link>

                    <a href="https://api.whatsapp.com/send?phone=51967502750&text=Hola,%20sonqu.%20Te%20escribo%20desde%20tu%20sitio%20web..." target="_blank">Whatsapp(se atiende de 8am-6pm)</a>
                </p>

                <p> copyright &copy; 2023 | Telmo P.</p>
            </div>

        </footer>
    )
}

export default Footer
import React from 'react';
import './footer.css';
import { FaArrowUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
      <footer className="container-foot">
        <div className="container-footer">
          <div>
            <h4>REDES SOCIALES</h4>
            <a href="https://github.com/JoelCAI/utnchallenge" target="__BLANK"><FaGithub/></a>
          </div>
          <div>
            <h4>¿QUIENES SOMOS?</h4>
            <p>Luciano Paulicci </p>
            <p>Lautaro Garcia Gimenez </p>
            <p>Joel Campos </p>
            <p>Franco Dujanoff </p>
            <p></p>
          </div>
          <div>
            <a href="#"><FaArrowUp /></a> 
          </div>
        </div>
        <div>
          <h5>Sitio web con copyright / Todos los derechos reservados</h5>
        </div>
      </footer>
    );
  }

export default Footer;
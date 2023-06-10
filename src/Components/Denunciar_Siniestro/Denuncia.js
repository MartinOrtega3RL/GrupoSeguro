import React, { useState } from "react";
import styled from "styled-components";
import AutoComponent from "./Auto_Denuncia";
import Camioneta from "./Camioneta_Denuncia";
import MotoDenuncia from "./Moto_Denuncia";
import CamionDenuncia from "./Camion_Denuncia";
import {FaCarSide} from "react-icons/fa";
import {FaTruckMonster} from "react-icons/fa";
import {FaMotorcycle} from "react-icons/fa";
import {FaTruckMoving} from "react-icons/fa";

const Title = styled.h1`
  padding: 2rem;
  margin-left: 3rem;
  padding: 8px;
  margin-top: 20px;

  color: #000;
  margin-bottom: 4rem;
  background-color: #ffc107;
  text-align: center;
`;

const Subtitle = styled.h4`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  color: #000;
  background: #009db2;
  text-align: center;
  margin-left: 4rem;
`;

const SmallSubtitle = styled.h4`
  align-self: center; /* Corregido: era flex-center */
  padding: 2rem;
`;

const Button = styled.button`
margin-left: 10vw;
  color: #fff;
  padding: 2rem 3rem;
  border-color: #009db2;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #ffc107;
  position: relative;
  overflow: hidden;
  z-index: 1;

  i {
    font-size: 40px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0; /* Cambiado a 0 para centrar correctamente */
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  &:hover i {
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  margin-left: 16vw;
  padding: 2rem;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
`;

export function ModuloInformacion() {
  const [componente, setComponente] = useState(null);

  const handleClick = (tipoInformacion) => {
    let nuevoComponente = null;

    switch (tipoInformacion) {
      case "informacion1":
        nuevoComponente = <AutoComponent  />;
        break;
      case "informacion2":
        nuevoComponente = <Camioneta />;
        break;
      case "informacion3":
        nuevoComponente = <MotoDenuncia />;
        break;
      case "informacion4":
        nuevoComponente = <CamionDenuncia />;
        break;
      default:
        break;
    }

    setComponente(nuevoComponente);
  };

  return (
    <Container>
      <Title>Denunciar siniestro</Title>
      <Subtitle>
        Si tuviste un siniestro, siempre y en todos los casos, tenés que
        realizar la denuncia en nuestra compañía dentro de las 72hs. de ocurrido
        el evento.
      </Subtitle>
      <SmallSubtitle>¿Cómo hacer la denuncia? Elige una opción:</SmallSubtitle>
      <Button onClick={() => handleClick("informacion1")}><FaCarSide size={40}/>
      </Button>
      <Button onClick={() => handleClick("informacion2")}> <FaTruckMonster size={40}/>
      </Button>
      <Button onClick={() => handleClick("informacion3")}> <FaMotorcycle size={40}/>
      </Button>
      <Button onClick={() => handleClick("informacion4")}> <FaTruckMoving size={40}/>
      </Button>
      {componente}
    </Container>
  );
}

export default ModuloInformacion;

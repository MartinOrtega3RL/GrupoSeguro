import React, { useContext } from "react";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CardStyle } from "../../Styles/ReusableStyles";
import avatar from "../avatar.png";
import { Contexto } from "../../context/context";

export default function Profile() {
  const { datos_cliente } = useContext(Contexto);

  const objetoConNombre = datos_cliente.find((objeto) =>
    objeto.hasOwnProperty("nombre")
  );
  const nombre = objetoConNombre ? objetoConNombre.nombre : "";

  const objApellido = datos_cliente.find((objeto) =>
    objeto.hasOwnProperty("apellido")
  );
  const apellido = objApellido ? objApellido.apellido : "";

  const objProvincia = datos_cliente.find((objeto) =>
    objeto.hasOwnProperty("nom_Provincia")
  );
  const Provincia = objProvincia ? objProvincia.nom_Provincia : "";

  return (
    <Section>
      <div className="image">
        <img src={avatar} alt="" />
      </div>
      <div className="title">
        <h2>
          {nombre}, {apellido}
        </h2>
        <h5>{Provincia}, Argentina</h5>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${CardStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;

    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  .title {
    text-align: center;

    h2,
    h5 {
      color: black;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
    }

    h5 {
      letter-spacing: 0.2rem;
    }
  }
`;

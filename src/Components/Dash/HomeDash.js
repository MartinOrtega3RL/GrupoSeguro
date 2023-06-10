import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { CardStyle } from "../../Styles/ReusableStyles";
import { FaCar } from "react-icons/fa";
import { Contexto } from "../../context/context";
import axios from "axios";

export default function Resumen() {
  const { datos_cliente, poliza } = useContext(Contexto);
  const [resumen, setResumen] = useState([]);
  const [ultimo_Pago, setUltimo_Pago] = useState("");
  const [cuotas_pagadas, setCuotas_Pagadas] = useState("");
  const [cantpendiente, setCantPendiente] = useState("");

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const urladd =
          "http://localhost/PHP/React/mypolice/src/Services/ObtenerPagos_Pend_Pag.php";

        const params = {
          num_Poliza: poliza,
        };

        const response = await axios.get(urladd, { params });
        const datos = response.data;

        const ultimo_Pago = datos[0].ultimo_Pago;
        const Cuotas_Pagadas = datos[0].Cuotas_Pagadas;
        const Cantidad_Factura_Pendientes =
          datos[0].Cantidad_Facturas_Pendientes;

        setUltimo_Pago(ultimo_Pago);
        setCantPendiente(Cantidad_Factura_Pendientes);
        setCuotas_Pagadas(Cuotas_Pagadas);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerDatos();
  }, []);

  const objetoAutos = datos_cliente.find((objeto) =>
    objeto.hasOwnProperty("cant_Vehiculos")
  );
  const autosAsegurados = objetoAutos ? objetoAutos.cant_Vehiculos : "";

  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Cuotas Pendientes</h5>
          <h2>{cantpendiente}</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <FaCar />
        </div>
        <div className="content">
          <h5>Vehiculos Asegurados</h5>
          <h2>{autosAsegurados}</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>Cuotas Pagadas</h5>
          <h2>{cuotas_pagadas}</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Ultimo Pago</h5>
          <h2>{ultimo_Pago}</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .analytic {
    ${CardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;

    &:hover {
      background-color: #ffc107;
      color: black;

      svg {
        color: black;
      }
    }

    .logo {
      background-color: white;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;

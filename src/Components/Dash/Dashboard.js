import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import FAQ from "./FAQ";
import Resumen from "./HomeDash";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Siniestro from "./Siniestros";
import Historial from "./Transfers";
import { Contexto } from "../../context/context";
import axios from "axios";

export default function Dashboard() {
  const { email, ObteneraDatos } = useContext(Contexto);

  useEffect(() => {
    const urladd =
      "http://localhost/PHP/React/mypolice/src/Services/obtenerDatos_Cliente.php";

    const params = {
      email: email,
    };

    axios
      .get(urladd, { params })
      .then((response) => {
        const datos = response.data;
        ObteneraDatos(datos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email, ObteneraDatos]);

  return (
    <Section>
      <Navbar /> {/*LISTO */}
      <div className="grid">
        <div className="row_one">
          <Resumen /> {/*Analisis de gastos o pagos */}
          <FAQ /> {/*Cuotas Faltantes o por Pagar*/}
        </div>
        <div className="row_two">
          <Historial /> {/*Reemplazar por cuotas pagadas */}
          <Siniestro />
          <Profile />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;

  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;

    .row_one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }

    .row_two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
`;

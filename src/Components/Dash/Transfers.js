import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatar from "../avatar.png";
import { CardStyle } from "../../Styles/ReusableStyles";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../context/context";
import axios from "axios";

export default function Historial() {
  const { poliza } = useContext(Contexto);
  const [pagos, setPagos] = useState([]);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const obtenerResumen = async () => {
      const urladd =
        "http://localhost/PHP/React/mypolice/src/Services/obtenerResumen.php";
      try {
        const response = await axios.get(urladd, {
          params: {
            num_Poliza: poliza,
          },
        });
        console.log(response.data);
        const datos = response.data;

        const Cuotas_Pagadas_Array = datos[0].Numero_de_Cuotas.split(", ");
        const Emision_Fecha = datos[0].Emision_Fecha.split(", ");
        const Monto = datos[0].monto_Total; // Sin los corchetes

        const Tus_Pagos = [];

        for (let i = 0; i < Cuotas_Pagadas_Array.length; i++) {
          const Numero_Cuota = Cuotas_Pagadas_Array[i];
          const Fecha_Emision = Emision_Fecha[i];
          const Monto_Pago = Monto;

          const pago = {
            Numero_Cuota,
            Fecha_Emision,
            Monto: Monto_Pago,
          };

          Tus_Pagos.push(pago);
        }

        setPagos(Tus_Pagos);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerResumen();
  }, []);

  console.log("Estás en TRANSFERS", pagos);

  return (
    <Section>
      <div className="title">
        <h2>Tus Pagos</h2>
      </div>
      <div className="transactions">
        {pagos.map((pago, index) => (
          <div className="transaction" key={index}>
            <div className="transaction__title">
              <div className="transaction__title__image">
                <img src={avatar} alt="" />
              </div>
              <div className="transaction__title__details">
                <h3>Cuota N°{pago.Numero_Cuota}</h3>
                <h5>{pago.Fecha_Emision}</h5>
              </div>
            </div>
            <div className="transaction__amount">
              <span>${pago.Monto}</span>
            </div>
          </div>
        ))}
      </div>
      <a className="view" onClick={() => handleLinkClick("/MisPagos")}>
        Ver todos <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
  ${CardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    h2 {
      color: black;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      &__title {
        display: flex;
        gap: 1rem;

        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }

        &__details {
        }
      }

      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 7rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;

        &:hover {
          background-color: #f7edb5;
          span {
            color: black;
          }
        }

        span {
          color: white;
        }
      }
    }
  }

  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;

    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }

    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;

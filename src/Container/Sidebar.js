import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaCreditCard } from "react-icons/fa";
import { FaAddressCard, FaCar } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const [linkActual, setLinkActual] = useState(1);
  const navigate = useNavigate();

  const handleLinkClick = (linkIndex, path) => {
    setLinkActual(linkIndex);
    navigate(path);
  };

  const logout = () =>{
    navigate("/")
  }

  if (location.pathname === "/" || location.pathname === "/Agente" || location.pathname==="/Admin" || location.pathname==="/Agente/Portada" || location.pathname==="/Agente/addClient" || location.pathname==="/Agente/ListarCliente"|| location.pathname==="/Agente/s") {
    return null;
  }

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaCar />
            <span>MiSeguro </span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => handleLinkClick(1, "/Dashboard")}
                className={linkActual === 1 ? "active" : ""}
              >
                <a>
                  <FaAddressCard />
                  <span>Inicio</span>
                </a>
              </li>
              <li
                onClick={() => handleLinkClick(2, "/Vehiculos")}
                className={linkActual === 2 ? "active" : ""}
              >
                <a>
                  <FaCar />
                  <span>Mis Vehiculos</span>
                </a>
              </li>
              <li
                onClick={() => handleLinkClick(3, "/MisPagos")}
                className={linkActual === 3 ? "active" : ""}
              >
                <a>
                  <FaCreditCard />
                  <span>Mis Pagos</span>
                </a>
              </li>
              <li
                onClick={() => handleLinkClick(4, "/Siniestros")}
                className={linkActual === 4 ? "active" : ""}
              >
                <a>
                  <FaCarCrash />
                  <span>Reportar Siniestro</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a>
            <FiLogOut />
            <span className="logout" onClick={() => logout()}>
              Desconectarse
            </span>
          </a>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Poppins", sans-serif;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    background-color: #da0037;
    cursor: pointer;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
`;

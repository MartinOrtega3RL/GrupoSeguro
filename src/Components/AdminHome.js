import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AgregarAgente from "./AgregarAgente";
import { animated, useSpring } from "react-spring";
import { CSSTransition } from "react-transition-group";
import ListaAgentes from "./ListaAgente";
import logo from "../Assets/Images/Logo.png";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bs-custom-color: #ffffff;
  }

  body {
    background-color: rgb(36, 42, 43);
  }

  .form-label {
    color: #f7f5f5;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    font-style: oblique;
  }

  .btn-primary {
    padding: 15px;
    margin-top: 20px;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .background::before {
    content: "";
    background: url("../Images/background.jpg") no-repeat center center fixed;
    background-size: cover;
    opacity: 0.3;
    filter: grayscale(30%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .active-component {
    background-color: rgb(42, 197, 202);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 1);
    border: 2px solid rgb(54, 54, 47);
    color: rgb(19, 109, 226);
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before {
    content: "";
    background: url("../Images/background.jpg") no-repeat center center fixed;
    background-size: cover;
    opacity: 0.3;
    filter: grayscale(30%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Navbar = styled.nav`
  &.navbar {
    background-color: var(--bs-custom-color);
    height: 100px;
    font-size: 20px;
  }

  .nav-link {
    color: black;
  }
`;

const AdminTitle = styled.a`
  &.navbar-brand {
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Title = styled.h2`
  margin-left: 3px;
  margin-bottom: 0;
`;

const Container = styled.div`
  &.AddAgentContainer {
    margin-top: 200px;
  }

  &.AddAgentContainer2 {
    margin-top: 400px;
  }
`;

const AnimatedDiv = styled(animated.div)`
  &.AgregarAgenteWrapper {
    /* Estilos para AgregarAgenteWrapper */
  }
`;

export function AdminHome() {
  const [mostrarAgregarAgente, setMostrarAgregarAgente] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const agregarAgenteAnimacion = useSpring({
    opacity: mostrarAgregarAgente ? 1 : 0,
    transform: mostrarAgregarAgente ? "scale(1)" : "scale(0)",
  });
  const linkRef = useRef(null);

  const handleMostrarAgregarAgente = () => {
    setMostrarAgregarAgente(!mostrarAgregarAgente);
  };

  return (
    <>
      <GlobalStyle />
      <Background className="background" />
      <Navbar className="navbar navbar-expand-lg navbar-ligth bg-custom">
        <div className="container-fluid">
          <div className="navbar-collapse ml-auto order-last" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <CSSTransition
                  nodeRef={linkRef}
                  in={activeElement === "Agregar agente"}
                  timeout={150}
                  classNames="fade"
                  unmountOnExit
                >
                  <a
                    ref={linkRef}
                    className="nav-link active-component"
                    href="/#"
                    onClick={() => {
                      handleMostrarAgregarAgente();
                      if (activeElement === "Agregar agente") {
                        setActiveElement(null);
                      } else {
                        setActiveElement("Agregar agente");
                      }
                    }}
                  >
                    Agregar Agente
                  </a>
                </CSSTransition>
                <CSSTransition
                  nodeRef={linkRef}
                  in={!activeElement || activeElement !== "Agregar agente"}
                  timeout={150}
                  classNames="fade"
                  unmountOnExit
                >
                  <a
                    ref={linkRef}
                    className="nav-link"
                    onClick={() => {
                      handleMostrarAgregarAgente();
                      setActiveElement("Agregar agente");
                    }}
                  >
                    Agregar Agente
                  </a>
                </CSSTransition>
              </li>
            </ul>
          </div>
          <div className="log-container">
            <div className="log">
              <div className="d-flex align-items-center">
                <Logo src={logo} alt="Mi Logo" />
                <Title className="ml-3 mb-0">GrupoSeguro</Title>
              </div>
            </div>
          </div>
          <AdminTitle className="navbar-brand order-last">
            Admin
          </AdminTitle>
          <Container className="container AddAgentContainer">
            <AnimatedDiv
              style={agregarAgenteAnimacion}
              className="AgregarAgenteWrapper"
            >
              {mostrarAgregarAgente && <AgregarAgente />}
            </AnimatedDiv>
          </Container>
          <Container className="container AddAgentContainer2">
            <AnimatedDiv
              style={agregarAgenteAnimacion}
              className="AgregarAgenteWrapper"
            >
              {mostrarAgregarAgente && <ListaAgentes />}
            </AnimatedDiv>
          </Container>
        </div>
      </Navbar>
    </>
  );
}

export default AdminHome;

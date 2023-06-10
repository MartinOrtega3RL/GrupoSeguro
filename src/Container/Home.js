import styled, { keyframes } from "styled-components";
import Logo from "../Assets/Images/Logo.png";
import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import Login from "../Components/Login";
import ContactForm from "../Components/Contactarnos";
import Historia from "../Components/Historia";
import AboutUs from "../Components/AboutUs";

const Container = styled.div`
  scroll-snap-type: x mandatory y mandatory;
`;

const Section = styled.section`
  scroll-snap-coordinate: start;
  min-height: 100vh;
`;

const LogoWrapper = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
`;

const Header = styled.header`
  padding: 0px 10px;
  background: white;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1111;
`;

const MainHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  overflow: hidden;

  ul {
    display: flex;
    list-style: none;
  }
`;

const NavItem = styled.li`
  padding: 5px 10px;
  border: none;
  display: inline-block;
  padding: 5px;
  transition: all linear 0.3s;
  margin-right: 20px;
  transition: 0.2s ease-in-out all;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 100px;
    padding: 5px;
    cursor: pointer;
  }

  &.Activo {
    border-bottom: 5px solid #f38a8a;
  }

  &.Inactivo {
    border-bottom: 5px transparent;
  }

  &:hover {
    border-bottom: 5px solid #f38a8a;
  }
`;

const AnimatedBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const InicioSection = styled(Section)`
  background: linear-gradient(to bottom right, #ff7e28, #e0a450);
  background-size: 400% 400%;
  animation: ${AnimatedBackground} 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    padding-top: 20vh;
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    opacity: 0.8;
    color: #fff;
    text-align: center;
    align-items: center;
  }
`;

const HistoriaSection = styled(Section)`
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
  background-size: 400% 400%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    padding-top: 20vh;
    font-size: 2rem;
    font-weight: bold;
    opacity: 0.8;
    color: #fff;
    text-align: center;
    align-items: center;
  }
`;

const PreguntasSection = styled(Section)`
  background: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
  background-size: 400% 400%;
  background-size: 400% 400%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContactarnosSection = styled(Section)`
  background: linear-gradient(
    to top,
    rgb(255, 8, 68) 0%,
    rgb(255, 177, 153) 100%
  );
  background-size: 400% 400%;
  background-size: 400% 400%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    opacity: 0.8;
    color: #fff;
    text-align: center;
    align-items: center;
  }
`;

const MiSeguroSection = styled(Section)`
  background: linear-gradient(
    103.3deg,
    rgb(253, 109, 104) 7.7%,
    rgb(248, 150, 105) 90.8%
  );
  background-size: 400% 400%;
  background-size: 400% 400%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    opacity: 0.8;
    color: #fff;
    text-align: center;
    align-items: center;
  }
`;

function Home() {
  const [selectedItem, setSelectedItem] = useState("Inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5
        ) {
          setSelectedItem(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const sections = document.querySelectorAll("section");
        const currentSectionIndex = Array.from(sections).findIndex(
          (section) => section.id === selectedItem
        );
        let nextSectionIndex;
        if (currentSectionIndex === sections.length - 1) {
          nextSectionIndex = 0;
        } else {
          nextSectionIndex = currentSectionIndex + 1;
        }
        const nextSectionId = sections[nextSectionIndex].id;
        setSelectedItem(nextSectionId);
        document.getElementById(nextSectionId).scrollIntoView({
          behavior: "smooth",
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const sections = document.querySelectorAll("section");
        const currentSectionIndex = Array.from(sections).findIndex(
          (section) => section.id === selectedItem
        );
        let prevSectionIndex;
        if (currentSectionIndex === 0) {
          prevSectionIndex = sections.length - 1;
        } else {
          prevSectionIndex = currentSectionIndex - 1;
        }
        const prevSectionId = sections[prevSectionIndex].id;
        setSelectedItem(prevSectionId);
        document.getElementById(prevSectionId).scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedItem]);

  return (
    <Container>
      <Header>
        <div className="container">
          <MainHead>
            <LogoWrapper>
              <h1>
                <img src={Logo} alt="Foto" /> Grupo Seguro
              </h1>
            </LogoWrapper>
            <Nav>
              <ul>
                <NavItem
                  className={selectedItem === "Inicio" ? "Activo" : "Inactivo"}
                >
                  <Link
                    activeClass="active"
                    to="Inicio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Inicio
                  </Link>
                </NavItem>
                <NavItem
                  className={
                    selectedItem === "Historia" ? "Activo" : "Inactivo"
                  }
                >
                  <Link
                    activeClass="active"
                    to="Historia"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Historia
                  </Link>
                </NavItem>
                <NavItem
                  className={
                    selectedItem === "Preguntas" ? "Activo" : "Inactivo"
                  }
                >
                  <Link
                    activeClass="active"
                    to="Preguntas"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Nosotros
                  </Link>
                </NavItem>
                <NavItem
                  className={
                    selectedItem === "Contactarnos" ? "Activo" : "Inactivo"
                  }
                >
                  <Link
                    activeClass="active"
                    to="Contactarnos"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contáctanos
                  </Link>
                </NavItem>
                <NavItem
                  className={
                    selectedItem === "MiSeguro" ? "Activo" : "Inactivo"
                  }
                >
                  <Link
                    activeClass="active"
                    to="MiSeguro"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Mi Seguro
                  </Link>
                </NavItem>
              </ul>
            </Nav>
          </MainHead>
        </div>
      </Header>
      <InicioSection id="Inicio">
        <h1>Bienvenido a GrupoSeguros</h1>
      </InicioSection>
      <HistoriaSection id="Historia">
        <Historia />
      </HistoriaSection>
      <PreguntasSection id="Preguntas">
        <AboutUs />
      </PreguntasSection>
      <ContactarnosSection id="Contactarnos">
        <ContactForm />
      </ContactarnosSection>
      <MiSeguroSection id="MiSeguro">
        <Login />
      </MiSeguroSection>
    </Container>
  );
}

export default Home;

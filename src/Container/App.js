import "../Styles/Style.css";
import Logo from "../Assets/Images/Logo.png";
import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import Login from "../Components/Login";
import ContactForm from "../Components/Contactarnos";
import Historia from "../Components/Historia";
import AboutUs from "../Components/AboutUs";

function App() {
  const [selectedItem, setSelectedItem] = useState("Inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.5 &&  //verifica si la parte superior es menor o igual 
        //al 50% de la altura de la ventana del navegador.
          rect.bottom >= window.innerHeight * 0.5
        ) {
          setSelectedItem(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll); //Agrega la Funcion del Scroll 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowDown") {   //Comprueba si la tecla arriba o abajo se Presiona
        e.preventDefault();
        const sections = document.querySelectorAll("section");
        const currentSectionIndex = Array.from(sections).findIndex(
          (section) => section.id === selectedItem
        );
        let nextSectionIndex;
        if (currentSectionIndex === sections.length - 1) {
          // Si se encuentra en la última sección, volver a la primera
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
          // Si se encuentra en la primera sección, ir a la última
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
    <div>
      <header>
        <div className="container">
          <div className="main-head">
            <div className="Logo">
              <h1>
                <img src={Logo} alt="Foto" /> Grupo Seguro
              </h1>
            </div>
            <nav className="nav">
              <ul>
                <li
                  className={selectedItem === "Inicio" ? "Activo" : "Inactivo"}
                >
                  <Link
                    to="Inicio"
                    smooth={false}
                    duration={400}
                    onClick={() => setSelectedItem("Inicio")}
                  >
                    Inicio
                  </Link>
                </li>
                <li
                  className={
                    selectedItem === "Historia" ? "Activo" : "Inactivo"
                  }
                >
                  <Link
                    to="Historia"
                    smooth={false}
                    duration={400}
                    onClick={() => setSelectedItem("Historia")}
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li
                  className={
                    selectedItem === "Preguntas" ? "Activo" : "Inactivo"
                  }
                >
                  <Link
                    to="Preguntas"
                    smooth={false}
                    duration={400}
                    onClick={() => setSelectedItem("Preguntas")}
                  >
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li
                  className={
                    selectedItem === "Contactarnos" ? "Activo" : "Inactivo"
                  }
                >
                  <Link
                    to="Contactarnos"
                    smooth={false}
                    duration={400}
                    onClick={() => setSelectedItem("Contactarnos")}
                  >
                    Contactarnos
                  </Link>
                </li>
                <li
                  className={
                    selectedItem === "MiSeguro" ? "Activo" : "Inactivo"
                  }
                >
                  <Link
                    to="MiSeguro"
                    smooth={false}
                    duration={400}
                    onClick={() => setSelectedItem("MiSeguro")}
                  >
                    MiSeguro
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Element name="Inicio">
        <section id="Inicio">
          <h1>Inicio</h1>
        </section>
      </Element>
      <Element name="Historia">
        <section id="Historia">
          <div>
            <h1>Sobre Nosotros</h1>
            <Historia/>
          </div>
        </section>
      </Element>
      <Element name="Preguntas">
        <section id="Preguntas">
          <AboutUs/>
        </section>
      </Element>
      <Element name="Contactarnos">
        <section id="Contactarnos">
          <ContactForm/>
        </section>
      </Element>
      <Element name="MiSeguro">
        <section id="MiSeguro">
          <Login/>
        </section>
      </Element>
    </div>
  );
}

export default App;

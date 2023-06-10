import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { animated, useSpring } from "react-spring";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 90vh;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(-50%, -50%);
`;

const Arrow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function AgregarAgente() {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [estado, setEstado] = useState(2);
  const [numberPhone, setNumberPhone] = useState("");
  const [calle, setCalle] = useState("");
  const [barrio, setBarrio] = useState("");

  const [showArrow, setShowArrow] = useState(false);
  const [arrowTimeout, setArrowTimeout] = useState(null);

  const handleAddAgentClick = () => {
    setShowArrow(true);
    if (arrowTimeout) clearTimeout(arrowTimeout); // Cancela el temporizador anterior (si existe)
    const newTimeout = setTimeout(() => setShowArrow(false), 500); // Establece un nuevo temporizador para ocultar la flecha
    setArrowTimeout(newTimeout);
  };

  const arrowAnimation = useSpring({
    to: {
      opacity: showArrow ? 1 : 0,
      transform: showArrow ? "translate(-50%, -50%)" : "translate(-200%, -50%)",
    },
    from: {
      opacity: 0,
      transform: "translate(-200%, -50%)",
    },
    config: {
      duration: 500,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //  Enviar los datos a una API o hacer algo más con ellos
    axios
      .post(
        "http://localhost/PHP/React/mypolice/src/Services/agregaragente.php",
        {
          data: {
            dni: dni,
            nombre: nombre,
            apellido: apellido,
            numberPhone: numberPhone,
            calle: calle,
            barrio: barrio,
            estado: estado,
            ciudad: ciudad,
            provincia: provincia,
            email: email,
            password: password,
          },
        }
      )
      .then((response) => {
        console.log(response); // Si la petición es exitosa, muestra la respuesta del servidor
      })
      .catch((error) => {
        console.error(error); // Si la petición falla, muestra el error en la consola
      });
  };

  return (
    <Container>
      <ArrowContainer className="arrow-container">
        <Arrow className="arrow">
          {showArrow && (
            <animated.div style={arrowAnimation}>
              <span role="img" aria-label="arrow" style={{ fontSize: "140px" }}>
                <i
                  className="fa-solid fa-right-to-bracket"
                  style={{ color: "#0b59e0" }}
                ></i>
              </span>
            </animated.div>
          )}
        </Arrow>
      </ArrowContainer>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group controlId="formDni">
          <Form.Label>Dni</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formContraseña">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formProvincia">
          <Form.Label>Provincia</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su Provincia"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formProvincia">
          <Form.Label>Calle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su Provincia"
            value={calle}
            onChange={(e) => setCalle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formCiudad">
          <Form.Label>Barrio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su ciudad"
            value={barrio}
            onChange={(e) => setBarrio(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formTelefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Telefono"
            value={numberPhone}
            onChange={(e) => setNumberPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleAddAgentClick}>
          Agregar datos
        </Button>
      </Form>
    </Container>
  );
}

export default AgregarAgente;

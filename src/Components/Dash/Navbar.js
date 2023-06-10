import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Contexto } from "../../context/context";

export default function Navbar() {
  const { datos_cliente } = useContext(Contexto);
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")


  useEffect(()=>{
    const objetoConNombre = datos_cliente.find((objeto) =>
    objeto.hasOwnProperty("nombre")
  );
  const nombre= objetoConNombre ? objetoConNombre.nombre : "";

  const objApellido = datos_cliente.find((objeto) =>
    objeto.hasOwnProperty("apellido")
  );
  const apellido = objApellido ? objApellido.apellido : "";

  console.log(nombre,apellido)


  },[nombre],[apellido])

  console.log(nombre,apellido)

  return (
    <Nav>
      <div className="Title">
        <h4>
          Hola {nombre}, {apellido}
        </h4>
        <h1>
          Bienvenido a <span>MiSeguro</span>
        </h1>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: black;

  .Title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
        font-family: "Poppins", sans-serif;
      }
    }
  }
`;

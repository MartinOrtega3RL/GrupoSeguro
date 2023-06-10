import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";

const ListContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export function ListaAgente() {
  const [agentes, setAgentes] = useState([]);

  useEffect(() => {
    fetchAgentes();
  }, []);

  const fetchAgentes = async () => {
    try {
      const response = await axios.get(
        "http://localhost/PHP/React/mypolice/src/Services/mostraragente.php"
      );
      console.log(response.data);
      setAgentes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListContainer className="List">
      <div className="d-flex align-items-center justify-content-center h-100 m-5">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="text-black">Dni</th>
              <th className="text-black">Nombre</th>
              <th className="text-black">Apellido</th>
              <th className="text-black">Correo</th>
              <th className="text-black">Calle</th>
              <th className="text-black">Barrio</th>
              <th className="text-black">Provincia</th>
              <th className="text-black">Ciudad</th>
              <th className="text-black">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {agentes.map((agente, index) => (
              <tr key={index}>
                <td className="text-black">{agente.dni}</td>
                <td className="text-black">{agente.nombre}</td>
                <td className="text-black">{agente.apellido}</td>
                <td className="text-black">{agente.cuenta_email}</td>
                <td className="text-black">{agente.calle}</td>
                <td className="text-black">{agente.barrio}</td>
                <td className="text-black">{agente.nom_Provincia}</td>
                <td className="text-black">{agente.nom_Ciudad}</td>
                <td className="text-black">{agente.telefono}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </ListContainer>
  );
}

export default ListaAgente;

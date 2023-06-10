import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Contexto } from "../context/context";
import axios from "axios";

const MisVehiculos = () => {
  const { tarjeta, setearIndex } = useContext(Contexto);

  const generarClaveAleatoria = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const url =
          "http://localhost/PHP/React/mypolice/src/Services/ObtenerDatos.php";
        const response = await axios.get(url);
        const datos = response.data;
        console.log(datos);
      } catch (error) {
        console.log(error);
      }
    };

    const indice = 2;

    obtenerDatos();

    setearIndex(indice);

    console.log(indice);
  }, []);

  return (
    <CardContainer>
      {tarjeta.map((tarjetas, index) => (
        <div key={generarClaveAleatoria()}>
          <Title>Cobertura vehiculo {index + 1}</Title>
          <DetailsContainer>
            <DetailItem>
              <Label>Titular:</Label>
              <Value>
                <h3>
                  {tarjetas.nombre}
                  {tarjetas.apellido}
                </h3>
              </Value>
            </DetailItem>
            <DetailItem>
              <Label>Agente:</Label>
              <Value>
                <h3>
                  {tarjetas.nombre_agente}
                  {tarjetas.apellido_agente}
                </h3>
              </Value>
            </DetailItem>
            <DetailItem>
              <Label>Agente N°:</Label>
              <Value>
                <h3>{tarjetas.num_Empleado}</h3>
              </Value>
            </DetailItem>
            <DetailItem>
              <Label>Vigencia:</Label>
              <Value>
                <h3>
                  {tarjetas.fecha_Inic} Hasta el {tarjetas.fecha_Fin}
                </h3>
              </Value>
            </DetailItem>
            <DetailItem>
              <Label>Marca y modelo:</Label>
              <Value>
                {tarjetas.marca} {tarjetas.descripcion}
              </Value>
            </DetailItem>
            <DetailItem>
              <Label>Tipo de Vehiculo:</Label>
              <Value>{tarjetas.tipo_Vehiculo}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Motor:</Label>
              <Value>{tarjetas.num_Motor}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Chasis:</Label>
              <Value>{tarjetas.num_Chasis}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Cobertura</Label>
              <Value>{tarjetas.tipo_Cobertura}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Patente:</Label>
              <Value>{tarjetas.patente}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Año:</Label>
              <Value>{tarjetas.modelo_Año}</Value>
            </DetailItem>
          </DetailsContainer>
        </div>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  background-color: #006db2;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 0;
`;

const DetailsContainer = styled.div`
  margin-top: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Value = styled.span`
  margin-left: 8px;
  font-size: 20px;
`;

export default MisVehiculos;

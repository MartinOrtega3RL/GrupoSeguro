import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top:40px;
  border: 1px solid #009db2;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-left: 2vw;
  padding: 2rem;
  height: 100%;
  background-color: #A9A9A9;

`;


const Title = styled.h1`
  font-size: 46px;
  margin-bottom:40px;
  

`;

const Subtitle = styled.h2`
  font-size: 30px;
  margin-bottom:30px;
  

`;

const ListItem = styled.li`
  font-size: 25px;
  margin-bottom:20px;
  

`;


export function AutoComponent  () {
  return (
    <Container>
      <Title>Auto</Title>
      <Subtitle>Realizar denuncia</Subtitle>
      <ul>
        <ListItem>Podés realizar tu denuncia de siniestro a través de los siguientes canales:</ListItem>
        <ListItem>Llamá al XXXX - XXX - XXXX de Lunes a Viernes de 8:00 a 20:00hs, donde un representante de la compañía tomará tu denuncia.</ListItem>
        <ListItem>Presencial en cualquiera de nuestras sucursales.</ListItem>
        <ListItem>Descargando nuestra APP Móvil a través de Google Play o APP Store, en la cual podrás contactarte con nuestro Centro de Atención al cliente para efectuar tu denuncia.</ListItem>
        <ListItem>Acudí a tu Productor Asesor de Seguros</ListItem>
      </ul>
    </Container>
  );
};

export default AutoComponent;
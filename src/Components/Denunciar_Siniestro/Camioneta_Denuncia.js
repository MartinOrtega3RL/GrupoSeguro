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


export function Camioneta() {
    return (
        <Container>
            <Title>Camioneta</Title>
            <Subtitle>Realizar denuncia</Subtitle>
            <ul>
                <ListItem>Si querés denunciar por primera vez:</ListItem>
                <ListItem>Llamá al XXXX - XXX - XXXX de Lunes a Viernes de 8:00 a 20:00hs</ListItem>
                <ListItem>De manera presencial en nuestras sucursales.</ListItem>
                <ListItem>Vía WhatsApp enviando un mensaje con tu DNI al +543704807968de Lunes a Viernes de 8:00 a 20:00hs.</ListItem>
                <ListItem>Completá el siguiente formulario</ListItem>
            </ul>
        </Container>
    )
}

export default Camioneta;
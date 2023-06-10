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


export function CamionDenuncia() {
    return (
        <Container>
            <Title>Camion</Title>
            <Subtitle>Realizar denuncia</Subtitle>
            <ul>
                <ListItem>Si querés denunciar por primera vez:</ListItem>
                <ListItem>Llamar al XXXX - XXX - XXXX de lunes a viernes de 8:00 a 20:00 horas. Nuestro equipo de representantes estará disponible para tomar tu denuncia de manera rápida y eficiente.</ListItem>
                <ListItem>Visitar cualquiera de nuestras sucursales y presentar tu denuncia en persona. Nuestro personal estará encantado de asistirte y brindarte el apoyo necesario.</ListItem>
                <ListItem>Consultar a tu Productor Asesor de Seguros. Ellos están capacitados para brindarte una atención personalizada y ayudarte con el proceso de denuncia de siniestro de tu camión.</ListItem>
                <ListItem>Recuerda que es importante realizar la denuncia dentro de las 72 horas posteriores al evento del siniestro. Estamos aquí para brindarte el respaldo y la asistencia necesaria durante este proceso.</ListItem>
            </ul>
        </Container>
    )
}

export default CamionDenuncia
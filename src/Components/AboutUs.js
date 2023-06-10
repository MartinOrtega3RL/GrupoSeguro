import React from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  padding: 50px 0;
`;

const AboutUsTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

const AboutUsDescription = styled.p`
  font-size: 28px;
  line-height: 1.5;
  text-align: justify;
`;

const ServicesTitle = styled.h3`
  font-size: 40px;
  margin-bottom: 28px;
  padding-left: 50px;
  text-align: center;
`;

const ServicesList = styled.ul`
  font-size: 28px;
  list-style-type: disc;
  padding-left: 0;
  margin-bottom: 20px;
  text-align: center;
`;

const ServicesListItem = styled.li`
  margin-bottom: 10px;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>Nosotros</AboutUsTitle>
      <AboutUsDescription>
        Somos una empresa dedicada a proporcionar soluciones en línea para
        facilitar la vida de las personas. Ofrecemos productos y servicios de
        alta calidad a precios asequibles. Desde nuestra fundación en el año
        2000, hemos ayudado a miles de clientes a alcanzar sus metas y objetivos.
      </AboutUsDescription>
      <div>
        <ServicesTitle>Nuestros Servicios</ServicesTitle>
        <ServicesList>
          <ServicesListItem>Brindamos todo tipo de seguro contra accidentes</ServicesListItem>
          <ServicesListItem>Atencion las 24 Horas del Dia</ServicesListItem>
          <ServicesListItem>Confianza a la hora de Asegurar tu Vehiculo</ServicesListItem>
        </ServicesList>
      </div>
    </AboutUsContainer>
  );
};

export default AboutUs;


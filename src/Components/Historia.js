import React from "react";
import styled from "styled-components";

const HistoriaContainer = styled.div`
  text-align: center;
  color: white;
`;

const HistoriaText = styled.h2`
  margin-bottom: 20px;
`;

const Historia = () => {
  return (
    <HistoriaContainer>
      <HistoriaText>
        En GrupoSeguro, nuestra misión es proteger a las familias y los
        vehículos de nuestros clientes. Nos enorgullece ser una aseguradora
        confiable y comprometida con la seguridad y el bienestar de la
        comunidad.
      </HistoriaText>
      <br />
      <HistoriaText>
        Fundada en 2023, GrupoSeguro ha crecido a lo largo de los años gracias a
        nuestro enfoque en el servicio al cliente y nuestra capacidad para
        ofrecer soluciones personalizadas de seguro de vehículos para cada
        cliente. Nos esforzamos por ser transparentes y claros en todo momento,
        lo que nos ha ganado la confianza de nuestros clientes y nos ha
        convertido en una de las empresas líderes en el mercado.
      </HistoriaText>
      <br />
      <HistoriaText>
        En GrupoSeguro, creemos en la importancia de la educación y el
        conocimiento. Por eso, nuestro equipo está formado por expertos en
        seguros y atención al cliente, que están siempre dispuestos a ayudar a
        nuestros clientes con cualquier duda o pregunta que puedan tener.
        Además, estamos comprometidos con la mejora continua y la innovación, lo
        que nos permite ofrecer soluciones de seguro de vehículos de última
        generación que se adaptan a las necesidades cambiantes de nuestros
        clientes.
      </HistoriaText>
    </HistoriaContainer>
  );
};

export default Historia;

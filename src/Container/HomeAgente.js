import React from "react";
import { Route, Routes } from "react-router-dom";
import Portada from "../Components/Carrousel";
import AddClient from "../Components/AddClient";
import ListarCliente from "../Components/ListarCliente";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SidebarAdmn from "../Components/SidebarAdmn";

const StyledHomeAgente = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
`;

const Background = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      270deg,
      rgba(176, 42, 42, 0.16) 0%,
      rgba(176, 42, 42, 0.56) 18.45%,
      rgba(176, 42, 42, 0.8) 49.67%,
      rgba(176, 42, 42, 0.56) 82.52%,
      rgba(176, 42, 42, 0.196364) 99.7%,
      rgba(189, 40, 40, 0) 99.71%,
      rgba(203, 56, 55, 0) 99.72%,
      rgba(203, 56, 55, 0.16) 99.73%
    ),
    url("https://static.npmjs.com/abf53a31b2da4657a1a004ee9358551c.png");
`;

export default function HomeAgente() {
  const location = useLocation();

  return (
    <Background>
      <StyledHomeAgente>
        <SidebarAdmn />
        <Content>
          <Routes>
            <Route path="" element={<Portada />} />
            <Route path="addClient" element={<AddClient />} />
            <Route path="ListarCliente" element={<ListarCliente />} />
          </Routes>
        </Content>
      </StyledHomeAgente>
    </Background>
  );
}

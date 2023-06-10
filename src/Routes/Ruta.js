import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "../Components/Prueba";
import Home from "../Container/Home";
import Dashboard from "../Components/Dash/Dashboard";
import MisVehiculos from "../Components/Tarjetas_Vehiculos";
import MisPagos from "../Components/MisPagos";
import ModuloInformacion from "../Components/Denunciar_Siniestro/Denuncia";
import Sidebar from "../Container/Sidebar";
import UserContext from "../context/userContext";
import HomeAgente from "../Container/HomeAgente.js";
import MercadoContext from "../context/MercadoContext";
import Mercadopago from "../Components/mp";
import AdminHome from "../Components/AdminHome";

function Ruta() {
  return (
    <BrowserRouter>
      <MercadoContext>
        <UserContext>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Prueba" element={<Prueba />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Vehiculos" element={<MisVehiculos />} />
            <Route path="/MisPagos" element={<MisPagos />} />
            <Route path="/Siniestros" element={<ModuloInformacion />} />
            <Route path="/mp" element={<Mercadopago />} />
            <Route path="/Admin" element={<AdminHome />} />
            <Route
              path="/Agente/*" // Agregamos el asterisco (*) al final de la ruta
              element={
                // Eliminamos el atributo "exact" ya que la ruta padre ahora tiene un asterisco
                <ProSidebarProvider>
                  <HomeAgente />
                </ProSidebarProvider>
              }
            ></Route>
          </Routes>
        </UserContext>
      </MercadoContext>
    </BrowserRouter>
  );
}

export default Ruta;

import React from "react";

const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <h2>Nosotros</h2>
          <p>
            Somos una empresa dedicada a proporcionar soluciones en línea para
            facilitar la vida de las personas. Ofrecemos productos y servicios
            de alta calidad a precios asequibles. Desde nuestra fundación en el
            año 2000, hemos ayudado a miles de clientes a alcanzar sus metas y
            objetivos.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="https://globalinvestmentwatch.com/how-does-a-car-insurance-protect-you/"
            alt="Imagen de Nosotros"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <h3>Nuestros Servicios</h3>
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
            <li>Servicio 4</li>
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <button className="btn btn-primary">Contáctanos</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

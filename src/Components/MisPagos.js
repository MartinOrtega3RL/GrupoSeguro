import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Contexto } from "../context/context";
import { mpContexto } from "../context/mpContext";

const MisPagos = () => {
  const { obtenerPreference } = useContext(mpContexto);
  const { poliza } = useContext(Contexto);
  const [cuotas, setCuotas] = useState([]);
  const navigate = useNavigate();

  const enviarDatos = (num_Factura) => {
    const params = {
      num_Factura: num_Factura,
    };
    axios
      .get("http://localhost/PHP/React/mypolice/src/Services/mercadopago.php", {
        params,
      })
      .then(function (response) {
        redireccionar();
        obtenerPreference(response.data.preferenceId);
        console.log(response.data.preferenceId);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          num_Poliza: poliza,
        };
        const response = await axios.get(
          "http://localhost/PHP/React/mypolice/src/Services/ObtenerCuotas.php",
          {
            params,
          }
        );
        setCuotas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [poliza]);

  const redireccionar = () => {
    return navigate("/mp");
  };

  return (
    <Container>
      <Title>Pagos</Title>
      <Subtitle>Forma de pago: Banco Caja de Ahorro XXX</Subtitle>
      <Divider />

      {cuotas.map((cuota) => (
        <Row key={cuota.num_Factura}>
          <TextContainer>
            <h3>Cuota de vencimiento</h3>
            <p>{cuota.fecha_Vencimiento}</p>
          </TextContainer>
          <ImporteContainer>
            <h3>Importe</h3>
            <p>{cuota.monto_Total}</p>
          </ImporteContainer>

          <ButtonContainer>
            {cuota.estado_Pago === "1" && (
              <Button className="paid">Pagado</Button>
            )}
            {cuota.estado_Pago === "0" && (
              <Button
                className="pay"
                onClick={() => enviarDatos(cuota.num_Factura)}
              >
                Pagar
              </Button>
            )}
            {cuota.estado_Pago === "0" && (
              <Button className="pending">Pendiente</Button>
            )}
          </ButtonContainer>
        </Row>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-left: 19vw;
  border-radius: 10px;
  padding: 1rem;
`;

const ImporteContainer = styled.div`
  text-align: center;
  flex: 1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Title = styled.h1`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  margin: 0;
  margin-top: 20px;
  text-align: center;
  background-color: #ffc107;
  color: #000;
  margin-bottom: 4rem;
`;

const Subtitle = styled.h4`
  margin-bottom: 1rem;
`;

const Divider = styled.hr`
  border-top: 3px solid #000;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;

  &.paid {
    background-color: green;
    color: #000;
  }

  &.pending {
    background-color: #ffc107;
    color: #000;
  }

  &.pay {
    background-color: red;
    color: #000;
    cursor: pointer;
  }
`;

export default MisPagos;

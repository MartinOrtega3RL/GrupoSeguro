import React from "react";
import styled from "styled-components";

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 15px;
  max-width: 900px;
  max-height: 700px;
  padding: 10px 50px;
`;

const Title = styled.h1`
  color: black;
  font-size: 2rem;
  margin-bottom: 20px;

  span {
    color: rgb(20, 185, 237);
  }
`;

const Input = styled.input`
  width: 100%;
  margin: 10px auto;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: 10px auto;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  height: 25px;
  width: 60px;
  align-items: center;
  border: none;
  background-color: rgb(20, 185, 237);
  color: black;
  cursor: pointer;
`;

const ContactText = styled.h3`
  margin-top: 20px;
  color: red;
`;

const Contactarnos = () => {
  return (
    <ContactForm>
      <Title>
        Contactate <span>Aqui</span>
      </Title>
      <Input type="text" name="Nombre" placeholder="Ingresa tu Nombre" />
      <Input type="text" name="Email" placeholder="abcd@gmail.com" />
      <Input type="text" name="Numero" placeholder="+54" />
      <TextArea name="Mensaje" cols="30" rows="10" placeholder="Escriba Aqui" />
      <Button type="submit">Enviar</Button>
      <ContactText>O contactate a través de 3704-xxxxxxx</ContactText>
    </ContactForm>
  );
};

export default Contactarnos;

import React from "react";
import styled from "styled-components";
import { FaCarCrash } from "react-icons/fa";
import {CardStyle} from "../../Styles/ReusableStyles";

export default function Siniestros() {
  return (
    <Section>
        <div className="logo"> 
            <FaCarCrash/>
        </div>
      <div className="title">
        <h1>Siniestros</h1>
        <h2>1</h2>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${CardStyle};
  .logo {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    svg {
      font-size: 4rem;
    }
  }

  .title {
    justify-content: center;
    text-align: center;
    h1 {
        color: black;

        font-family: "Poppins", sans-serif;
        letter-spacing: 0.3rem;
        font-size: 2rem;
      }
      h2{
        padding-top:4rem;
      }
  }

`;

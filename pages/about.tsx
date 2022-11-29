import React from "react";
import OtherBgs from "../components/OtherBgs/OtherBgs";
import { AboutSection } from "../styles/pageStyle";

const About = () => {
  return (
    <>
      <OtherBgs />
      <AboutSection>
        <div>
          <h2>Empresa</h2>
          <p>
            Nossa experiencia no ramo imobiliário está presente deste o inicio
            de uma obra até a assessoria na captação dos recursos para aquisição
            de sua casa, negocio ou investimento.
          </p>
          <p>
            A CASHBUID é capaz de oferecer oportunidades de investimento,
            instalação de um negócio próprio ou a melhor opção para sua moradia
            e conforto de sua família.
          </p>
          <p>
            Podemos lhe assessorar desde a compra de um imóvel ou até no
            planejamento financeiro para realização de um sonho. Com nossa
            experiencia nos mercados imobiliários e financeiros, podemos trazer
            grandes oportunidades além de uma assessoria completa naquilo que
            nos proporcionamos à fazer.
          </p>
        </div>
      </AboutSection>
    </>
  );
};

export default About;

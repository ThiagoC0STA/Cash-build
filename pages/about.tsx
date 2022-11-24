import React from "react";
import OtherBgs from "../components/OtherBgs/OtherBgs";
import { AboutSection } from "../styles/pageStyle";

const About = () => {
  return (
    <>
      <OtherBgs />
      <AboutSection>
        <div>
          <h2>Quem somos?</h2>
          <p>
            A CashBuild está há anos no ramo de imobiliária, e já conquistou a
            confiança de dezenas de clientes por todo o estado. Negócios
            intermediados pela CashBuild são garantia de segurança, bom
            atendimento e de um ótimo negócio. Você quer comprar ou vender?
            Procure-nos! Estamos prontos a proporcionar condições para que você
            feche negócio. Contamos com um time de consultores imobiliários
            experientes, uma excelente assessoria e acompanhamento financeiro
            para a satisfação de nossos clientes
          </p>
        </div>
      </AboutSection>
    </>
  );
};

export default About;

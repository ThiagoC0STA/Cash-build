import Image from "next/image";
import React from "react";
import { HomeBgImage } from "../E__export";
import { Background } from "./style";

const HomeBg = () => {
  return (
    <Background>
      <Image alt="Cidade" src={HomeBgImage} priority={true} />

      <div>
        <h1>Encontre a sua casa dos sonhos</h1>
        <p className="subtitle">
          Aqui na CashBuild nós temos os melhores imóveis com as melhores
          condições do mercado para você! Não perca tempo e viva do jeitinho que
          sempre quis.
        </p>
      </div>
    </Background>
  );
};

export default HomeBg;

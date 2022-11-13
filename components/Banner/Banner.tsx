import Image from "next/image";
import React from "react";
import { BannerImg } from "../E__export";
import { BannerElement } from "./style";

const Banner = () => {
  return (
    <BannerElement>
      <Image src={BannerImg} alt="banner" />

      <div>
        <h2>Encontre o melhor lugar para viver</h2>
        <p className="subtitle">
          Passe férias nos melhores hotéis e resorts encontre o ótimo lugar de
          sua escolha usando diferentes opções de pesquisa.
        </p>

        <button>Faça contato conosco</button>
      </div>
    </BannerElement>
  );
};

export default Banner;

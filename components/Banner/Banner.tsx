import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BannerImg } from "../E__export";
import { BannerElement } from "./style";

const Banner = () => {
  const router = useRouter();

  return (
    <BannerElement>
      <Image src={BannerImg} alt="banner" />

      <div>
        <h2>Encontre o melhor lugar para viver</h2>
        <p className="subtitle">
          Sabe aquele investimento imobiliário que á muito tempo habita seus
          pensamentos? Chegou a hora de transforma-lo em realidade.
        </p>

        <button onClick={() => router.push("/contact")}>
          Faça contato conosco
        </button>
      </div>
    </BannerElement>
  );
};

export default Banner;

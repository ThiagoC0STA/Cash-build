import Image from "next/image";
import React from "react";
import { BannerImg } from "../E__export";
import { BannerElement } from "./style";

const Banner = () => {
  return (
    <BannerElement>
      <Image src={BannerImg} alt="banner" />

      <div>
        <h2>Find Best Place For Living</h2>
        <p className="subtitle">
          Spend vacations in best hotels and resorts find the great place of
          your choice using different searching options.
        </p>

        <button>Faça contato conosco</button>
      </div>
    </BannerElement>
  );
};

export default Banner;

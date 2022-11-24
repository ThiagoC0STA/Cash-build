import Image from "next/image";
import React from "react";
import { HomeBgImage } from "../E__export";
import { Background } from "./style";

const HomeBg = () => {
  return (
    <Background>
      <Image alt="Casa de madeira" src={HomeBgImage} priority={true} placeholder="blur" />

      <div>
        <h1>Encontre a sua casa dos sonhos</h1>
        <p className="subtitle">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>
    </Background>
  );
};

export default HomeBg;

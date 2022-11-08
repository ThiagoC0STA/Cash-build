import Image from "next/image";
import React from "react";
import { HomeBgImage } from "../E__export";
import { Background } from "./style";

const HomeBg = () => {
  return (
    <Background>
      <figure>
        <Image
          alt="Casa de madeira"
          src={HomeBgImage}
          layout="fill"
          quality={100}
        />

        <figcaption>
          <div>
            <h1>Encontre a sua casa dos sonhos</h1>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
        </figcaption>
      </figure>
    </Background>
  );
};

export default HomeBg;

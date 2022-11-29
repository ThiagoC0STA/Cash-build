import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { BackgroundImage } from "../E__export";
import { Background, Texts } from "./style";

const OtherBgs = () => {
  const { current } = useContext(Contexts);
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    switch (current) {
      case "home":
        setPage("");
        break;
      case "about":
        setPage("Sobre Nós");
        break;
      case "properties":
        setPage("Nossos imóveis");
        break;
      case "contact":
        setPage("Contato");
        break;
    }
  }, [current]);

  return (
    <Background>
      <Image
        src={BackgroundImage}
        alt="papel de parede representando uma casa"
        priority={true}
        placeholder="blur"
      />

      <Texts>
        <h2>{page}</h2>

        <div>
          <p className="subtitle">Home / </p>
          <p className="subtitle">{page}</p>
        </div>
      </Texts>
    </Background>
  );
};

export default OtherBgs;

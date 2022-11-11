import React, { useContext } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Card, Container, Info, Recent } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Contexts } from "../../contexts/GlobalContext";
import { BlueDiv } from "../MainCities/style";
import { Bathroom, Bed, Car, Share } from "../E__export";

const RecentProperties = () => {
  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const { mainItems } = useContext(Contexts);

  return (
    <Recent>
      <h2>Propriedades Recentes</h2>
      <p className="subtitle">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
      <Container>
        <Slider {...settings}>
          {mainItems
            .slice(0, 6)
            .map(
              (
                {
                  name,
                  mainImage,
                  state,
                  price,
                  garages,
                  bathrooms,
                  bedrooms,
                  city,
                }: any,
                index: React.Key | null | undefined
              ) => (
                <div key={index}>
                  <Card>
                    <BlueDiv>{state}</BlueDiv>
                    <Image src={mainImage} alt="Imagem da cidade" />
                    <h3>{name}</h3>
                    <h4>
                      {price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h4>
                    <Info>
                      <div>
                        <figure>
                          <Image src={Car} alt="garagens" />
                          <figcaption>{garages}</figcaption>
                        </figure>
                        <figure>
                          <Image src={Bathroom} alt="Banheiros" />
                          <figcaption>{bathrooms}</figcaption>
                        </figure>
                        <figure>
                          <Image src={Bed} alt="Quartos" />
                          <figcaption>{bedrooms}</figcaption>
                        </figure>
                      </div>

                      <div>
                        <h5>{city}</h5>
                        <button>
                          <Image src={Share} alt="Compartilhar" />
                        </button>
                      </div>
                    </Info>
                  </Card>
                </div>
              )
            )}
        </Slider>
      </Container>
    </Recent>
  );
};

export default RecentProperties;

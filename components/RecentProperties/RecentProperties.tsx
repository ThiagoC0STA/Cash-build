import React, { useContext } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Card, Container, Info, Recent, BlueDiv } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Contexts } from "../../contexts/GlobalContext";
import { Bathroom, Bed, Car, Share } from "../E__export";
import { useRouter } from "next/router";

const RecentProperties = () => {
  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const { mainItems } = useContext(Contexts);
  const router = useRouter();

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
                  forRent,
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
                    <BlueDiv>{forRent ? "Para Alugar" : "Para Vender"}</BlueDiv>
                    <Image
                      onClick={() => router.push(`/property/${index}`)}
                      src={mainImage}
                      alt="Imagem da propriedade"
                    />
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
                          <Image
                            src={Car}
                            alt="garagens"
                            onClick={() => router.push(`/property/${index}`)}
                          />
                          <figcaption>{garages}</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src={Bathroom}
                            alt="Banheiros"
                            onClick={() => router.push(`/property/${index}`)}
                          />
                          <figcaption>{bathrooms}</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src={Bed}
                            alt="Quartos"
                            onClick={() => router.push(`/property/${index}`)}
                          />
                          <figcaption>{bedrooms}</figcaption>
                        </figure>
                      </div>

                      <div>
                        <h5>{city}</h5>
                        <button tabIndex={-1}>
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

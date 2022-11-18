import Image from "next/image";
import React, { useContext } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { FilterIcon } from "../E__export";
import { Cards, Carousel, Filters, PropertiesSection } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bathroom, Bed, Car, Share } from "../E__export";
import { Info, Card, BlueDiv } from "../RecentProperties/style";
import { useRouter } from "next/router";

const PropertiesComponent = () => {
  const { mainItems } = useContext(Contexts);
  const router = useRouter();
  console.log(router);

  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 3,
    dots: true,
    arrows: true,
  };

  return (
    <PropertiesSection>
      <Filters>
        <div>
          <Image src={FilterIcon} alt="Filtros" />
          <p>Filtrar por</p>
        </div>

        <div>
          <p>Todas as propriedades</p>
          <p>Para comprar</p>
          <p>Para alugar</p>
        </div>
      </Filters>

      <Carousel>
        <Slider {...settings}>
          {mainItems.map(
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
              <Cards key={index}>
                <Card>
                  <BlueDiv>{forRent ? "Para Alugar" : "Para Vender"}</BlueDiv>
                  <Image
                    src={mainImage}
                    alt="Imagem da cidade"
                    onClick={() => router.push(`/property/${index}`)}
                    style={{ cursor: "pointer" }}
                  />
                  <h3>{name}</h3>

                  <div className="price">
                    <h4>
                      {price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h4>

                    {forRent && <p>/mês</p>}
                  </div>

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
              </Cards>
            )
          )}
        </Slider>
      </Carousel>
    </PropertiesSection>
  );
};

export default PropertiesComponent;

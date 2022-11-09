import React from "react";
import Slider from "react-slick";
import { Cities } from "./Cities";
import { Card, CitiesDiv, CitiesSection } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const MainCities = () => {
  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 3,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <CitiesSection>
      <h2>Propriedades pela cidade</h2>
      <p className="subtitle">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
      <div className="container">
        <Slider {...settings}>
          {Cities.map(({ id, name, image, quantity }) => (
            <CitiesDiv key={id}>
              <Card>
                <div />
                <h3>{name}</h3>
                <p>
                  {quantity} {quantity === 1 ? "propriedade" : "propriedades"}
                </p>
                <Image src={image} alt="Imagem da cidade" quality={100} />
              </Card>
            </CitiesDiv>
          ))}
        </Slider>
      </div>
    </CitiesSection>
  );
};

export default MainCities;

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
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <CitiesSection>
      <h2>Localizações de nossas propriedades</h2>
      <p className="subtitle">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
      <div className="container">
        <Slider {...settings}>
          {Cities.map(({ id, name, image }) => (
            <CitiesDiv key={id}>
              <Card>
                <div />
                <h3>{name}</h3>
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

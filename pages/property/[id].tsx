import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { LocationIcon, RightArrow, Share } from "../../components/E__export";
import { Contexts } from "../../contexts/GlobalContext";
import {
  CarousselStyle,
  Item1,
  Item2,
  Items,
  Location,
  NameAndPrice,
  PropertyInfo,
  ShareIcon,
  StateProperty,
  StickyElement,
} from "../../styles/pageStyle";

const Property = () => {
  const { mainItems } = useContext(Contexts);
  const router: any = useRouter();
  const parametro = router.query.id;
  const [currentdiv, setCurrentdiv] = useState<object[]>();

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    dots: false,
    arrows: true,
  };

  useEffect(() => {
    mainItems.forEach((div: any, index: any) => {
      if (index == parametro) {
        setCurrentdiv([div]);
      }
    });
  }, [mainItems, parametro]);

  return (
    <div>
      {currentdiv &&
        currentdiv.map(
          (
            {
              name,
              mainImage,
              allImages,
              forRent,
              price,
              garages,
              bathrooms,
              bedrooms,
              city,
              address,
            }: any,
            index: any
          ) => (
            <PropertyInfo key={index}>
              <ShareIcon>
                <nav>
                  <Link href="/">Home</Link>
                  <Image src={RightArrow} alt=">" />
                  <Link href="/properties">Propriedades</Link>
                </nav>

                <button>
                  <Image src={Share} alt="compartilhar" />
                </button>
              </ShareIcon>

              <NameAndPrice>
                <h2>{name}</h2>

                <div>
                  <h3>
                    {price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h3>
                  {forRent && <h3>/mes</h3>}
                </div>
              </NameAndPrice>

              <StateProperty>
                <div>{forRent ? "Para Alugar" : "Para vender"}</div>
              </StateProperty>

              <Location>
                <Image src={LocationIcon} alt="Localização" />
                <p>{address + ", " + city}</p>
              </Location>

              <CarousselStyle>
                <Items>
                  <Item1>
                    <Slider
                      {...settings}
                      asNavFor={nav2}
                      ref={(slider1: any) => setNav1(slider1)}
                    >
                      <div>
                        <Image src={mainImage} alt="Imagem da propriedade" />
                      </div>

                      {allImages.map((item: any, index: any) => (
                        <div key={index}>
                          <Image src={item} alt="fotos da propriedade" />
                        </div>
                      ))}
                    </Slider>
                  </Item1>

                  <Item2>
                    <Slider
                      {...settings}
                      asNavFor={nav1}
                      ref={(slider2: any) => setNav2(slider2)}
                      swipeToSlide={true}
                      slidesToShow={4}
                      focusOnSelect={true}
                      arrows={false}
                    >
                      <div>
                        <Image src={mainImage} alt="Imagem da propriedade" />
                      </div>

                      {allImages.map((item: any, index: any) => (
                        <div key={index}>
                          <Image src={item} alt="fotos da propriedade" />
                        </div>
                      ))}
                    </Slider>
                  </Item2>
                </Items>

                <StickyElement>
                  <form action="">
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Email" />
                    <textarea>{`Olá, estou interessado no ${name}`}</textarea>
                    <div>
                      <button>Enviar</button>
                      <button>Ligar</button>
                    </div>
                  </form>
                </StickyElement>
              </CarousselStyle>
            </PropertyInfo>
          )
        )}
    </div>
  );
};

export default Property;

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { CloseIcon } from "../E__export";
import {
  Cards,
  Carousel,
  Filters,
  NotFound,
  PropertiesSection,
  ShareDiv,
} from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bathroom, Bed, Car, Share } from "../E__export";
import { Info, Card, BlueDiv } from "../RecentProperties/style";
import { useRouter } from "next/router";
import { PropertiesType } from "../../Types/Types";

const PropertiesComponent = () => {
  const {
    mainItems,
    districtSelected,
    setDistrictSelected,
    typeSelected,
    setTypeSelected,
    cities,
  } = useContext(Contexts);
  const [itemsCopy, setItemsCopy] = useState<PropertiesType[]>(mainItems);

  const [current, setCurrent] = useState<string>("all");

  const initialLink = "cashbuild.com.br";
  const [shareLink, setShareLink] = useState<string>("");

  const [modal, setModal] = useState<boolean>();

  const [filteredArray, setFilteredArray] = useState<PropertiesType[]>([]);

  useEffect(() => {
    const districtSelec: any = document.getElementById("districtSelec");
    const typeSelec: any = document.getElementById("typeSelec");

    districtSelec.value = districtSelected;
    typeSelec.value = typeSelected;
  }, [districtSelected, typeSelected]);

  useEffect(() => {
    const filtered = itemsCopy
      .filter(({ district }: any) => {
        if (districtSelected === district) {
          return true;
        } else if (districtSelected === "Todos os bairros") {
          return true;
        } else {
          return false;
        }
      })
      .filter(({ propertieType }: any) => {
        if (typeSelected === propertieType) {
          return true;
        } else if (typeSelected === "Todos os tipos") {
          return true;
        } else {
          return false;
        }
      });

    setFilteredArray(filtered);
  }, [districtSelected, itemsCopy, typeSelected]);

  const router = useRouter();

  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 3,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesPerRow: 2,
        },
      },
    ],
  };

  const handleFilter = (state: string) => {
    switch (state) {
      case "all":
        setItemsCopy(mainItems);
        setCurrent("all");
        break;
      case "buy":
        var buyCopy = mainItems;
        setItemsCopy(buyCopy.filter((item: any) => item.forRent === false));
        setCurrent("buy");
        break;
      case "rent":
        var rentCopy = mainItems;
        setItemsCopy(rentCopy.filter((item: any) => item.forRent === true));
        setCurrent("rent");
        break;
    }
  };

  const handleShare = (index: any) => {
    setModal(true);
    setShareLink(`${initialLink}/property/${index}`);
  };

  return (
    <PropertiesSection>
      <Filters>
        <div>
          <select
            id="districtSelec"
            onChange={(e) => setDistrictSelected(e.target.value)}
          >
            <option value="Todos os bairros">Todas os bairros</option>
            {cities.map((item: any, index: any) => (
              <option key={index}>{item}</option>
            ))}
          </select>

          <select
            id="typeSelec"
            onChange={(e) => setTypeSelected(e.target.value)}
          >
            <option value="Todos os tipos">Todos os tipos</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
          </select>
        </div>

        <div>
          <p
            className={current === "all" ? "selected" : ""}
            onClick={() => handleFilter("all")}
          >
            Comprar e Alugar
          </p>
          <p
            className={current === "buy" ? "selected" : ""}
            onClick={() => handleFilter("buy")}
          >
            Comprar
          </p>
          <p
            className={current === "rent" ? "selected" : ""}
            onClick={() => handleFilter("rent")}
          >
            Alugar
          </p>
        </div>
      </Filters>

      <Carousel>
        <Slider {...settings}>
          {filteredArray.length === 0 ? (
            <NotFound>Nenhum resultado encontrado</NotFound>
          ) : (
            filteredArray.map(
              (
                {
                  name,
                  mainImage,
                  forRent,
                  price,
                  garages,
                  bathrooms,
                  bedrooms,
                  district,
                }: PropertiesType,
                index: React.Key | null | undefined
              ): JSX.Element => (
                <Cards key={index}>
                  <Card>
                    <BlueDiv
                      style={
                        forRent
                          ? { background: "#4a60a1" }
                          : { background: "#00a325" }
                      }
                    >
                      {forRent ? "Para Alugar" : "Para Comprar"}
                    </BlueDiv>
                    <Image
                      src={mainImage}
                      alt="Imagem da cidade"
                      onClick={() => router.push(`/property/${index}`)}
                      style={{ cursor: "pointer" }}
                      placeholder="blur"
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
                        <h5>{district}</h5>
                        <button
                          tabIndex={-1}
                          onClick={() => handleShare(index)}
                        >
                          <Image src={Share} alt="Compartilhar" />
                        </button>
                      </div>
                    </Info>
                  </Card>
                </Cards>
              )
            )
          )}
        </Slider>
      </Carousel>

      {modal && (
        <ShareDiv>
          <div>
            <figure>
              <Image
                src={CloseIcon}
                alt="Fechar"
                onClick={() => setModal(false)}
              />
            </figure>
            <h3>Copie o link e compartilhe essa propriedade!</h3>
            <p>{shareLink}</p>
          </div>
        </ShareDiv>
      )}
    </PropertiesSection>
  );
};

export default PropertiesComponent;

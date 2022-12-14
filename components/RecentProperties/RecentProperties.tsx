import React, { useContext, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Card, ContainerCard, Info, Recent, BlueDiv } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Contexts } from "../../contexts/GlobalContext";
import { Bathroom, Bed, Car, CloseIcon, Share } from "../E__export";
import { useRouter } from "next/router";
import { ShareDiv } from "../PropertiesComponent/style";

const RecentProperties = () => {
  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const { mainItems } = useContext(Contexts);
  const router = useRouter();

  const initialLink = "cashbuild.com.br";
  const [shareLink, setShareLink] = useState<string>("");

  const [modal, setModal] = useState<boolean>();

  const handleShare = (index: any) => {
    setModal(true);
    setShareLink(`${initialLink}/property/${index}`);
  };

  return (
    <Recent>
      <h2>Propriedades Recentes</h2>
      <p className="subtitle">
        Fique de olho nas novidades que a CashBuild tem para você!
      </p>
      <ContainerCard>
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
                  district,
                }: any,
                index: React.Key | null | undefined
              ) => (
                <div key={index}>
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
                      onClick={() => router.push(`/property/${index}`)}
                      src={mainImage}
                      alt="Imagem da propriedade"
                      sizes="(max-width: 1400px) 30vw,
                      (max-width: 1200px) 35vw,
                      (max-width: 950px) 40vw,
                      (max-width: 800px) 44vw,
                      (max-width: 430px) 46vw,
                      25vw"
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
                        <button tabIndex={-1}>
                          <Image
                            src={Share}
                            alt="Compartilhar"
                            onClick={() => handleShare(index)}
                          />
                        </button>
                      </div>
                    </Info>
                  </Card>
                </div>
              )
            )}
        </Slider>
      </ContainerCard>
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
    </Recent>
  );
};

export default RecentProperties;

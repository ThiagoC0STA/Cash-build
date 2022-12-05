import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Bathroom,
  Bed,
  Car,
  LocationIcon,
  RightArrow,
} from "../../components/E__export";
import { Contexts } from "../../contexts/GlobalContext";
import {
  CarousselStyle,
  Item1,
  Item2,
  Items,
  Location,
  MobileForm,
  NameAndPrice,
  OverviewContainer,
  PropertyInfo,
  StateProperty,
  StickyElement,
  WayDiv,
} from "../../styles/pageStyle";

import emailjs from "@emailjs/browser";

const Property = () => {
  const { mainItems, width } = useContext(Contexts);
  const router: any = useRouter();
  const parametro = router.query.id;
  const [currentdiv, setCurrentdiv] = useState<object[]>();

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const [nameMail, setNameMail] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [propertyInterest, setPropertyInterest] = useState<string>("");

  const [submited, setSubmited] = useState<boolean>(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const templateParams = {
      from_name: nameMail,
      message: message,
      email: email,
      phone: phone,
      property_interest: propertyInterest,
    };

    emailjs
      .send(
        "service_63kzeqp",
        "template_qahsll9",
        templateParams,
        "ewwPm_JZCFVjijLZT"
      )
      .then(() => {
        setNameMail("");
        setEmail("");
        setPhone("");
        setMessage("");
        setPropertyInterest("");
        setSubmited(true);
      });
  };

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

  const settings2 = {
    speed: 700,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
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
              district,
              address,
              description,
            }: any,
            index: any
          ) => (
            <PropertyInfo key={index}>
              <WayDiv>
                <nav>
                  <Link href="/">Home</Link>
                  <Image src={RightArrow} alt=">" />
                  <Link href="/properties">Propriedades</Link>
                </nav>
              </WayDiv>

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
                <div>
                  <Image src={LocationIcon} alt="Localização" />
                  <p>{address + ", " + district}</p>
                </div>

                <div>
                  <figure>
                    <Image src={Bed} alt="Camas" width="22" height="22" />
                    <p>{bedrooms}</p>
                  </figure>
                  <figure>
                    <Image
                      src={Bathroom}
                      alt="Banheiros"
                      width="22"
                      height="22"
                    />
                    <p>{bathrooms}</p>
                  </figure>
                  <figure>
                    <Image src={Car} alt="Garagens" width="22" height="22" />
                    <p>{garages}</p>
                  </figure>
                </div>
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
                      {...settings2}
                      asNavFor={nav1}
                      ref={(slider2: any) => setNav2(slider2)}
                      swipeToSlide={true}
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

                {width >= 1300 && (
                  <StickyElement>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Nome"
                        value={nameMail}
                        onChange={(e) => setNameMail(e.target.value)}
                        required={true}
                      />
                      <input
                        type="tel"
                        placeholder="Telefone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required={true}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                      />
                      <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        required={true}
                        placeholder="mensagem"
                      />
                      <div>
                        <button
                          type="submit"
                          onClick={() => setPropertyInterest(`${name}`)}
                        >
                          Enviar
                        </button>
                      </div>
                      {submited === true && (
                        <p style={{ color: "green" }}>Obrigado pelo contato!</p>
                      )}
                    </form>
                  </StickyElement>
                )}
              </CarousselStyle>

              <OverviewContainer>
                <h3>Descrição</h3>
                <div />
                <p>{description}</p>
              </OverviewContainer>

              {width < 1300 && (
                <MobileForm>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Nome"
                      value={nameMail}
                      onChange={(e) => setNameMail(e.target.value)}
                      required={true}
                    />
                    <input
                      type="tel"
                      placeholder="Telefone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required={true}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={true}
                    />
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      required={true}
                      placeholder="mensagem"
                    />
                    <div>
                      <button
                        type="submit"
                        onClick={() => setPropertyInterest(`${name}`)}
                      >
                        Enviar
                      </button>
                    </div>
                    {submited === true && (
                      <p style={{ color: "green" }}>Obrigado pelo contato!</p>
                    )}
                  </form>
                </MobileForm>
              )}
            </PropertyInfo>
          )
        )}
    </div>
  );
};

export default Property;

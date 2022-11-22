import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { Container, SearchComponent, WhiteDiv } from "./style";

const Search = () => {
  const { setCitySelected, setTypeSelected, cities } = useContext(Contexts);
  const location = useRouter();

  const handleClick = async () => {
    const propertyLocation: any = document.getElementById("propertyLocation");
    const propertyType: any = document.getElementById("propertyType");

    await setCitySelected(propertyLocation.value);
    await setTypeSelected(propertyType.value);

    location.push("/properties");
  };

  return (
    <SearchComponent>
      <WhiteDiv>
        <Container>
          <div>
            <label htmlFor="propertyLocation">Localização</label>

            <select id="propertyLocation">
              <option value="Todas as cidades">Todas as cidades</option>
              {cities.map((item: any, index: any) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
        </Container>

        <Container className="line-before-content">
          <div>
            <label htmlFor="propertyType">Tipo da propriedade</label>

            <select id="propertyType">
              <option value="Todos os tipos">Todos os tipos</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
            </select>
          </div>
        </Container>

        <Container className="line-before-content buttondiv">
          <div>
            <button onClick={() => handleClick()}>Pesquisar</button>
          </div>
        </Container>
      </WhiteDiv>
    </SearchComponent>
  );
};

export default Search;

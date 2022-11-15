import React from "react";
import { SearchComponent, WhiteDiv } from "./style";

const Search = () => {
  return (
    <SearchComponent>
      <WhiteDiv>
        <div>
          <label htmlFor="location">Localização</label>

          <select id="location">
            <option>Selecione a sua cidade</option>
            <option value="Curitiba">Curitiba</option>
            <option value="São José">São José</option>
            <option value="Cajuru">Cajuru</option>
          </select>
        </div>

        <div>
          <label htmlFor="type">Tipo da propriedade</label>

          <select id="type">
            <option>Selecione o tipo</option>
          </select>
        </div>

        <div>
          <button>Pesquisar</button>
        </div>
      </WhiteDiv>
    </SearchComponent>
  );
};

export default Search;

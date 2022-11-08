import React from "react";
import { Header, HomeBg } from "../components/E__export";
import Search from "../components/Search/Search";
import { HomeDiv } from "../styles/pageStyle";

const Index = () => {
  return (
    <HomeDiv>
      <Header />

      <main>
        <HomeBg />
        <Search />
      </main>
    </HomeDiv>
  );
};

export default Index;

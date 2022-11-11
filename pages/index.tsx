import React from "react";
import Banner from "../components/Banner/Banner";
import { HomeBg, RecentProperties } from "../components/E__export";
import MainCities from "../components/MainCities/MainCities";
import Search from "../components/Search/Search";
import { HomeDiv } from "../styles/pageStyle";

const Index = () => {
  return (
    <HomeDiv>
      <main>
        <HomeBg />
        <Search />
        <MainCities />
        <RecentProperties />
        <Banner />
      </main>
    </HomeDiv>
  );
};

export default Index;

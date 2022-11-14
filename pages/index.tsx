import React from "react";
import Banner from "../components/Banner/Banner";
import { HomeBg, RecentProperties } from "../components/E__export";
import MainCities from "../components/MainCities/MainCities";
import Search from "../components/Search/Search";

const Index = () => {
  return (
    <>
      <main>
        <HomeBg />
        <Search />
        <MainCities />
        <RecentProperties />
        <Banner />
      </main>
    </>
  );
};

export default Index;

import React from "react";
import Slider from "react-slick";
import { Recent } from "./stykle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const RecentProperties = () => {
  return (
    <Recent>
      <h2>Propriedades Recentes</h2>
      <p className="subtitle">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
    </Recent>
  );
};

export default RecentProperties;

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { BlueIcon, WhiteIcon } from "../E__export";
import { HeaderComponent } from "./style";

const Header = () => {
  const { currentHeader, current } = useContext(Contexts);

  return (
    <HeaderComponent>
      <Link
        href="/"
        className="logo"
        style={
          currentHeader === "whiteHeader"
            ? { color: "#fff" }
            : { color: "#4A60A1" }
        }
      >
        {currentHeader === "whiteHeader" ? (
          <Image
            alt="icone cash build"
            src={WhiteIcon}
            width="40"
            height="40"
          />
        ) : (
          <Image alt="icone cash build" src={BlueIcon} width="40" height="40" />
        )}
        Cash Build
      </Link>

      <nav
        style={
          currentHeader === "whiteHeader"
            ? { color: "#fff" }
            : { color: "#000" }
        }
      >
        <Link className={current === "home" ? "selected" : ""} href="/">
          HOME
        </Link>
        <Link className={current === "about" ? "selected" : ""} href="/about">
          SOBRE NÓS
        </Link>
        <Link
          className={current === "properties" ? "selected" : ""}
          href="/properties"
        >
          PROPRIEDADES
        </Link>
        <Link
          className={current === "contact" ? "selected" : ""}
          href="/contact"
        >
          CONTATO
        </Link>
      </nav>
    </HeaderComponent>
  );
};

export default Header;

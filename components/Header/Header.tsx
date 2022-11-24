import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import {
  BlackMenuIcon,
  BlueIcon,
  CloseWhiteIcon,
  WhiteIcon,
  WhiteMenuIcon,
} from "../E__export";
import { HeaderComponent } from "./style";

const Header = () => {
  const { currentHeader, current, mobile } = useContext(Contexts);

  const [modal, setModal] = useState(false);

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

      {mobile && (
        <Image
          src={currentHeader === "whiteHeader" ? WhiteMenuIcon : BlackMenuIcon}
          onClick={() => setModal(!modal)}
          alt="menu"
        />
      )}

      <div
        className={mobile ? "mobileNav" : ""}
        style={modal ? { right: "0" } : { right: "-55vw" }}
      >
        {mobile && (
          <Image
            onClick={() => setModal(!modal)}
            src={CloseWhiteIcon}
            alt="fechar"
          />
        )}
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

          <Link
            className={current === "properties" ? "selected" : ""}
            href="/properties"
          >
            PROPRIEDADES
          </Link>

          <Link className={current === "about" ? "selected" : ""} href="/about">
            SOBRE NÓS
          </Link>

          <Link
            className={current === "contact" ? "selected" : ""}
            href="/contact"
          >
            CONTATO
          </Link>
        </nav>
      </div>
    </HeaderComponent>
  );
};

export default Header;

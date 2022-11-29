import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import {
  BlackMenuIcon,
  BlueIcon,
  CloseWhiteIcon,
  WhatsappIcon,
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
            className="close"
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
          <Link
            className={current === "home" ? "selected" : ""}
            href="/"
            onClick={() => setModal(false)}
          >
            HOME
          </Link>

          <Link
            className={current === "properties" ? "selected" : ""}
            href="/properties"
            onClick={() => setModal(false)}
          >
            IMÓVEIS
          </Link>

          <Link
            className={current === "about" ? "selected" : ""}
            href="/about"
            onClick={() => setModal(false)}
          >
            SOBRE NÓS
          </Link>

          <Link
            className={current === "contact" ? "selected" : ""}
            href="/contact"
            onClick={() => setModal(false)}
          >
            CONTATO
          </Link>

          <Link
            href="https://wa.me/554184024827"
            target="_blank"
            onClick={() => setModal(false)}
          >
            WhatsApp
            <Image src={WhatsappIcon} alt="Whatsapp" />
          </Link>
        </nav>
      </div>
    </HeaderComponent>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhiteIcon } from "../E__export";
import { HeaderComponent } from "./style";

const Header = () => {
  return (
    <HeaderComponent>
      <Link href="/" className="logo">
        <Image alt="icone cash build" src={WhiteIcon} width="40" height="40" />
        Cash Build
      </Link>

      <nav>
        <Link href="/">HOME</Link>
        <Link href="/about">SOBRE NÓS</Link>
        <Link href="/properties">PROPRIEDADES</Link>
        <Link href="/contact">CONTATO</Link>
      </nav>
    </HeaderComponent>
  );
};

export default Header;

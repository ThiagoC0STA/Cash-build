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
        <Link href="/contact">HOME</Link>
        <Link href="/contact">SOBRE NÓS</Link>
        <Link href="/contact">PROPRIEDADES</Link>
        <Link href="/contact">CONTATO</Link>
      </nav>
    </HeaderComponent>
  );
};

export default Header;

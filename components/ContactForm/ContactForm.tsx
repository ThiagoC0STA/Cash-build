import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Facebook, Instagram, Linkedin } from "../E__export";
import { FormComponent, MainDiv } from "./style";

const ContactForm = () => {
  const [submited, setSubmited] = useState<boolean>(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmited(true);
  };

  return (
    <FormComponent>
      <MainDiv>
        <div>
          <h2>Nos envie uma mensagem</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" required={true} />
            <input type="text" placeholder="Sobrenome" />
            <input type="email" required={true} placeholder="E-mail" />
            <input
              type="tel"
              maxLength={15}
              required={true}
              placeholder="Telefone"
            />
            <input
              type="text"
              required={true}
              placeholder="Digite sua mensagem"
            />
            <button>Enviar</button>
            {submited === true && <p>Obrigado pelo contato!</p>}
          </form>
        </div>

        <p>Ou</p>

        <div>
          <h2>Nos chame em nossas redes</h2>

          <nav>
            <Link href="/">
              <Image src={Facebook} alt="Facebook" width="30" height="30"/>
            </Link>
            <Link href="/">
              <Image src={Instagram} alt="Instagram" width="30" height="30" />
            </Link>
            <Link href="/">
              <Image src={Linkedin} alt="Linkedin" width="30" height="30" />
            </Link>
          </nav>
        </div>
      </MainDiv>
    </FormComponent>
  );
};

export default ContactForm;

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Facebook, Instagram, Linkedin } from "../E__export";
import { FormComponent, MainDiv } from "./style";

const ContactForm = () => {
  const [submited, setSubmited] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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
            <input
              type="text"
              placeholder="Nome"
              required={true}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Sobrenome"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              type="email"
              required={true}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="tel"
              maxLength={15}
              required={true}
              placeholder="Telefone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="text"
              required={true}
              placeholder="Digite sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button>Enviar</button>
            {submited === true && <p>Obrigado pelo contato!</p>}
          </form>
        </div>
      </MainDiv>
    </FormComponent>
  );
};

export default ContactForm;

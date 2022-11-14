import React, { useState } from "react";
import { FormComponent } from "./style";

const ContactForm = () => {
  const [submited, setSubmited] = useState<boolean>(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmited(true);
  };

  return (
    <FormComponent onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" required={true} />
      <input type="text" placeholder="Sobrenome" />
      <input type="email" required={true} placeholder="E-mail" />
      <input type="tel" maxLength={15} required={true} placeholder="Telefone" />
      <input type="text" required={true} placeholder="Digite sua mensagem" />
      <button>Enviar</button>
      {submited === true && <p>Obrigado pelo contato!</p>}
    </FormComponent>
  );
};

export default ContactForm;

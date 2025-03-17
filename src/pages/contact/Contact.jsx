import { Container, Form } from "./Contact.styles";
import { Input } from "./../../shared/components/input/Input";
import { Button } from "../../shared/components/button/Button";
import { TextArea } from "../../shared/components/TextArea/TextArea";
import { useRef, useState } from "react";
import axios from "axios";

const DEFAULT_FORM = {
  name: "",
  surname: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [form, setForm] = useState(DEFAULT_FORM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((_form) => {
      return {
        ..._form,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/contact", form);
      alert("mensaje enviado!!");
      setForm(DEFAULT_FORM);
    } catch (error) {
      console.error({ error });
      alert("error!!");
    }
  };

  return (
    <Container>
      <h1>Contacto</h1>

      <Form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="Apellidos"
          name="surname"
          value={form.surname}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextArea
          label="Mensaje"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
        <Button text="Enviar" />
      </Form>
    </Container>
  );
};

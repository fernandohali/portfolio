import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  Form,
  Input,
  TextArea,
  Select,
  Checkbox,
  Button,
} from "./Styles.js";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log("Dados do formulário enviados:", formData);
  };

  return (
    <Container>
      <Title>Entrar em contato</Title>
      <Subtitle>Contate-me</Subtitle>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="Primeiro nome"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Último nome"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Número de telefone"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <Select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          required
        >
          <option value="">Escolha um tópico</option>
          <option value="topic1">Tópico 1</option>
          <option value="topic2">Tópico 2</option>
          <option value="topic3">Tópico 3</option>
        </Select>
        <TextArea
          name="message"
          placeholder="Digite sua mensagem..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Checkbox>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
          />
          <span>Eu aceito os termos</span>
        </Checkbox>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

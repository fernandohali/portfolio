import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Title,
  Subtitle,
  Form,
  Input,
  TextArea,
  Select,
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
    console.log("Dados do formulário enviados:", formData);

    emailjs
      .send(
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            topic: "",
            message: "",
            acceptTerms: false,
          });
        },
        (err) => {
          console.log("ERRO", err);
        }
      );
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
          <option value="topic4">Outros</option>
        </Select>
        <TextArea
          name="message"
          placeholder="Digite sua mensagem..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

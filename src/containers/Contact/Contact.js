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
  NameContainer,
  MaskedInput,
  ContantContainer,
} from "./Styles.js";

// Função principal do componente de contato
export function Contact() {
  // Hook useState para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
    acceptTerms: false,
  });

  // Função para lidar com a mudança dos campos do formulário
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Atualiza o estado do formData com os novos valores dos campos
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário enviados:", formData);

    // Envia o formulário utilizando a biblioteca emailjs
    emailjs
      .send(
        "service_0mpvwrk", // ID do serviço do emailjs
        "template_w8ur8f9", // ID do template do emailjs
        formData,
        "X-cSeGjVwC4U1RmoP" // Chave pública do emailjs
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          // Limpa o formulário após o envio bem-sucedido
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

  // Renderiza o formulário de contato
  return (
    <Container>
      <Title>Entrar em contato</Title>
      <Subtitle>Contate-me</Subtitle>
      <Form onSubmit={handleSubmit}>
        <NameContainer>
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
        </NameContainer>
        <ContantContainer>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <MaskedInput
            mask="(99) 99999-9999"
            type="tel"
            name="phoneNumber"
            placeholder="Número de telefone"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </ContantContainer>

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
        <Button type="handleSubmit">Enviar</Button>
      </Form>
    </Container>
  );
}

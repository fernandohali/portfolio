import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  FormWrapper,
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

  const [isSubmitting, setIsSubmitting] = useState(false);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envia o formulário utilizando a biblioteca emailjs
      const response = await emailjs.send(
        "service_0mpvwrk", // ID do serviço do emailjs
        "template_w8ur8f9", // ID do template do emailjs
        formData,
        "X-cSeGjVwC4U1RmoP" // Chave pública do emailjs
      );

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

      alert("Mensagem enviada com sucesso!");
    } catch (err) {
      console.log("ERRO", err);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Renderiza o formulário de contato
  return (
    <Container>
      <FormWrapper>
        <Title>Vamos trabalhar juntos!</Title>
        <Subtitle>
          Pronto para transformar sua ideia em realidade? Entre em contato e
          vamos conversar sobre seu próximo projeto.
        </Subtitle>
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
            <option value="">Escolha um assunto</option>
            <option value="desenvolvimento-web">Desenvolvimento Web</option>
            <option value="aplicativo-mobile">Aplicativo Mobile</option>
            <option value="consultoria">Consultoria em Tecnologia</option>
            <option value="outros">Outros</option>
          </Select>
          <TextArea
            name="message"
            placeholder="Conte-me mais sobre seu projeto..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}

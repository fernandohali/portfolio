import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(247, 250, 252, 0.9) 100%
  );
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 80% 20%,
        rgba(102, 126, 234, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 20% 80%,
        rgba(118, 75, 162, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    order: 2;
  }
`;

export const AboutMe = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1a1a1a;
  position: relative;

  &:before {
    content: "Sobre Mim";
    position: absolute;
    top: -10px;
    left: 0;
    font-size: 0.9rem;
    color: #667eea;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    text-align: center;

    &:before {
      left: 50%;
      transform: translateX(-50%);
    }

    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  font-weight: 400;
  margin-bottom: 1.5rem;

  &:first-of-type {
    margin-top: 3rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

export const Img = styled.img`
  max-width: 450px;
  max-height: 500px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  object-fit: cover;

  &:hover {
    transform: translateY(-10px) rotate(-2deg);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    order: 1;
    max-width: 300px;
    max-height: 350px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    max-height: 300px;
  }
`;

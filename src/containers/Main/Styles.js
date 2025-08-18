import styled from "styled-components";

export const Container = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="25" cy="25" r="1" fill="rgba(102,126,234,0.03)"/><circle cx="75" cy="75" r="1" fill="rgba(118,75,162,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1rem;
    min-height: 80vh;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;
  position: relative;
  animation: fadeInUp 0.8s ease-out;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 3rem;
  }
`;

export const Name = styled.p`
  font-size: 1rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    text-align: center;

    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Profissao = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 2rem 0 1.5rem 0;
  color: #1a1a1a;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  .highlight {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      opacity: 0.3;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 1.5rem 0;
  }
`;

export const Sobremim = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 2.5rem;
  max-width: 500px;
  font-weight: 400;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-width: 160px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  a {
    color: inherit;
    font-weight: inherit;
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  max-width: 500px;
  max-height: 500px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    max-height: 250px;
  }
`;

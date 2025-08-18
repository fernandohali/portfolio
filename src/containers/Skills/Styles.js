import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(247, 250, 252, 0.9) 0%,
    rgba(255, 255, 255, 0.9) 100%
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
        circle at 20% 80%,
        rgba(102, 126, 234, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(118, 75, 162, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const MySkills = styled.p`
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const Experiencia = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #1a1a1a;
  position: relative;
  z-index: 2;

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 0;
  }
`;

export const BoxSkill = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

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
      rgba(102, 126, 234, 0.1),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.3);

    &:before {
      left: 100%;
    }
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  ${BoxSkill}:hover & {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 8px 16px rgba(102, 126, 234, 0.3));
  }
`;

export const TituloSkill = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 1px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${BoxSkill}:hover &:after {
    opacity: 1;
  }
`;

export const InforSkill = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #4a5568;
  font-weight: 400;

  a {
    color: #667eea;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      color: #764ba2;
      border-bottom-color: #764ba2;
    }
  }
`;

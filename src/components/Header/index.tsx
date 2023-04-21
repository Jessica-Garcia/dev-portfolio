import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import {
  Container,
  LinksContainer,
  LogoContainer,
  LogoLink,
  NavLink,
  SocialIcons,
  SocialIconsContainer,
} from "./styles";

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoLink href="/">
          <FaLaptopCode color="  rgba(255, 255, 255, 0.66)" />
          <span>Jéssica Garcia</span>
        </LogoLink>
      </LogoContainer>
      <LinksContainer>
        <li>
          <NavLink href="#projects">Projetos</NavLink>
        </li>
        <li>
          <NavLink href="#tech">Tecnologias</NavLink>
        </li>
        <li>
          <NavLink href="#about">Sobre</NavLink>
        </li>
      </LinksContainer>
      <SocialIconsContainer>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </Container>
  );
};

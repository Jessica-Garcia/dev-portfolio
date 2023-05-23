import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { Container, NavLink, SocialIconsContainer } from "./styles";

export const Header = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <FaLaptopCode color="rgba(255, 255, 255, 0.66)" />
          <span>Jéssica Garcia</span>
        </a>
      </div>
      <ul>
        <li>
          <NavLink href="/#about">Sobre</NavLink>
        </li>
        <li>
          <NavLink href="/#tech">Tecnologias</NavLink>
        </li>
        <li>
          <NavLink href="/#projects">Projetos</NavLink>
        </li>
      </ul>
      <SocialIconsContainer>
        <a href="https://github.com">
          <AiFillGithub size="3rem" />
        </a>
        <a href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </a>
      </SocialIconsContainer>
    </Container>
  );
};

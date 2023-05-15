import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FooterWrapper } from "./styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <div>
          <h4>Telefone</h4>
          <a href="tel:999-999-999">999-999-999</a>
        </div>
        <div>
          <h4>Email</h4>
          <a href="mailto:email@email.com">email@email.com</a>
        </div>
        <div>
          <h4>Redes Sociais</h4>

          <span>
            <a href="https://github.com">
              <AiFillGithub size="2rem" />
            </a>
            <a href="https://linkedin.com">
              <AiFillLinkedin size="2rem" />
            </a>
            <a href="https://instagram.com">
              <AiFillInstagram size="2rem" />
            </a>
          </span>
        </div>
      </ul>
    </FooterWrapper>
  );
};

import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/styles";
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
} from "./styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telefone</LinkTitle>
          <LinkItem href="tel:999-999-999">999-999-999</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:email@email.com">email@email.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Redes Sociais</LinkTitle>

          <SocialContainer>
            <SocialIcons href="https://github.com">
              <AiFillGithub size="2rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com">
              <AiFillLinkedin size="2rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size="2rem" />
            </SocialIcons>
          </SocialContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

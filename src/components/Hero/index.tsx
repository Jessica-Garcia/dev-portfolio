import React from "react";

import {
  ButtonBack,
  ButtonFront,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./styles";

export const Hero = (props: any) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-vindo(a) <br /> ao meu Portifólio!
        </SectionTitle>
        <SectionText>
          Sou Jéssica, desenvolvedora de software. Meu propósito é ajudar a
          facilitar a vida das pessoas através da tecnologia, para que todos
          possamos vivenciar experiências menos burocráticas e desfrutarmos de
          mais praticidade em nosso dia a dia.
        </SectionText>
        <ButtonBack>
          <ButtonFront
            onClick={() => (window.location = "https://linkedin.com")}
          >
            Saiba mais
          </ButtonFront>
        </ButtonBack>
      </LeftSection>
    </Section>
  );
};

import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { LeftSection } from "./styles";

export const Hero = (props: any) => {
  return (
    <Section>
      <LeftSection>
        <SectionTitle>
          Bem-vindo(a) <br /> ao meu Portifólio!
        </SectionTitle>
        <SectionText>
          Sou Jéssica, desenvolvedora de software. <br /> Meu propósito é ajudar
          a facilitar a vida das pessoas através da tecnologia, para que todos
          possamos vivenciar experiências menos burocráticas e desfrutarmos de
          mais praticidade em nosso dia a dia.
        </SectionText>
      </LeftSection>
    </Section>
  );
};

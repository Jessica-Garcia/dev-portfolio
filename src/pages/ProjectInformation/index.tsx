import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";

import {
  ButtonsContainer,
  FormContainer,
  ReturnButton,
  SaveButton,
} from "./styles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { FormContent } from "./components/FormContent";

export const ProjectInformation = () => {
  return (
    <Section>
      <SectionDivider />

      <SectionTitle>Cadastre um novo projeto</SectionTitle>

      <FormContent id="projectsForm" autoComplete="off"></FormContent>
      <ButtonsContainer>
        <ReturnButton onClick={() => navigate("/")}>Voltar</ReturnButton>
        <SaveButton form="projectsForm" type="submit">
          Salvar
        </SaveButton>
      </ButtonsContainer>
    </Section>
  );
};

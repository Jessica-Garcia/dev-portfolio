import { FormContent } from "./components/FormContent";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  NewProjectFormInputs,
  newProjectFormSchema,
} from "../../validations/ZodValidations";
import { useNavigate } from "react-router-dom";
import { ButtonsContainer, ReturnButton, SaveButton } from "./styles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

export const ProjectInformation = () => {
  const informationForm = useForm<NewProjectFormInputs>({
    resolver: zodResolver(newProjectFormSchema),
    defaultValues: {
      image: "",
      repoLink: "",
      webSiteLink: "",
      tags: "",
      status: "Em progresso",
    },
  });
  const { handleSubmit, reset } = informationForm;
  const navigate = useNavigate();

  return (
    <Section>
      <SectionDivider />
      <SectionTitle>Cadastre um novo projeto</SectionTitle>

      <FormProvider {...informationForm}>
        <FormContent id="projectsForm" autoComplete="off" />
      </FormProvider>

      <ButtonsContainer>
        <ReturnButton onClick={() => navigate("/")}>Voltar</ReturnButton>
        <SaveButton form="projectsForm" type="submit">
          Salvar
        </SaveButton>
      </ButtonsContainer>
    </Section>
  );
};

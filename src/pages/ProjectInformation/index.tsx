import { ButtonsContainer, ReturnButton, SaveButton } from "./styles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { FormContent } from "./components/FormContent";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const newProjectFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(5),
  image: z.string(),
  repoLink: z.string(),
  webSiteLink: z.string(),
  tags: z.string(),
  endDate: z.string(),
  status: z.enum(["Concluído", "Em progresso", "Pausado", "Futuro"]),
});

type NewProjectFormInputs = z.infer<typeof newProjectFormSchema>;

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
  /* const handleCreateProject = async (data: NewProjectFormInputs) => {
    const {
      description,
      title,
      image,
      repoLink,
      webSiteLink,
      tags,
      status,
      endDate,
    } = data;

    await createProject({
      description,
      title,
      image,
      repoLink,
      webSiteLink,
      tags,
      status,
      endDate,
    });

    reset();
  }; */
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

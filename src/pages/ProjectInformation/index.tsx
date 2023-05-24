import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  NewProjectFormInputs,
  newProjectFormSchema,
} from "../../validations/ZodValidations";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import {
  ButtonsContainer,
  FieldsContent,
  FormContainer,
  FormContentStyle,
  ReturnButton,
  SaveButton,
} from "./styles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { RadioButtons } from "./components/RadioButtons";
import { IProjectInformation } from "../../@types/IProjectInformation";

export const ProjectInformation = () => {
  const { createProject, updateProject } = useContext(ProjectsContext);
  const { control, register, watch, handleSubmit, reset } =
    useForm<NewProjectFormInputs>({
      resolver: zodResolver(newProjectFormSchema),
      defaultValues: {
        image: "",
        repoLink: "",
        webSiteLink: "",
        tags: "",
        status: "Em progresso",
      },
    });

  const status = watch("status");
  const id = Number(useParams());

  const navigate = useNavigate();

  const handleSaveProject = (data: NewProjectFormInputs) => {
    if (id) {
      updateProject(id, data);
    } else {
      createProject(data);
    }
    reset();
    navigate("/#projects");
  };

  return (
    <Section>
      <SectionDivider />
      <SectionTitle>Cadastre um novo projeto</SectionTitle>

      <FormContainer
        onSubmit={handleSubmit(handleSaveProject)}
        id="projectForm"
        autoComplete="off"
      >
        <FormContentStyle>
          <FieldsContent>
            <label htmlFor="title">Nome do Projeto*</label>
            <input
              {...register("title")}
              id="title"
              type="text"
              autoFocus
              required
            />
          </FieldsContent>
          <FieldsContent>
            <label htmlFor="image">URL da Imagem</label>
            <input {...register("image")} id="image" type="text" />
          </FieldsContent>
          <FieldsContent>
            <label htmlFor="tags">Tags</label>
            <input
              {...register("tags")}
              type="text"
              id="tags"
              placeholder="Adicione tags separadas por espaço"
            />
          </FieldsContent>
          <FieldsContent>
            <label htmlFor="webSiteLink">Link de deploy</label>
            <input {...register("webSiteLink")} id="webSiteLink" type="text" />
          </FieldsContent>
          <FieldsContent>
            <label htmlFor="repoLink">Link do repositório</label>
            <input {...register("repoLink")} type="text" id="repoLink" />
          </FieldsContent>
        </FormContentStyle>
        <FormContentStyle>
          <FieldsContent>
            <legend>Status</legend>
            <RadioButtons control={control} name="status" />
          </FieldsContent>
          <FieldsContent>
            <label htmlFor="endDate">Data de conclusão</label>
            <input
              type="date"
              {...register("endDate")}
              required={status === "Concluído"}
              id="endDate"
            />
          </FieldsContent>
          <FieldsContent>
            <label htmlFor="description">Descrição*</label>
            <textarea
              {...register("description")}
              required
              id="description"
            ></textarea>
          </FieldsContent>
        </FormContentStyle>
      </FormContainer>

      <ButtonsContainer>
        <ReturnButton onClick={() => navigate("/")}>Voltar</ReturnButton>
        <SaveButton form="projectForm">Salvar</SaveButton>
      </ButtonsContainer>
    </Section>
  );
};

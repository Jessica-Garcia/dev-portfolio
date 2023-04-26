import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";

import {
  StatusContent,
  ButtonsContainer,
  FieldsContainer,
  FieldsContent,
  FormContainer,
  FormContent,
  Indicator,
  InputElement,
  InputLabel,
  Item,
  LegendElement,
  ReturnButton,
  Root,
  TextAreaElement,
  SaveButton,
} from "./styles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ProjectsContext } from "../../contexts/ProjectsContext";

const newProjectFormSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  image: z.string(),
  repoLink: z.string(),
  webSiteLink: z.string(),
  tags: z.string(),
  endDate: z.string(),
  status: z.enum(["Concluído", "Em progresso", "Pausado", "Futuro"]),
});

type NewProjectFormInputs = z.infer<typeof newProjectFormSchema>;

export const ProjectInformation = () => {
  const { createProject } = useContext(ProjectsContext);
  const { control, register, handleSubmit, watch, reset } =
    useForm<NewProjectFormInputs>({
      resolver: zodResolver(newProjectFormSchema),
      defaultValues: {
        description: "",
        image: "",
        repoLink: "",
        webSiteLink: "",
        tags: "",
        status: "Em progresso",
      },
    });

  const navigate = useNavigate();
  const status = watch("status");
  const handleCreateProject = async (data: NewProjectFormInputs) => {
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
  };

  return (
    <Section>
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>Cadastre um novo projeto</SectionTitle>
      <br />
      <FormContainer>
        <FormContent
          id="projectsForm"
          onSubmit={handleSubmit(handleCreateProject)}
          autoComplete="off"
        >
          <FieldsContainer>
            <FieldsContent>
              <InputLabel htmlFor="title">Nome do Projeto</InputLabel>
              <InputElement
                {...register("title")}
                type="text"
                autoFocus
                required
              />
            </FieldsContent>

            <FieldsContent>
              <InputLabel htmlFor="image">URL da Imagem</InputLabel>
              <InputElement {...register("image")} type="text" />
            </FieldsContent>
            <FieldsContent>
              <InputLabel htmlFor="tags">Tags</InputLabel>
              <InputElement
                {...register("tags")}
                type="text"
                placeholder="Adicione tags separadas por espaço"
              />
            </FieldsContent>
            <FieldsContent>
              <InputLabel htmlFor="webSiteLink">Link de deploy</InputLabel>
              <InputElement {...register("webSiteLink")} type="text" />
            </FieldsContent>

            <FieldsContent>
              <InputLabel htmlFor="repoLink">Link do repositório</InputLabel>
              <InputElement {...register("repoLink")} type="text" />
            </FieldsContent>
          </FieldsContainer>
          <FieldsContainer>
            <FieldsContent>
              <LegendElement>Status</LegendElement>
              <Controller
                control={control}
                name="status"
                render={({ field }) => {
                  return (
                    <Root onValueChange={field.onChange} value={field.value}>
                      <StatusContent>
                        <Item value="Em progresso" id="Em progresso">
                          <Indicator />
                        </Item>
                        <InputLabel htmlFor="Em progresso">
                          Em andamento
                        </InputLabel>
                      </StatusContent>
                      <StatusContent>
                        <Item value="Concluído" id="Concluído">
                          <Indicator />
                        </Item>
                        <InputLabel htmlFor="Concluído">Concluído</InputLabel>
                      </StatusContent>

                      <StatusContent>
                        <Item value="Pausado" id="Pausado">
                          <Indicator />
                        </Item>
                        <InputLabel htmlFor="Pausado">Pausado</InputLabel>
                      </StatusContent>
                      <StatusContent>
                        <Item value="Futuro" id="Futuro">
                          <Indicator />
                        </Item>
                        <InputLabel htmlFor="Futuro">Futuro</InputLabel>
                      </StatusContent>
                    </Root>
                  );
                }}
              />
            </FieldsContent>
            <FieldsContent>
              <InputLabel htmlFor="endDate">Data de conclusão</InputLabel>
              <InputElement
                type="date"
                {...register("endDate")}
                required={status === "Concluído"}
              />
            </FieldsContent>
            <FieldsContent>
              <InputLabel htmlFor="description">Descrição</InputLabel>
              <TextAreaElement {...register("description")}></TextAreaElement>
            </FieldsContent>
          </FieldsContainer>
        </FormContent>
        <ButtonsContainer>
          <ReturnButton onClick={() => navigate("/")}>Voltar</ReturnButton>
          <SaveButton form="projectsForm" type="submit">
            Salvar
          </SaveButton>
        </ButtonsContainer>
      </FormContainer>
    </Section>
  );
};

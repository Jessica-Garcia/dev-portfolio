import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";

import {
  FieldsContent,
  FormContentStyle,
  Indicator,
  Item,
  Root,
} from "./styles";

import { useNavigate } from "react-router-dom";

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
export const FormContent = () => {
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
    <FormContentStyle id="projectsForm" autoComplete="off">
      <article>
        <FieldsContent>
          <label htmlFor="title">Nome do Projeto</label>
          <input {...register("title")} type="text" autoFocus required />
        </FieldsContent>

        <FieldsContent>
          <label htmlFor="image">URL da Imagem</label>
          <input {...register("image")} type="text" />
        </FieldsContent>
        <FieldsContent>
          <label htmlFor="tags">Tags</label>
          <input
            {...register("tags")}
            type="text"
            placeholder="Adicione tags separadas por espaço"
          />
        </FieldsContent>
        <FieldsContent>
          <label htmlFor="webSiteLink">Link de deploy</label>
          <input {...register("webSiteLink")} type="text" />
        </FieldsContent>

        <FieldsContent>
          <label htmlFor="repoLink">Link do repositório</label>
          <input {...register("repoLink")} type="text" />
        </FieldsContent>
      </article>
      <article>
        <FieldsContent>
          <legend>Status</legend>
          <Controller
            control={control}
            name="status"
            render={({ field }) => {
              return (
                <Root onValueChange={field.onChange} value={field.value}>
                  <div>
                    <Item value="Em progresso" id="Em progresso">
                      <Indicator />
                    </Item>
                    <label htmlFor="Em progresso">Em andamento</label>
                  </div>
                  <div>
                    <Item value="Concluído" id="Concluído">
                      <Indicator />
                    </Item>
                    <label htmlFor="Concluído">Concluído</label>
                  </div>

                  <div>
                    <Item value="Pausado" id="Pausado">
                      <Indicator />
                    </Item>
                    <label htmlFor="Pausado">Pausado</label>
                  </div>
                  <div>
                    <Item value="Futuro" id="Futuro">
                      <Indicator />
                    </Item>
                    <label htmlFor="Futuro">Futuro</label>
                  </div>
                </Root>
              );
            }}
          />
        </FieldsContent>
        <FieldsContent>
          <label htmlFor="endDate">Data de conclusão</label>
          <input
            type="date"
            {...register("endDate")}
            required={status === "Concluído"}
          />
        </FieldsContent>
        <FieldsContent>
          <label htmlFor="description">Descrição</label>
          <textarea {...register("description")}></textarea>
        </FieldsContent>
      </article>
    </FormContentStyle>
  );
};

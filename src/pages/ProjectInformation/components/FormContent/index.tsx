import { RadioButtons } from "../RadioButtons";
import { FieldsContent, FormContentStyle } from "./styles";
import { useFormContext } from "react-hook-form";
interface FormProps {
  id: string;
  autoComplete: string;
}

export const FormContent = ({ id, autoComplete }: FormProps) => {
  const { control, register, watch } = useFormContext();
  const status = watch("status");

  return (
    <FormContentStyle id={id} autoComplete={autoComplete}>
      <article>
        <FieldsContent>
          <label htmlFor="title">Nome do Projeto*</label>
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
          <RadioButtons control={control} name="status" />
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
          <label htmlFor="description">Descrição*</label>
          <textarea {...register("description")} required></textarea>
        </FieldsContent>
      </article>
    </FormContentStyle>
  );
};

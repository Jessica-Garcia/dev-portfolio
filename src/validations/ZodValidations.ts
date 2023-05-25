import * as z from "zod";

export const searchFormSchema = z.object({
  query: z.string().min(1),
});

export const newProjectFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string(),
  repoLink: z.string(),
  webSiteLink: z.string(),
  tags: z.string().max(60),
  endDate: z.string(),
  status: z.enum(["Concluído", "Em progresso", "Pausado", "Futuro"]),
});

export type SearchFormInputs = z.infer<typeof searchFormSchema>;
export type NewProjectFormInputs = z.infer<typeof newProjectFormSchema>;

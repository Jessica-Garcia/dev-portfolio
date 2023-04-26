export interface ICreateProjectInformationInput {
  title: string;
  description?: string;
  image?: string;
  repoLink?: string;
  webSiteLink?: string;
  tags?: string;
  status: "Concluído" | "Em progresso" | "Pausado" | "Futuro";
  endDate?: string;
}

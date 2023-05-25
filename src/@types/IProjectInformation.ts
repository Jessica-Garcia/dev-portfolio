export interface IProjectInformation {
  id?: string;
  title: string;
  description: string;
  image: string;
  repoLink: string;
  webSiteLink: string;
  tags: string;
  registrationDate: Date | undefined;
  status: "Concluído" | "Em progresso" | "Pausado" | "Futuro";
  endDate?: string;
}

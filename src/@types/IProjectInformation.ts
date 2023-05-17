export interface IProjectInformation {
  id: number;
  title: string;
  description: string;
  image: string;
  repoLink: string;
  webSiteLink: string;
  tags: string;
  registrationDate: Date;
  status: "Concluído" | "Em progresso" | "Pausado" | "Futuro";
  endDate?: string;
}

import { IProjectInformation } from "../../../../@types/IProjectInformation";
import { Container } from "./styles";

interface SlideContentProps {
  project: IProjectInformation;
}

export const ProjectSlideContent = ({ project }: SlideContentProps) => {
  return (
    <Container>
      <article>{project.title}</article>
      <img src={project.image} alt="" />
      <article>{project.tags}</article>
      <p>{project.description}</p>

      <article>
        <button>Visualizar</button>
        <button>Editar</button> <button>Excuir</button>
        <button>Repositório</button>
        <button>Web</button>
      </article>
      <article>
        <span>{project.status}</span> <span>{project.endDate}</span>
      </article>
    </Container>
  );
};

import { FaCheck, FaEye, FaGithub, FaPencilAlt } from "react-icons/fa";
import { IProjectInformation } from "../../../../@types/IProjectInformation";
import { dateFormatter } from "../../../../utils/formatter";
import { Container, Status, StatusContainer, Tag } from "./styles";
import { TbWorld } from "react-icons/tb";
import { DeleteModal } from "../../../DeleteModal";
import { useNavigate } from "react-router-dom";
interface SlideContentProps {
  project: IProjectInformation;
  deleteProject: (id: number) => Promise<void>;
}

export const ProjectSlideContent = ({
  project,
  deleteProject,
}: SlideContentProps) => {
  const onDeleteProject = () => {
    deleteProject(project.id);
  };
  const navigate = useNavigate();
  return (
    <Container>
      <h3>{project.title}</h3>
      <img src={project.image} alt="" />
      <div>
        {project.tags &&
          project.tags.split(" ").map((tag, i) => {
            return (
              <Tag variant={Math.floor(Math.random() * 13)} key={i}>
                {tag}
              </Tag>
            );
          })}
      </div>
      <p>{project.description}</p>
      <section>
        <div>
          <button>
            <strong>
              <FaEye />
            </strong>
            Visualizar
          </button>
        </div>
        <div>
          <button onClick={() => navigate(`/information/update/${project.id}`)}>
            <strong>
              <FaPencilAlt />
            </strong>
            Editar
          </button>
        </div>
        <div>
          <DeleteModal project={project} deleteProject={onDeleteProject} />
        </div>
        {project.webSiteLink && (
          <div>
            <button>
              <strong>
                <TbWorld />
              </strong>
              Web
            </button>
          </div>
        )}
        {project.repoLink && (
          <div>
            <button>
              <strong>
                <FaGithub />
              </strong>
              Repositório
            </button>
          </div>
        )}
        {project.status !== "Concluído" && (
          <div>
            <button>
              <FaCheck />
              Concluir
            </button>
          </div>
        )}
      </section>
      <article>
        <StatusContainer>
          <Status variant={project.status}></Status>
          <strong>{project.status}</strong>
        </StatusContainer>
        {project.status === "Concluído" && project.endDate && (
          <span>{dateFormatter.format(new Date(project.endDate))}</span>
        )}
      </article>
    </Container>
  );
};

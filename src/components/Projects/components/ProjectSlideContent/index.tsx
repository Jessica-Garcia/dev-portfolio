import { FaCheck, FaEye, FaGithub, FaPencilAlt } from "react-icons/fa";
import { IProjectInformation } from "../../../../@types/IProjectInformation";
import { dateFormatter } from "../../../../utils/formatter";
import { Container, Status, StatusContainer, Tag } from "./styles";
import { TbWorld } from "react-icons/tb";
import { DeleteModal } from "../../../DeleteModal";
import { useNavigate } from "react-router-dom";
interface SlideContentProps {
  project: IProjectInformation;
  deleteProject: (id: string | undefined) => Promise<void>;
  updateProjectStatusToComplete: (
    project: IProjectInformation
  ) => Promise<void>;
}

export const ProjectSlideContent = ({
  project,
  deleteProject,
  updateProjectStatusToComplete,
}: SlideContentProps) => {
  const onDeleteProject = () => {
    deleteProject(project.id);
  };

  const onUpdateProjectStatusToComplete = () => {
    updateProjectStatusToComplete(project);
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
      {project.description.length >= 150 ? (
        <p>{project.description.substring(0, 150).concat("...")}</p>
      ) : (
        <p>{project.description}</p>
      )}

      <section>
        <div>
          <button onClick={() => navigate(`/information/view/${project.id}`)}>
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
            <a href={project.repoLink} target="_blank" rel="noreferrer">
              <button>
                <strong>
                  <TbWorld />
                </strong>
                Web
              </button>
            </a>
          </div>
        )}
        {project.repoLink && (
          <div>
            <a href={project.repoLink} target="_blank" rel="noreferrer">
              <button>
                <strong>
                  <FaGithub />
                </strong>
                Repositório
              </button>
            </a>
          </div>
        )}
        {project.status !== "Concluído" && (
          <div>
            <button onClick={onUpdateProjectStatusToComplete}>
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

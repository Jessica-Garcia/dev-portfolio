import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { IProjectInformation } from "../../@types/IProjectInformation";
import { api } from "../../lib/axios";
import { useNavigate, useParams } from "react-router-dom";
import { MainContainer, SectionButtons } from "./styles";
import {
  Status,
  StatusContainer,
  Tag,
} from "../../components/Projects/components/ProjectSlideContent/styles";
import { DeleteModal } from "../../components/DeleteModal";
import { FaArrowAltCircleLeft, FaGithub, FaPencilAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useCallback, useEffect, useState } from "react";

export const ViewProject = () => {
  const [project, setProject] = useState<IProjectInformation>();
  const { id } = useParams();
  const navigate = useNavigate();

  const getProject = useCallback(async () => {
    try {
      const { data } = await api.get<IProjectInformation>(`projects/${id}`);
      setProject(data);
    } catch (error) {
      console.log(error);
    }
  }, [setProject, id]);

  const deleteProject = useCallback(async () => {
    try {
      await api.delete<IProjectInformation>(`projects/${id}`);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleDeleteProject = () => {
    deleteProject();
    navigate("/");
  };

  useEffect(() => {
    getProject();
  }, [getProject]);

  return (
    <>
      {project && (
        <MainContainer id="projects">
          <SectionDivider />
          <div>
            <SectionTitle>Projeto {project.title}</SectionTitle>
          </div>
          <article>
            <section>
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
              <SectionButtons>
                <div>
                  <button onClick={() => navigate("/#projects")}>
                    <FaArrowAltCircleLeft />
                    Voltar
                  </button>
                </div>
                <div>
                  <button
                    onClick={() =>
                      navigate(`/information/update/${project.id}`)
                    }
                  >
                    <FaPencilAlt />
                    Editar
                  </button>
                </div>
                <div>
                  <DeleteModal
                    project={project}
                    deleteProject={handleDeleteProject}
                  />
                </div>
                {project.webSiteLink && (
                  <div>
                    <a href={project.repoLink} target="_blank" rel="noreferrer">
                      <button>
                        <TbWorld />
                        Web
                      </button>
                    </a>
                  </div>
                )}
                {project.repoLink && (
                  <div>
                    <a href={project.repoLink} target="_blank" rel="noreferrer">
                      <button>
                        <FaGithub />
                        Github
                      </button>
                    </a>
                  </div>
                )}
              </SectionButtons>
              <article>
                <StatusContainer>
                  <Status variant={project.status}></Status>
                  <strong>{project.status}</strong>
                </StatusContainer>
                {project.status === "Concluído" && project.endDate && (
                  <span>
                    {project.endDate.split("-").reverse().join("/") ||
                      project.endDate.split("-").reverse().join("/")}
                  </span>
                )}
              </article>
            </section>
          </article>
        </MainContainer>
      )}
    </>
  );
};

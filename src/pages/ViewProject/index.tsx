import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IProjectInformation } from "../../@types/IProjectInformation";
import { api } from "../../lib/axios";

import { useNavigate, useParams } from "react-router-dom";

import { MainContainer } from "../../components/Projects/styles";

import {
  Status,
  StatusContainer,
  Tag,
} from "../../components/Projects/components/ProjectSlideContent/styles";
import { DeleteModal } from "../../components/DeleteModal";
import { FaCheck, FaEye, FaGithub, FaPencilAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useCallback, useEffect, useState } from "react";
import { dateFormatter } from "../../utils/formatter";

interface ProjectProps {}

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
                  <button
                    onClick={() =>
                      navigate(`/information/update/${project.id}`)
                    }
                  >
                    <strong>
                      <FaPencilAlt />
                    </strong>
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
            </section>
          </article>
        </MainContainer>
      )}
    </>
  );
};

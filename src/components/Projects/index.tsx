import { MainContainer } from "./styles";
import {
  ButtonBack,
  ButtonFront,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IProjectInformation } from "../../@types/IProjectInformation";
import { api } from "../../lib/axios";
import { Slider, SliderProps, Slide } from "../Slider";
import { ProjectSlideContent } from "./components/ProjectSlideContent";
import { useNavigate } from "react-router-dom";
import { dateFormatter } from "../../utils/formatter";
import { useCallback } from "react";

interface ProjectProps {
  projects: IProjectInformation[];
  getProjects: () => Promise<void>;
}

export const Projects = ({ projects, getProjects }: ProjectProps) => {
  const settings: SliderProps = {
    grabCursor: true,
    slidesPerView: 2.2,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  };
  const navigate = useNavigate();

  const handleDeleteProject = async (id: string | undefined) => {
    await api.delete<IProjectInformation>(`projects/${id}`);
    getProjects();
  };

  const handleUpdateProjectStatusToComplete = useCallback(
    async (project: IProjectInformation) => {
      try {
        const date = new Date();
        await api.put<IProjectInformation>(`projects/${project.id}`, {
          ...project,
          status: "Concluído",
          endDate: `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`,
        });
        getProjects();
      } catch (error) {
        console.log(error);
      }
    },
    [getProjects]
  );

  return (
    <MainContainer id="projects">
      <SectionDivider />
      <div>
        <SectionTitle>Projetos</SectionTitle>
        <ButtonBack onClick={() => navigate("/information/insert")}>
          <ButtonFront>
            <AiOutlinePlusCircle title="Adicionar" />
            Novo Projeto
          </ButtonFront>
        </ButtonBack>
      </div>
      <article>
        <Slider settings={settings}>
          {projects.map((project) => {
            return (
              <Slide key={project.id}>
                <ProjectSlideContent
                  project={project}
                  deleteProject={handleDeleteProject}
                  updateProjectStatusToComplete={
                    handleUpdateProjectStatusToComplete
                  }
                />
              </Slide>
            );
          })}
        </Slider>
      </article>
    </MainContainer>
  );
};

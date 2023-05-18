import { useCallback, useContext, useEffect, useState } from "react";
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

export const Projects = () => {
  const [projects, setProjects] = useState<IProjectInformation[]>([]);

  const settings: SliderProps = {
    grabCursor: true,
    // centeredSlides: true,
    // loop: true,
    slidesPerView: 2.2,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  };

  const getProjects = useCallback(async () => {
    const response = await api.get<IProjectInformation[]>("projects");
    response.data && setProjects(response.data);
  }, []);

  const handleDeleteProject = async (id: number) => {
    await api.delete<IProjectInformation>(`projects/${id}`);
    getProjects();
  };

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <MainContainer id="projects">
      <SectionDivider />
      <div>
        <SectionTitle>Projetos</SectionTitle>
        <ButtonBack>
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
                />
              </Slide>
            );
          })}
        </Slider>
      </article>
    </MainContainer>
  );
};

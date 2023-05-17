import React, { useCallback, useContext, useEffect, useState } from "react";
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
    /* effect: "coverflow", */
    grabCursor: true,
    centeredSlides: true,
    loop: true,

    /* coverflowEffect: {
      rotate: 0,
      stretch: -10,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    }, */
    slidesPerView: 2.2,
    spaceBetween: 30,

    // navigation: true,
    pagination: {
      clickable: true,
    },
  };

  const getProjects = useCallback(async () => {
    const response = await api.get<IProjectInformation[]>("projects");
    response.data && setProjects(response.data);
  }, []);

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
                <ProjectSlideContent project={project} />
              </Slide>
            );
          })}
        </Slider>
      </article>
    </MainContainer>
  );
};

/* <Swiper>
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.id}>
              <article>{project.title}</article>
              <img src={project.image} alt="" />
              <article>{project.tags}</article>

              <article>
                <button>{project.repoLink}</button>
                <button>{project.webSiteLink}</button>
                <button>Editar</button> <button>Excuir</button>
              </article>
              <article>
                <span>{project.status}</span> <span>{project.endDate}</span>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper> */

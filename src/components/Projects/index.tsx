import React, { useContext } from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Status,
  StatusContainer,
  EndDate,
  Hr,
  ProjectsTitleContainer,
  SliderContainer,
  ImgContainer,
  Notice,
} from "./styles";
import {
  ButtonBack,
  ButtonFront,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { AiOutlinePlusCircle } from "react-icons/ai";

import "keen-slider/keen-slider.min.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaGitAlt,
  FaGithub,
  FaInternetExplorer,
  FaPencilAlt,
  FaPencilRuler,
  FaTrashAlt,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import { dateFormatter } from "../../utils/formatter";
import { defaultTheme } from "../../themes/default";

export const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  const [ref] = useKeenSlider<HTMLTableSectionElement>({
    loop: true,
    rtl: true,
    slides: {
      origin: 1,
      perView: 2,
      spacing: 10,
    },
  });
  const navigate = useNavigate();
  return (
    <Section id="projects">
      <SectionDivider />
      <br />
      <ProjectsTitleContainer>
        <SectionTitle>Projetos</SectionTitle>
        <ButtonBack>
          <ButtonFront
            onClick={() => {
              navigate(`/information/insert`);
            }}
          >
            <AiOutlinePlusCircle title="Adicionar" />
            Novo Projeto
          </ButtonFront>
        </ButtonBack>
      </ProjectsTitleContainer>
      {projects.length > 1 && (
        <Notice>
          Arraste para o lado <FaArrowRight />
        </Notice>
      )}
      <SliderContainer ref={ref} className="keen-slider">
        {projects.map(
          ({
            id,
            description,
            title,
            image,
            repoLink,
            webSiteLink,
            tags,
            status,
            endDate,
          }) => {
            return (
              <BlogCard key={id} className="keen-slider__slide number-slide1">
                <ImgContainer>
                  <Img src={image} />
                </ImgContainer>
                <TitleContent>
                  <HeaderThree>{title}</HeaderThree>
                </TitleContent>
                <CardInfo>{description}</CardInfo>

                <div>
                  <Hr />
                  <TitleContent>Tags</TitleContent>
                  <TagList>
                    {tags &&
                      tags.split(" ").map((tag, i) => {
                        return (
                          <Tag variant={i} key={i}>
                            {tag}
                          </Tag>
                        );
                      })}
                  </TagList>
                </div>
                <Hr />
                <UtilityList>
                  <ExternalLinks>
                    <FaPencilAlt />
                    Editar
                  </ExternalLinks>
                  <ExternalLinks>
                    <FaTrashAlt />
                    Excluir
                  </ExternalLinks>
                </UtilityList>
                <UtilityList>
                  <Link to={repoLink}>
                    <ExternalLinks>
                      <FaGithub />
                      GitHub
                    </ExternalLinks>
                  </Link>
                  <Link to={webSiteLink}>
                    <ExternalLinks>
                      <TbWorld />
                      Website
                    </ExternalLinks>
                  </Link>
                </UtilityList>

                <Hr />
                <TitleContent>Status</TitleContent>
                <StatusContainer>
                  <Status variant={status}>
                    <span></span> <strong>{status}</strong>
                  </Status>
                  {status === "Concluído" && (
                    <EndDate>{dateFormatter.format(new Date(endDate))}</EndDate>
                  )}
                </StatusContainer>
              </BlogCard>
            );
          }
        )}
      </SliderContainer>
    </Section>
  );
};

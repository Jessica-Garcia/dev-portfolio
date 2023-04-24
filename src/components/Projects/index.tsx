import React from "react";
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
} from "./styles";
import {
  ButtonBack,
  ButtonFront,
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "keen-slider/keen-slider.min.css";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const [ref] = useKeenSlider<HTMLTableSectionElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
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
      <SliderContainer ref={ref} className="keen-slider">
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => {
            return (
              <BlogCard key={id} className="keen-slider__slide number-slide1">
                <Img src={image} alt="" />
                <TitleContent>
                  <HeaderThree>{title}</HeaderThree>
                </TitleContent>
                <CardInfo>{description}</CardInfo>

                <div>
                  <Hr />
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => {
                      return <Tag key={i}>{tag}</Tag>;
                    })}
                  </TagList>
                </div>
                <Hr />
                <UtilityList>
                  <ExternalLinks href={visit}>GitHub</ExternalLinks>
                  <ExternalLinks href={source}>Website</ExternalLinks>
                </UtilityList>
                <Hr />
                <TitleContent>Status</TitleContent>
                <StatusContainer>
                  <Status>
                    <span></span> <strong>Concluído</strong>
                  </Status>
                  <EndDate>29/10/2020</EndDate>
                </StatusContainer>
              </BlogCard>
            );
          }
        )}
      </SliderContainer>
    </Section>
  );
};

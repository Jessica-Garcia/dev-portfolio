import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
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

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider />
      <br />
      <ProjectsTitleContainer>
        <SectionTitle>Projetos</SectionTitle>
        <ButtonBack>
          <ButtonFront>
            <AiOutlinePlusCircle title="Adicionar" />
            Novo Projeto
          </ButtonFront>
        </ButtonBack>
      </ProjectsTitleContainer>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => {
            return (
              <BlogCard key={id}>
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
      </GridContainer>
    </Section>
  );
};

import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./styles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider />
      <br />
      <SectionTitle>Projetos</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => {
            return (
              <BlogCard key={id}>
                <Img src={image} alt="" />
                <TitleContent>
                  <HeaderThree> {title}</HeaderThree>
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => {
                      return <Tag key={i}>{tag}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={visit}>Código</ExternalLinks>
                  <ExternalLinks href={source}>Visitar</ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          }
        )}
      </GridContainer>
    </Section>
  );
};

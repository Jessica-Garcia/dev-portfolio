import React from "react";
import { DiReact, DiFirebase } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMongodb, TbBrandNextjs } from "react-icons/tb";
import { FaJava, FaSalesforce } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List, ListItem, ListParagraph, ListTitle } from "./styles";

export const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Tecnologias</SectionTitle>
      <SectionText>
        Em minha trajetória pude conhecer diferentes tecnologias do mundo do
        desenvolvimento web, tanto no Back-end, quanto no Front-end.
      </SectionText>
      <List>
        <ListItem>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React</ListParagraph>
          <ListParagraph>Next</ListParagraph>
          <ListParagraph>LWC</ListParagraph>
          <ListParagraph>Visualforce</ListParagraph>
        </ListItem>
        <ListItem>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Java</ListParagraph>
          <ListParagraph>Node</ListParagraph>
          <ListParagraph>Apex</ListParagraph>
        </ListItem>
        <ListItem>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>Postgresql</ListParagraph>
          <ListParagraph>Mongodb</ListParagraph>
        </ListItem>
      </List>
    </Section>
  );
};

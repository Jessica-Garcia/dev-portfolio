import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
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
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./styles";

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
          <span>
            <DiReact title="React" size="4rem" />{" "}
            <FaSalesforce title="LWC" size="4rem" />{" "}
            <TbBrandNextjs title="Next" size="4rem" />
          </span>
        </ListItem>
        <ListItem>
          <ListTitle>Back-End</ListTitle>
          <span>
            <GrNode title="Node" size="4rem" />{" "}
            <FaSalesforce title="Apex" size="4rem" />
            <FaJava title="Java" size="4rem" />{" "}
          </span>
        </ListItem>
        <ListItem>
          <ListTitle>Databases</ListTitle>
          <span>
            <SiPostgresql title="Postgresql" size="3rem" />{" "}
            <TbBrandMongodb title="Mongodb" size="3rem" />
          </span>
        </ListItem>
      </List>
    </Section>
  );
};

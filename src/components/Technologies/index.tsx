import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List } from "./styles";

export const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Tecnologias</SectionTitle>
      <SectionText>
        Em minha trajetória pude conhecer diferentes tecnologias do mundo do
        desenvolvimento web, tanto no Back-end, quanto no Front-end.
      </SectionText>
      <List>
        <li>
          <h4>Front-End</h4>
          <p>CSS3</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Next</p>
        </li>
        <li>
          <h4>Back-End</h4>
          <p>Java</p>
          <p>Node</p>
          <p>Express</p>
        </li>
        <li>
          <h4>Databases</h4>
          <p>Postgresql</p>
          <p>Mongodb</p>
        </li>
      </List>
    </Section>
  );
};

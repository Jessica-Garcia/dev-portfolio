import { Container } from "./styles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

export const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>Sobre mim</SectionTitle>
      <SectionText>
        Mantenho-me sempre buscando conhecimento sobre a área tecnológica, para
        que dessa forma eu possa contribuir com o crescimento e inovação dos
        negócios.
      </SectionText>
      <Container>
        {TimeLineData.map((item, index) => {
          return (
            <li key={index}>
              <span>
                <h4>{item.year}</h4>
                <p> {item.text}</p>
              </span>
            </li>
          );
        })}
      </Container>
    </Section>
  );
};

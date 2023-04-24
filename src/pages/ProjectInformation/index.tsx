import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  StatusContent,
  ButtonsContainer,
  FieldsContainer,
  FieldsContent,
  FormContainer,
  FormContent,
  Indicator,
  InputElement,
  InputLabel,
  Item,
  LegendElement,
  ReturnButton,
  Root,
  TextAreaElement,
} from "./styles";
import {
  ButtonBack,
  ButtonFront,
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { useNavigate } from "react-router-dom";

export const ProjectInformation = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>Cadastre um novo projeto</SectionTitle>
      <br />
      <FormContainer>
        <FormContent autoComplete="off">
          <FieldsContainer>
            <FieldsContent>
              <InputLabel htmlFor="name">Nome do Projeto</InputLabel>
              <InputElement type="text" name="name" id="name" required />
            </FieldsContent>

            <FieldsContent>
              <InputLabel htmlFor="img">Imagem</InputLabel>
              <InputElement
                type="url"
                pattern=".*\.com.*"
                name="img"
                id="img"
              />
            </FieldsContent>
            <FieldsContent>
              <InputLabel htmlFor="tag">Tags</InputLabel>
              <InputElement type="text" name="tag" id="tag" list="tags" />
              <datalist id="tags">
                <option>Java</option>
                <option>React</option>
                <option>Node</option>
                <option>Mongo</option>
              </datalist>
            </FieldsContent>
            <FieldsContent>
              <InputLabel htmlFor="linkWeb">Link de deploy</InputLabel>
              <InputElement
                type="url"
                pattern=".*\.com.*"
                name="linkWeb"
                id="linkWeb"
              />
            </FieldsContent>

            <FieldsContent>
              <InputLabel htmlFor="linkRepo">Link do repositório</InputLabel>
              <InputElement
                type="url"
                pattern=".*\.com.*"
                name="linkRepo"
                id="linkRepo"
              />
            </FieldsContent>
          </FieldsContainer>
          <FieldsContainer>
            <FieldsContent>
              <LegendElement>Status</LegendElement>

              <Root defaultValue="inProgress">
                <StatusContent>
                  <Item value="inProgress">
                    <Indicator />
                  </Item>
                  <InputLabel htmlFor="inProgress">Em andamento</InputLabel>
                </StatusContent>
                <StatusContent>
                  <Item value="done">
                    <Indicator />
                  </Item>
                  <InputLabel htmlFor="done">Concluído</InputLabel>
                </StatusContent>

                <StatusContent>
                  <Item value="paused">
                    <Indicator />
                  </Item>
                  <InputLabel htmlFor="paused">Pausado</InputLabel>
                </StatusContent>
                <StatusContent>
                  <Item value="future">
                    <Indicator />
                  </Item>
                  <InputLabel htmlFor="future">Futuro</InputLabel>
                </StatusContent>
              </Root>
            </FieldsContent>
            <FieldsContent>
              <InputLabel htmlFor="endDate">Data de conclusão</InputLabel>
              <InputElement type="date" name="endDate" id="endDate" />
            </FieldsContent>
            <FieldsContent>
              <InputLabel htmlFor="description">Descrição</InputLabel>
              <TextAreaElement
                name="description"
                id="description"
                rows={6}
                cols={5}
                maxLength={200}
              ></TextAreaElement>
            </FieldsContent>
          </FieldsContainer>
        </FormContent>
        <ButtonsContainer>
          <ReturnButton onClick={() => navigate("/")}>Voltar</ReturnButton>
          <ButtonBack>
            <ButtonFront>Salvar</ButtonFront>
          </ButtonBack>
        </ButtonsContainer>
      </FormContainer>
    </Section>
  );
};

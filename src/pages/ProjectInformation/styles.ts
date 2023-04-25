import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const FormContainer = styled.div`
  //border: solid red 2px;
  margin: 0.5rem;
`;

export const Root = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Indicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00dbc4;
  }
`;

export const Item = styled(RadioGroup.Item)`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  box-shadow: 0 1px 5px #00dbc4;

  &:hover {
    background-color: #00dbc4;
  }
  &:focus {
    box-shadow: 0 0 0 2px #00dbc4;
  }
`;

export const FormContent = styled.form`
  padding: 1rem;

  //border: solid blue 2px;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
`;
export const FieldsContainer = styled.article`
  margin: 0.5rem;
  //padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  //border: solid blueviolet 2px;
`;
export const FieldsContent = styled.span`
  margin: 0.5rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  //border: solid green 2px;
`;

export const StatusContent = styled.div`
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  //border: solid green 2px;
  height: 28px;
`;
export const InputLabel = styled.label`
  margin: 0.5rem;
  //padding: 1rem;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.75);
  //border: solid pink 2px;
`;

export const InputElement = styled.input`
  margin: 0.5rem;
  padding: 1rem;

  //border: solid orange 2px;
`;
export const LegendElement = styled.legend`
  margin: 0.5rem;
  //padding: 1rem;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.75);

  //border: solid yellow 2px;
`;
export const TextAreaElement = styled.textarea`
  margin: 0.5rem;
  display: flex;
  height: 21.5rem;
  //border: solid brown 2px;
  resize: none;
`;

export const ButtonsContainer = styled.div`
  margin: 0.5rem;
  padding: 3.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  //border: solid yellowgreen 2px;
`;

export const ReturnButton = styled.button`
  border: none;
  gap: 1rem;
  font-size: 1.5rem;
  width: 15rem;
  height: 4rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  background: linear-gradient(270deg, #00dbc4 0%, #b13221 100%);
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const SaveButton = styled.button`
  border: none;
  gap: 1rem;
  font-size: 1.5rem;
  width: 15rem;
  height: 4rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);

  cursor: pointer;
  transition: 0.5s ease;
  position: relative;

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

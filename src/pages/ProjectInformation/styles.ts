import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const FormContainer = styled.div``;

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
  }

  @media ${(props) => props.theme.breakpoints.sm} {
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
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

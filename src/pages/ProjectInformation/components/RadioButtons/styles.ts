import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Root = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    height: 28px;
  }
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

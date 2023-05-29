import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 32px 0 0;
  margin: 0 auto;
  max-width: 1040px;

  div {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  article {
    //border: solid red 2px;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
  }
  p {
    display: flex;
    justify-content: center;
    text-align: justify;
    padding: 2rem;
    // border: solid blue 2px;
    height: max-content;
    max-height: 21.5rem;
    overflow: hidden;
  }
  img {
    width: 100%;
    max-width: 45rem;
    height: 25rem;
    background-size: cover;
  }
`;

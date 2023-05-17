import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;

  h4 {
    font-weight: 700;
    font-size: 3rem;
    line-height: 32px;

    color: #ffffff;
    margin-bottom: 1rem;
  }

  li {
    max-width: 320px;
    display: flex;
    flex-direction: column;

    span {
      &:hover {
        cursor: pointer;
      }
    }

    p {
      font-size: 18px;
      line-height: 30px;
      color: rgba(255, 255, 255, 0.75);
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

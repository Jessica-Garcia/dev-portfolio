import styled from "styled-components";

export const Container = styled.header`
  max-width: 1041px;
  width: 100%;
  height: 10rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  //border: solid red 2px;
  position: fixed;
  z-index: 10;
  background: ${(props) => props.theme.colors.background1};
  left: 0;
  right: 0;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    //border: solid green 2px;

    @media ${(props) => props.theme.breakpoints.sm} {
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    // border: solid blue 2px;

    a {
      display: flex;
      align-items: center;
      color: #ffffffbf;
      gap: 1rem;
      font-size: 1.8rem;
      font-weight: 700;
      width: 100%;

      &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const SocialIconsContainer = styled.article`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  align-items: center;

  width: 40%;

  a {
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 6px;

    &:hover {
      background-color: ${(props) => props.theme.colors.background2};
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  //border: solid 2px brown;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

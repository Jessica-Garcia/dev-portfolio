import styled from "styled-components";

export const Container = styled.ul`
  max-width: 1040px;
  background: transparent;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-left: 32px;
  margin-bottom: 80px;

  span {
    background: transparent;
    border-radius: 3px;
    width: 17rem;

    h4 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.02em;
      display: flex;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.02em;
      color: rgba(255, 255, 255, 0.75);
      padding-right: 16px;
    }
  }

  &:first-of-type {
    margin-left: 0px;
  }

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

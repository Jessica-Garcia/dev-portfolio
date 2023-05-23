import styled from "styled-components";

export const TimelineSection = styled.section`
  padding: 32px 48px 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  overflow: hidden;
`;

export const Container = styled.div`
  // border: solid red 2px;
  background: ${(props) => props.theme.colors.background1};
  padding: 1rem;
  list-style: none;
  display: flex;
  justify-content: center;
  margin-left: 32px;
  border-radius: 8px;

  span {
    background: transparent;
    border-radius: 3px;
    width: 17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h4 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.02em;
      display: flex;
      margin-bottom: 8px;
      margin-bottom: 2rem;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.02em;
      color: rgba(255, 255, 255, 0.75);
      //padding-right: 16px;
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

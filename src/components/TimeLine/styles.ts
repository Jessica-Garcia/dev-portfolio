import styled from "styled-components";

export const Container = styled.ul`
  max-width: 1040px;
  background: transparent;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  //border: solid red 2px;
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
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;

export const CarouselItemText = styled.p`
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

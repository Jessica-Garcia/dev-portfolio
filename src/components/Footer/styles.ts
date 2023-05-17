import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;

  ul {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    padding: 40px 0 28px;
    //border: solid white 2px;

    li {
      display: flex;
      flex-direction: column;
      max-width: 220px;
      width: 100%;
      text-decoration: none;
      //border: solid green 2px;

      span {
        display: flex;

        gap: 1rem;
      }

      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.4);
        margin-bottom: 16px;
      }

      a {
        font-size: 18px;
        line-height: 30px;
        color: rgba(255, 255, 255, 0.75);
        margin-bottom: 16px;
        transition: 0.3s ease;
        position: relative;
        left: 0;

        &:hover {
          color: #fff;
          left: 6px;
        }
      }
    }
  }
`;

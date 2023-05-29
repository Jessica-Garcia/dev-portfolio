import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 72px 0 0;
  margin: 0 auto;
  max-width: 1040px;

  article {
    display: flex;
    justify-content: center;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 2rem 15rem;
      text-align: justify;
      line-height: 2.3rem;
      font-size: 1.7rem;

      article {
        gap: 1rem;
        span {
          font-size: 1.4rem;
        }
      }

      div {
        display: flex;
        gap: 2rem;
        margin-bottom: 3rem;
      }

      img {
        margin: 3rem 5rem 5rem;
        max-width: 50rem;
        border-radius: 8px;
        box-shadow: 0 1px 5px #00dbc4;
      }
    }
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3rem;
  width: 100%;
  justify-content: center;

  button {
    color: #d4c0c0;
    font-size: 1.2rem;
    padding: 0.7rem 1rem;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
    border-radius: 15px;
    transition: 0.5s;
    height: 3.1rem;
    width: 9.6rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
    }
  }
`;

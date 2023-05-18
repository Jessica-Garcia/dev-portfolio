import styled from "styled-components";

export const Container = styled.section`
  article,
  h3,
  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
  }

  div {
    flex-wrap: wrap;
  }
  section {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.5rem;
    column-gap: 3rem;

    div {
      height: min-content;
      padding: 0;
      button {
        color: #d4c0c0;
        font-size: 1.2rem;
        padding: 0.7rem 1rem;
        background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
        border-radius: 15px;
        transition: 0.5s;
        height: 3.1rem;
        min-width: 10.9rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        font-weight: 700;
        cursor: pointer;

        &:hover {
          background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
        }
      }
    }

    span {
      color: #d8bfbf;
      font-size: 1.5rem;
      margin-left: 1.5rem;
    }
  }

  p {
    display: flex;
    justify-content: center;
    text-align: justify;
    padding: 2rem;
    height: max-content;
    max-height: 21.5rem;
    overflow: hidden;
  }

  img {
    width: 100%;
    max-width: 45rem;
    height: 25rem;
    background-size: cover;
    border-radius: 6px;
  }
`;

interface TagsProps {
  variant: number;
}

export const Tag = styled.strong<TagsProps>`
  color: #fff;
  text-shadow: 5px 5px 5px black;
  font-size: 1.5rem;
  background: ${(props) => props.theme.tagColor[props.variant]};
  padding: 2px 6px;
  border-radius: 8px;
  height: fit-content;
  width: max-content;
`;

interface StatusProps {
  variant: "Concluído" | "Em progresso" | "Pausado" | "Futuro";
}

export const StatusContainer = styled.span`
  color: #d8bfbf;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const Status = styled.span<StatusProps>`
  background: ${(props) =>
    props.variant === "Concluído"
      ? props.theme.colors["green-300"]
      : (props) =>
          props.variant === "Pausado"
            ? props.theme.colors["red-500"]
            : (props) =>
                props.variant === "Em progresso"
                  ? props.theme.colors.yellow
                  : props.theme.colors["blue-600"]};
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
`;

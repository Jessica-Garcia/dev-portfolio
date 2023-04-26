import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  position: relative;
  input {
    height: 30px;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    width: 12rem;

    &::placeholder {
      color: #e4e6e7;
      font-size: 1.3rem;
    }
  }

  button[type="reset"] {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0;
    background: transparent;
    color: #e4e6e7;
    font-weight: bold;
    position: absolute;
    right: 50px;
    top: 9px;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors["blue-100"]};
    }

    &:active {
      color: ${(props) => props.theme.colors["blue-600"]};
    }
  }

  button[type="submit"] {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 50%;
    height: 30px;
    width: 30x;
    border: 0;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
    color: #e4e6e7;
    padding: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors["blue-600"]};
      transition: background-color 0.3s;
    }
  }
`;

import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const FormContentStyle = styled.article`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FieldsContent = styled.span`
  margin: 0.5rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  label {
    margin: 0.5rem;
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.75);

    small {
      font-size: 1rem;
    }
  }

  input {
    margin: 0.5rem;
    padding: 1rem;
  }

  textarea {
    margin: 0.5rem;
    display: flex;
    height: 21.6rem;
    resize: none;
  }

  legend {
    margin: 0.5rem;
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const ButtonsContainer = styled.div`
  margin: 0.5rem;
  padding: 3.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

export const ReturnButton = styled.button`
  border: none;
  gap: 1rem;
  font-size: 1.5rem;
  width: 15rem;
  height: 4rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  background: linear-gradient(270deg, #00dbc4 0%, #b13221 100%);
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }
`;

export const SaveButton = styled.button`
  border: none;
  gap: 1rem;
  font-size: 1.5rem;
  width: 15rem;
  height: 4rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);

  cursor: pointer;
  transition: 0.5s ease;
  position: relative;

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }
`;

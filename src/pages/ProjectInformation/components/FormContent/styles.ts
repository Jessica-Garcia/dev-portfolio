import styled from "styled-components";

export const FormContentStyle = styled.form`
  padding: 1rem;

  border: solid blue 2px;
  margin: 0.5rem;
  display: flex;
  justify-content: center;

  article {
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    //border: solid blueviolet 2px;
  }
`;

export const FieldsContent = styled.span`
  margin: 0.5rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  //border: solid green 2px;

  label {
    margin: 0.5rem;
    //padding: 1rem;
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.75);
    //border: solid pink 2px;
  }

  input {
    margin: 0.5rem;
    padding: 1rem;
  }

  textarea {
    margin: 0.5rem;
    display: flex;
    height: 21.6rem;
    //border: solid brown 2px;
    resize: none;
  }

  legend {
    margin: 0.5rem;
    //padding: 0.5rem;
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.75);
  }
`;

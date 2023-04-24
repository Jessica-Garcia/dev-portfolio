import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
    letter-spacing: 0.2rem;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
input{
  height: 60px;
}

input, textarea{
    border-radius: 8px;
    background: #323238 ;
    border: none;
    box-shadow: 0 1px 5px #00dbc4;
    color: #E1E1E6;
    padding: 2rem;
    font-size: 1.7rem;

  }

  :focus{
    outline: 0;
  }
  
`;

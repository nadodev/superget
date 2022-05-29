import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-size: 1.6rem;
   font-family: 'Open Sans';
  }

  .container {
    max-width: 1236px;
    width:100%;
    padding: 0 15px;
    margin: 0 auto;
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

:root {
  --primary-color:#F22824; 
  --primary-color-light:#DC292E; 

  --secondary-color: #FFE211;

  --neutral-color-100: #343A40;
  --neutral-color-200: #495057;
  --neutral-color-300: #ADB5BD;

  --white: #fff;

  --gradient-yellow:  linear-gradient(180deg, #FFEA0D 0%, #FFC120 100%);
}
`;

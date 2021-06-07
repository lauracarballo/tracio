import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { primaryFont, typeScale } from "./typography";

export const primaryTextColor = "#000";
export const backgroundColor = "#fff";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${primaryFont};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${backgroundColor};
  color: ${primaryTextColor};
}

h1 {
  font-size: ${typeScale.header1};
}

h2 {
  font-size: ${typeScale.header2};
  margin-block-start: 0em;
  margin-block-end: 0em;
}

a, li, ul {
  text-decoration: none;
  list-style: none;
  padding-inline-start: 0px;
  color: ${primaryTextColor};
}

`;

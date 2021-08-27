import { createGlobalStyle } from 'styled-components';
// import bg from '../assets/images/bg.svg';
// import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: #424C55;
    --yellow: #ffc600;
    --blue-light: #80e7ff;
    --green: #5df2ae;
    --blue: #087E8B;
    --grey: #424C55;
    --gray: var(--grey);
    --light: #E8F7EE;
    --grey-light: #FAFAFA;
    --gray-light: var(--grey-light);
    --black: #393939;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Overpass', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6, a, button {
    font-family: 'Teko', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;

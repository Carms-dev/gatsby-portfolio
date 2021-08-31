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
    margin: 0;
  }
  body {
    font-family: Overpass, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6, a, button {
    font-family: Teko, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.2;
    font-weight: 300;
  }

  h2, h3 {
    width: fit-content;
    font-size: 3rem;
    text-transform: lowercase;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(255, 198, 0, 0.7) 35%);
    line-height: 90%;
    padding: 0 10px;
    margin-bottom: 1rem;
    margin: 0 auto 1rem auto;
    width: max-content;
  }
  h3 {
    font-size: 2rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, var(--light-blue) 35%);
    margin: 30px auto;
  }
  h4 {
    font-size: 3rem;
  }
  p {
    font-family: Overpass, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  .container {
    max-width: 1280px;
    padding: 0 20px;
    margin: 0 auto;
  }
  button, .btn {
    text-transform: uppercase;
    font-size: 2rem;
    padding: 6px 20px 3px 20px;
    border: 3px solid var(--dark);
    transition: all 0.5s;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  button:hover, .btn:hover {
    background-color: rgba(255, 198, 0, 0.5);
    border-color: rgba(255, 198, 0, 0.7);
    ;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: #424C55;
    --yellow: #ffc600;
    --yellow-light: #F7DC79;
    --blue-light: #80e7ff;
    --green: #5df2ae;
    --blue: #087E8B;
    --grey: #424C55;
    --gray: var(--grey);
    --light: #FAFAFA;
    --grey-light: #F2f3f4;
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
    padding: 0;
  }
  *:focus {
    outline: none;
    box-shadow: none;
  }
  body {
    font-family: Overpass, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    line-height: 1.6;
    scroll-behavior: smooth;
  }
  h1, h2, h3, h4, h5, h6, a, button, label {
    font-family: Teko, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.2;
    font-weight: 300;
  }
  h2, h3 {
    text-transform: lowercase;
    line-height: 90%;
    padding: 0 10px;
    margin: 0 auto;
    width: max-content;
  }
  h2 {
    margin-bottom: 3rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(255, 198, 0, 0.7) 35%);
  }
  h3 {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, var(--blue-light) 35%);
  }
  .btn-text {
    text-transform: lowercase;
    line-height: 90%;
    padding: 0 10px;
    width: max-content;
  }
  .btn-text.active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, var(--blue-light) 35%);
  }
  p {
    font-family: Overpass, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--black);

    &[disabled] {
      cursor: not-allowed;
      color: var(--black);
    }
  }
  .btn {
    text-transform: uppercase;
    font-size: 2rem;
    padding: 6px 20px;
    border: 3px solid var(--dark);
    transition: all 0.5s;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  .btn:hover {
    background-color: rgba(255, 198, 0, 0.5);
    border-color: rgba(255, 198, 0, 0.7);
    ;
  }
  .btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 0.5rem;
    }
  }
  svg {
    transition: all 0.5s ease;
  }
  .container {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }
  section {
    padding-top: 8rem;
  }
  .bg-whiteish {
    background: rgba(230, 230, 230, 0.9);
  }
  @media (min-width: 640px) {
    section {
      padding-top: 10rem;
    }
  }
`;

export default GlobalStyles;

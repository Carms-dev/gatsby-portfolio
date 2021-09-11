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
    --light: #F4F7F6;
    --off-white: #fff6f0;
    --black: #393939;
    --fast: all 0.6s ease;
    --slow: all 0.9s ease;
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
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, var(--yellow) 45%);
  }
  h3 {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, var(--blue-light) 45%);
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
    background: rgba(255, 255, 255, 0.3);
    letter-spacing: 1px;
    cursor: pointer;
    position: relative;
    & span {
      position: relative;
      z-index: 2;
    }
    &:after{
      z-index: 1;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: var(--yellow);
      transition: var(--fast);
      opacity: 0;
    }
    &:hover:after{
      opacity: 1;
      width: 100%;
    }
  }
  .btn-icon span {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 0.5rem;
    }
  }
  svg {
    transition: var(--fast);
  }
  .container {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }
  section {
    padding-top: 3rem;
  }
  .bg-whiteish {
    background: rgba(230, 230, 230, 0.9);
  }
  @media (min-width: 640px) {
    section {
      padding-top: 8rem;
    }
  }
`;

export default GlobalStyles;

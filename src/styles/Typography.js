import { createGlobalStyle } from 'styled-components';
import OverpassLight from '../assets/fonts/Overpass/Overpass-Light.ttf';
import TekoLight from '../assets/fonts/Teko/Teko-Light.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Teko';
    src: url(${TekoLight});
    font-weight: 300;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Overpass';
    src: url(${OverpassLight});
    font-weight: light;
    font-style: normal;
    font-display: block;
  }

  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3, .btn-text {
    font-size: 3.5rem;
  }
  h4 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  .btn {
    font-size: 2.5rem;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 5.5rem;
    }
    h3, .btn-text {
      font-size: 4.5rem;
    }
    h4 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
    .btn {
      font-size: 3rem;
    }
  }
`;

export default Typography;

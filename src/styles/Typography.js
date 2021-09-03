import { createGlobalStyle } from 'styled-components';
import YoungSerif from '../assets/fonts/YoungSerif/YoungSerif-Regular.woff2'
import OverpassLight from '../assets/fonts/Overpass/Overpass-Light.ttf'
import TekoLight from '../assets/fonts/Teko/Teko-Light.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'YoungSerif';
    src: url(${YoungSerif}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Overpass';
    src: url(${OverpassLight});
    font-weight: light;
    font-style: normal;
  }
  @font-face {
    font-family: 'Teko';
    src: url(${TekoLight});
    font-weight: 300;
    font-style: normal;
  }
`

export default Typography

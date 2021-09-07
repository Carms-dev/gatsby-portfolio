import styled from 'styled-components';
import background from '../assets/images/background.jpg';

const HeroStyles = styled.section`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: 70% 50%;
  h1 {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 55%, rgba(255, 198, 0, 0.7) 35%);
    padding: 1rem 1rem 0 1rem;
    line-height: 1;
  }
  p {
    font-size: 2rem;
    background: rgba(255, 255, 255, 0.3);
    margin: 1rem 0;
    padding: 0 1rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100%;
    padding-bottom: 5vmin;
  }
  @media (min-width: 640px) {
    p {
      font-size: 2.5rem;
    }
  }
`;

const AboutStyles = styled.section`
  min-height: 100vh;
  h2, h3, .btn-text {
    margin-bottom: 3rem;
  }
  .three-forth {
    display: grid;
    place-items: center;
    grid-gap: 3rem;
    padding-bottom: 6rem;
  }
  .fifty-fifty {
    display: grid;
    grid-gap: 3rem;
    padding-bottom: 6rem;
  }

  .btns-text {
    display: grid;
    grid-auto-flow: column;
    place-content: center;
  }
  @media (min-width: 768px) {
    .three-forth {
      grid-template-columns: 3fr 1fr;
      padding-top: 2rem;
      padding-bottom: 8rem;
    }
    .fifty-fifty {
      grid-template-columns: 1fr 1fr;
      grid-gap: 5rem;
      padding-bottom: 8rem;
    }
  }
  @media (min-width: 1280px) {
    .fifty-fifty {
      grid-gap: 10rem;
    }
  }
`;

const PortfolioStyles = styled.section``;

export { HeroStyles, AboutStyles, PortfolioStyles };

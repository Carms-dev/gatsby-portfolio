import styled from 'styled-components';
import background from '../assets/images/background.jpg';

const HeroStyles = styled.section`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: 70% 50%;
  h1 {
    font-size: 4rem;
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
`;

const AboutStyles = styled.section`
  .three-forth {
    display: grid;
    place-items: center;
    grid-gap: 2rem;
  }
  .fifty-fifty {
    display: grid;
    grid-gap: 2rem;
  }

  .btns-text {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      margin: 3rem 1rem;
    }
  }
  @media (min-width: 768px) {
    .three-forth {
      grid-template-columns: 3fr 1fr;
    }
    .fifty-fifty {
      grid-template-columns: 1fr 1fr;
      grid-gap: 5rem;
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

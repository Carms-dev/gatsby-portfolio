import styled from 'styled-components';
import background from '../assets/images/background.jpg';

const HeroStyles = styled.section`
  @keyframes highlight {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: 70% 50%;
  h1 {
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    padding: 1rem 1rem 0 1rem;
    line-height: 1;
  }
  h1 span {
    position: relative;
    z-index: 2;
  }
  h1:after {
    z-index: 1;
    content: "";
    background: var(--yellow);
    opacity: 0.7;
    width: 0%;
    height: 50%;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    /* animation */
    animation-duration: 0.5s;
    animation-name: highlight;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
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
  .btn-icon:hover svg {
    transform: rotate(90deg);
  }
  @media (min-width: 640px) {
    p {
      font-size: 2.5rem;
    }
  }
`;

const AboutStyles = styled.section`
  min-height: 100vh;
  .btn:hover svg {
    transform: rotate(360deg);
  }

  h3, .btn-text {
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

const ProjectStyles = styled.section`
  .container {
    max-width: 640px;
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
      max-width: 1280px;

    }
  }
`;

const ContactStyles = styled.section`
  min-height: calc(100vh - 120px);
  padding-bottom: 7rem;
  .container {
    display: grid;
    max-width: 540px;
    grid-template-rows: 1fr 1fr auto;
  }

  form {
    align-self: center;
    padding: 2rem 0;
    display: grid;
    grid-gap: 1rem;
  }
  label {
    font-size: 2.5rem;
    display: grid;
  }
  input, textarea {
    font-size: 2rem;
    border: none;
    border-bottom: 3px solid var(--dark);
    line-height: 3rem;
    color: var(--grey);
    background: transparent;
  }
  form > * {
    width: 100%;
  }
  .btn-icon:hover svg {
    transform: rotate(360deg);
  }
`;

export {
  HeroStyles, AboutStyles, ProjectStyles, ContactStyles,
};

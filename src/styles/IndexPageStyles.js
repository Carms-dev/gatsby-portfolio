import styled from "styled-components";
import background from "../assets/images/background.jpg"

export const HeroStyles = styled.section`
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
`

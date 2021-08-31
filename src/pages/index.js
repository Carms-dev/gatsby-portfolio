import * as React from "react"
import styled from "styled-components"
import background from "../assets/images/background.jpg"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const HeroStyles = styled.section`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: 70% 50%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

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
`

const IndexPage = () => (
  <Layout>
    <Seo title="Carms Ng | Full Stack Developer" />
    {/* HERO */}
    <HeroStyles>
      <h1>Hi folks! Carms here!</h1>
      <p>I'm a Full Stack Developer living in Tiohtiá:ke aka Montréal.</p>
      <a className="btn" href="#about">What I do</a>
    </HeroStyles>

    {/* ABOUT */}
    <div>
      <div>
        <h2>About</h2>
        <p>I’m passionate about building impactful applications to improve lives around me. I’m a versatile Full Stack RoR Developer. I’m climate and social justice-minded, communicative, fun, curious, adaptive and always up for a new challenge.</p>
        {/* TODO: Wire PDF */}
        <a href="#resume">Resume</a>
      </div>

      <div>
        <div>
          <h3>Favorite Tools</h3>
          {/* TODO: Create ICONS */}

        </div>
        <div>
          <h3>guiding values</h3>
          {/* TODO: Create ICONS */}
        </div>
      </div>
    </div>

    {/* Portfolio */}
    <div>
      <h2>portfolio</h2>
    </div>

    {/* HOBBY */}
    <div>
      <h2>hobby</h2>
    </div>

    {/* CONTACT */}
    <div>
      <h2>contact</h2>
    </div>
  </Layout>
)

export default IndexPage

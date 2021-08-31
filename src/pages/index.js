import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { HeroStyles } from "../styles/IndexPageStyles"

const AboutStyles = styled.section`
  .container#about {
    display: grid;
    place-items: center;
  }
  p {
    padding: 2rem 0;
  }

`

export default function IndexPage({ data }) {

  return (
    <Layout>
      <Seo title="Carms Ng | Full Stack Developer" />
      {/* HERO */}
      <HeroStyles>
        <div className="container" id="home">
          <h1>Hi folks! Carms here!</h1>
          <p>I'm a Full Stack Developer living in Tiohtiá:ke aka Montréal.</p>
          <a className="btn" href="#about">What I do</a>
        </div>
      </HeroStyles>

      {/* ABOUT */}
      <AboutStyles>
        <div className="container" id="about">
          <h2>About</h2>
          <p>I’m passionate about building impactful applications to improve lives around me. I’m a versatile Full Stack RoR Developer. I’m climate and social justice-minded, communicative, fun, curious, adaptive and always up for a new challenge.</p>
          {/* TODO: Wire PDF */}
          <a className="btn" href={data.file.publicURL} target="_blank" rel="noreferrer">Resume</a>
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
      </AboutStyles>

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
}

export const data = graphql`
  query {
    file(extension: {eq: "pdf"}) {
      id
      publicURL
    }
  }
`

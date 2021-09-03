/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Icons from '../components/Icons';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { HeroStyles } from '../styles/IndexPageStyles';

// Data
import allTools from '../assets/data/allTools.json';
import values from '../assets/data/values.json';

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
  @media (min-width: 640px) {
    .three-forth {
      grid-template-columns: 3fr 1fr;
    }
    .fifty-fifty {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function IndexPage({ data }) {
  const favorites = allTools.filter((tool) => tool.favorite);

  const [favoritesOnly, setFavoritesOnly] = useState(true);

  const handleClick = (ev) => {
    const isFavoriteOnly = ev.target.dataset.favorites === 'true';
    setFavoritesOnly(isFavoriteOnly);
  };
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
      <AboutStyles id="about" className="container">
        <h2>About</h2>
        <div className="three-forth">
          <p>I’m passionate about building impactful applications to improve lives around me. I’m a versatile Full Stack Developer. I’m climate and social justice-minded, communicative, fun, curious, adaptive and always up for a new challenge.</p>
          <a
            className="btn"
            href={data.file.publicURL}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="fifty-fifty">
          <div>
            <div className="btns-text">
              <button
                onClick={handleClick}
                className={`btn-text ${favoritesOnly ? 'active' : ''}`}
                type="button"
                data-favorites="true"
              >
                Favorite Tools
              </button>
              <p>/</p>
              <button
                onClick={handleClick}
                className={`btn-text ${favoritesOnly ? '' : 'active'}`}
                type="button"
                data-favorites="false"
              >
                Tool Box
              </button>
            </div>
            <Icons icons={favoritesOnly ? favorites : allTools} />
          </div>
          <div>
            <h3>guiding values</h3>
            <Icons icons={values} />
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
  );
}

export const data = graphql`
  query {
    file(extension: {eq: "pdf"}) {
      id
      publicURL
    }
  }
`;

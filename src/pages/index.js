/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Icon } from '@iconify/react';
import Icons from '../components/Icons';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import {
  HeroStyles, AboutStyles, PortfolioStyles, ContactStyles,
} from '../styles/IndexPageStyles';
import Projects from '../components/Projects';

// Data
import allTools from '../assets/data/allTools.json';
import values from '../assets/data/values.json';
import projects from '../assets/data/projects.json';

export default function IndexPage({ data }) {
  const favorites = allTools.filter((tool) => tool.favorite);
  const workProjects = projects.filter((project) => !project.isHobby);
  const hobbies = projects.filter((project) => project.isHobby);

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
          <a className="btn btn-icon" href="#about">
            What I do
            <Icon icon="bytesize:arrow-right" style={{ fontSize: '2rem' }} />
          </a>
        </div>
      </HeroStyles>

      {/* ABOUT */}
      <AboutStyles id="about">
        <div className="container">
          <h2>About</h2>
          <div className="three-forth">
            {/* eslint-disable-next-line max-len */}
            <p>I’m passionate about building impactful applications to improve lives around me. I’m a versatile Full Stack Developer. I’m climate and social justice-minded, communicative, fun, curious, adaptive and always up for a new challenge.</p>
            <a
              className="btn btn-icon"
              href={data.file.publicURL}
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <Icon icon="clarity:download-line" style={{ fontSize: '2rem' }} />
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
        </div>
      </AboutStyles>

      {/* Portfolio */}
      <PortfolioStyles id="portfolio" style={{ background: 'var(--grey-light)' }}>
        <div className="container">

          <div>
            <h2>portfolio</h2>
            <Projects projects={workProjects} allTools={allTools} />
          </div>
          <div>
            <h2>hobby</h2>
            <Projects projects={hobbies} allTools={allTools} />
          </div>
        </div>
      </PortfolioStyles>

      {/* HOBBY */}

      {/* CONTACT */}
      <ContactStyles>
        <div className="container">
          <h2>contact</h2>
          <p>Want to collaberate? Let's grab a coffee over VC!</p>

          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            {/* <input type="hidden" name="form-name" value="contact" /> */}
            <label htmlFor="name">
              Full Name
              <input type="text" name="name" id="name" required />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" name="email" id="email" required />
            </label>
            <label htmlFor="message">
              Message
              <textarea name="message" id="message" cols="30" rows="4" required />
            </label>
            <button className="btn btn-icon" type="submit">
              Send
              <Icon icon="la:telegram-plane" style={{ fontSize: '2rem' }} />
            </button>
            {/* <input type="reset" value="Clear" /> */}
          </form>

        </div>
      </ContactStyles>
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

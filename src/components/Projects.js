import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Icons from './Icons';

const ProjectsStyles = styled.div`
  display: grid;
  grid-gap: 5rem;
  padding-bottom: 6rem;

  .project {
    display: grid;
    align-items: center;
    grid-gap: 4rem;
    h3 {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  .project-media {
    position: relative;
    display: grid;
    .project-img {
      transition: all 1s ease;
    }
    .project-mp4 {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      visibility: hidden;
      opacity: 0;
      transition: all 1s ease;
      max-height: 100%;
      object-fit: contain;
    }
  }
  .project-media:hover .project-mp4 {
    visibility: visible;
    opacity: 1;
  }
  .project-media:hover .project-img {
    visibility: hidden;
    opacity: 0;
  }
  .project-info {
    padding: 2rem 0;
    display: grid;
    grid-gap: 3.5rem;
  }
  .btns-inline {
    display: flex;
    justify-content: center;
  }
  .btn {
    margin: 0 1rem;
  }
  .roles {
    position: absolute;
    bottom: -4rem;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
  }
  .pill {
    font-size: 1.6rem;
    padding: 0.5rem;
    line-height: 1;
    background-color: var(--yellow-light);
    border: 3px solid var(--yellow);
    white-space: nowrap;
  }

  @media (min-width: 1024px) {
    .project {
      margin: 5rem 0;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }
`;

export default function Projects({ projects, allTools }) {
  const { images, videos } = useStaticQuery(
    graphql`
      {
        images: allFile(filter: {relativeDirectory: {eq: "projects"},  extension: { ne: "mp4" }}) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(width: 610, layout: CONSTRAINED, placeholder: BLURRED)
              original {
                width
                height
                src
              }
            }
          }
        }
        videos: allFile(filter: { relativeDirectory: {eq: "projects"}, extension: { eq: "mp4" } }) {
          nodes {
            publicURL
            base
          }
        }
      }
    `,
  );

  return (
    <ProjectsStyles>
      {projects.map((project) => {
        const image = images.nodes.find((node) => node.base === project.image);
        const icons = allTools.filter((tool) => project.stack.includes(tool.name));
        const demo = videos.nodes.find((node) => node.base === project.demo);
        return (
          <div key={project.title} className="project">
            <div className="project-media">
              <GatsbyImage
                image={image?.childImageSharp.gatsbyImageData}
                alt={project.title}
                imgStyle={{ objectFit: 'contain' }}
                style={{ maxHeight: '50vh' }}
                className="project-img"
              />
              {demo
              && (
              // eslint-disable-next-line jsx-a11y/media-has-caption
                <video className="project-mp4" width="100%" autoPlay muted loop>
                  <source src={demo.publicURL} type="video/mp4" />
                </video>
              )}
              <div className="roles">
                {project.roles.map((role) => <small key={`${project.title} - ${role}`} className="pill">{role}</small>)}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Icons icons={icons} labelHidden />
              <div className="btns-inline">
                <a className="btn" href={project.website} target="_blank" rel="noreferrer">live site</a>
                {project.source && <a className="btn" href={project.source} target="_blank" rel="noreferrer">source</a>}
              </div>
            </div>
          </div>
        );
      })}
    </ProjectsStyles>
  );
}

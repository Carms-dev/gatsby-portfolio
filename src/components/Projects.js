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
    align-items: flex-start;
    h3 {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  .project-info {
    padding: 2rem 0;
    display: grid;
    grid-gap: 2rem;
  }
  .btns-inline {
    display: flex;
    justify-content: center;
  }
  .btn {
    margin: 0 1rem;
  }
  .roles {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
    place-content: center;
  }
  .pill {
    font-size: 1.6rem;
    padding: 0.5rem;
    line-height: 1;
    background-color: rgba(255, 198, 0, 0.5);
    border: 3px solid rgba(255, 198, 0, 0.7);
  }
  @media (min-width: 768px) {
    .project {
      margin: 5rem 0;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function Projects({ projects, allTools }) {
  const { projectImages } = useStaticQuery(
    graphql`
      {
        projectImages: allFile(filter: {relativeDirectory: {eq: "projects"}}) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
              original {
                width
                height
                src
              }
            }
          }
        }
      }
    `,
  );

  return (
    <ProjectsStyles>
      {projects.map((project) => {
        const image = projectImages.nodes.find((node) => node.base === project.image);
        const icons = allTools.filter((tool) => project.stack.includes(tool.name));


        return (
          <div key={project.title} className="project">
            <div>
              <GatsbyImage
                image={image?.childImageSharp.gatsbyImageData}
                alt={project.title}
                imgStyle={{ objectFit: 'contain' }}
                style={{ maxHeight: '50vh' }}
              />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="roles">
                {project.roles.map((role) => <small key={`${project.title} - ${role}`} className="pill">{role}</small>)}
              </div>
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

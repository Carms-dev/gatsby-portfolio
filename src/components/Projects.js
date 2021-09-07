import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Icons from './Icons';

const ProjectsStyles = styled.div`
  .project {
    margin: 3rem 0;
    display: grid;
    align-items: flex-start;
    h3 {
      margin-top: 0;
    }
    p {
      margin: 1rem 0;
    }
  }
  .btns-inline {
    display: flex;
    justify-content: center;
  }
  .btn {
    margin: 1rem
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
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={project.title}
              imgStyle={{ objectFit: 'contain' }}
              style={{ maxHeight: '50vh' }}
            />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Icons icons={icons} />
              <div className="btns-inline">
                <a className="btn" href={project.website} target="_blank" rel="noreferrer">live site</a>
                <a className="btn" href={project.source} target="_blank" rel="noreferrer">source</a>
              </div>
            </div>
          </div>
        );
      })}
    </ProjectsStyles>
  );
}

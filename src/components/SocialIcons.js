import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';

export default function SocialIcons() {
  return (
    <SocialIconsStyles>
      <a href="https://github.com/carms-dev" target="_blank" rel="noreferrer">
        <Icon icon="feather:github" />
      </a>
      <a href="https://www.linkedin.com/in/carmsng/" target="_blank" rel="noreferrer">
        <Icon icon="feather:linkedin" />
      </a>
      <a href="mailto: contact@carms-ng.com" target="_blank" rel="noreferrer">
        <Icon icon="feather:mail" />
      </a>
    </SocialIconsStyles>
  );
}

const SocialIconsStyles = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
  place-content: center;

  a {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-content: center;
    background: var(--yellow);
    padding: 1rem;
    border-radius: 50%;
    transition: all 1s ease;
    svg {
      font-size: 1.6rem;
      color: var(--dark);
    }
  }
  a:hover {
    border-radius: 0;
  }
  @media (min-width: 640px) {
    a {
      width: 4rem;
      height: 4rem;
      svg {
        font-size: 2rem;
      }
    }
  }
`;

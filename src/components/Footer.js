import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <FooterStyles>
      <h4>
        © Carms Ng
        {' '}
        {new Date().getFullYear()}
      </h4>
      {/* Social */}
      <div>
        <a className="btn-social" href="https://github.com/carms-dev" target="_blank" rel="noreferrer">
          <Icon icon="feather:github" />
        </a>
        <a className="btn-social" href="https://www.linkedin.com/in/carmsng/" target="_blank" rel="noreferrer">
          <Icon icon="feather:linkedin" />
        </a>
        <a className="btn-social" href="mailto: contact@carms-ng.com" target="_blank" rel="noreferrer">
          <Icon icon="feather:mail" />
        </a>
      </div>
      <button onClick={scrollToTop} type="button" className="btn">
        <Icon icon="bi:arrow-up" />
      </button>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  position: relative;
  background: var(--grey);
  color: var(--light);
  font-size: 2rem;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1.5rem;
  }
  .btn-social {
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
  .btn-social:hover {
    border-radius: 0;
  }
  button {
    position: absolute;
    top: -7rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 3rem 1.5rem;
  }
  button:hover svg {
    transform: rotate(360deg);
  }

  @media (min-width: 640px) {
    .btn-social {
      width: 4rem;
      height: 4rem;
      svg {
        font-size: 2rem;
      }
    }
  }
`;

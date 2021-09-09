import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

export default function Footer({ pausedRef }) {
  const scrollToTop = () => {
    pausedRef.current = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      pausedRef.current = false;
    }, 1500);
  };
  return (
    <FooterStyles>
      <h4>
        © Carms Ng
        {' '}
        {new Date().getFullYear()}
      </h4>
      {/* Social */}
      <SocialIcons />
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
`;

import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

export default function Footer({ pausedRef }) {
  const scrollToTop = () => {
    pausedRef.current = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const checkIfScrollCompleted = setInterval(() => {
      if (window.scrollY === 0) {
        pausedRef.current = false;
        clearInterval(checkIfScrollCompleted);
      }
    }, 25);
  };
  return (
    <FooterStyles>
      <p>
        {`© Carms Ng ${new Date().getFullYear()}`}
      </p>
      {/* Social */}
      <SocialIcons />
      <button className="btn btn-top" onClick={scrollToTop} type="button" aria-label="Go To Page Top">
        <Icon icon="bi:arrow-up" />
      </button>
    </FooterStyles>
  );
}

Footer.propTypes = {
  pausedRef: PropTypes.shape({
    current: PropTypes.bool,
  }).isRequired,
};

const FooterStyles = styled.footer`
  position: relative;
  background: var(--grey);
  color: var(--light);
  font-size: 2rem;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: Teko, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 3rem;
  }
  .btn-top {
    position: absolute;
    top: -7rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 3rem 1.5rem;
  }
  .btn-top:hover svg {
    transform: rotate(360deg);
  }
`;

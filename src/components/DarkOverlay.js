import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function DarkOverlay({ isMenuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeMenu);

    return () => {
      document.body.style.overflow = 'unset';
      window.addEventListener('keydown', closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <DarkOverlayStyles onClick={closeMenu} />
  );
}

DarkOverlay.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

const DarkOverlayStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: rgba(0,0,0,0.7);
`;

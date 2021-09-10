import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Menu from './Menu';
import DarkOverlay from './DarkOverlay';

function Header({
  isMenuOpen, setMenuOpen, pausedRef, sectionRefs,
}) {
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <HeaderStyles>
      <Link
        to="/"
        className="btn-logo"
      >
        <StaticImage
          src="../assets/images/logo.png"
          alt="Carms Ng Logo"
          imgStyle={{ objectFit: 'contain', width: '100%', height: '100%' }}
          style={{ width: '70px', height: '70px', marginRight: '1rem' }}
        />
        <div className="header-text">
          <h4>Carms Ng</h4>
          <p>Full Stack Developer</p>
        </div>
      </Link>
      {
        pausedRef && (
          <>
            <button className="btn-menu" type="button" onClick={toggleMenu} aria-label="Open or Close Menu">
              <Icon icon={`${isMenuOpen ? 'uiw:menu-unfold' : 'uiw:menu-fold'}`} />
            </button>
            <Menu
              isMenuOpen={isMenuOpen}
              setMenuOpen={setMenuOpen}
              pausedRef={pausedRef}
              sectionRefs={sectionRefs}
            />
          </>
        )
      }
      {isMenuOpen && <DarkOverlay isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
    </HeaderStyles>
  );
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  pausedRef: PropTypes.shape({
    current: PropTypes.bool,
  }).isRequired,
  sectionRefs: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const HeaderStyles = styled.header`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  .btn-logo {
    display: grid;
    grid-auto-flow: column;
    place-content: baseline;
  }
  .header-text {
    display: none;
    h4 {
      font-size: 4rem;
    }
  }
  .btn-menu {
    position:fixed;
    top: 1rem;
    right: 1rem;
    padding: 1rem;
    justify-self: flex-end;
    z-index: 12;
    backdrop-filter: blur(2em);
  }
  .btn-menu svg {
    font-size: 3rem;
    color: var(--dark);
  }
  .btn-logo, .btn-menu {
    padding: 1rem;
  }

  @media (min-width: 640px) {
    .header-text {
      display: block;
    }
    .btn-menu svg {
      font-size: 4rem;
    }
    .btn-logo, .btn-menu {
      padding: 2rem;
    }
  }
`;

export default Header;

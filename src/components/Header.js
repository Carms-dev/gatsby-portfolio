import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Menu from './Menu';

function Header({
  isMenuOpen, setMenuOpen, pausedRef, sectionRefs,
}) {
  const toggleMenu = () => { setMenuOpen(!isMenuOpen); };

  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      headerRef.current.classList.add('bg-whiteish');
    } else {
      headerRef.current.classList.remove('bg-whiteish');
    }
  };

  return (
    <HeaderStyles ref={headerRef}>
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
      <button className="btn-menu" type="button" onClick={toggleMenu}>
        <Icon icon={`${isMenuOpen ? 'akar-icons:cross' : 'mdi:hamburger'}`} />
      </button>
      {/* <div className="nav" /> */}
      <Menu isMenuOpen={isMenuOpen} pausedRef={pausedRef} sectionRefs={sectionRefs} />
    </HeaderStyles>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

const HeaderStyles = styled.header`
  z-index: 10;
  /* height: 80px; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-self: flex-start;

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
    padding: 1rem;
    justify-self: flex-end;
    z-index: 12;
  }
  .btn-menu svg {
    font-size: 3.5rem;
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
      font-size: 4.5rem;
    }
    .btn-logo, .btn-menu {
      padding: 2rem;
    }
  }
`;

export default Header;

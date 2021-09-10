import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

export default function Menu({
  isMenuOpen, setMenuOpen, pausedRef, sectionRefs,
}) {
  const { resume } = useStaticQuery(graphql`
    query {
      resume: file(extension: {eq: "pdf"}) {
        publicURL
      }
    }
  `);

  const menuItems = [
    {
      label: 'Home',
      ref: '0',
      type: 'button',
    },
    {
      label: 'About',
      ref: '1',
      type: 'button',
    },
    {
      label: 'Portfolio',
      ref: '2',
      type: 'button',
    },
    {
      label: 'Resume',
      ref: resume.publicURL,
      type: 'anchor',
    },
    {
      label: 'Contact',
      ref: '3',
      type: 'button',
    },
  ];

  const handleClick = (ev) => {
    // Pause observer effect
    pausedRef.current = true;

    // Find the targeted scroll Position Y and scrollTo
    const refIndex = parseInt(ev.target.dataset.index, 10);
    const currentRef = sectionRefs.current[refIndex];
    const top = currentRef.offsetTop;
    window.scrollTo({ top, behavior: 'smooth' });

    // Close Menu
    setMenuOpen(false);

    // Un-pause observer effect
    const checkIfScrollCompleted = setInterval(() => {
      if (window.scrollY === top) {
        pausedRef.current = false;
        clearInterval(checkIfScrollCompleted);
      }
    }, 25);
  };

  return (
    <MenuStyles isMenuOpen={isMenuOpen}>
      {menuItems.map(({ label, ref, type }) => {
        if (type === 'anchor') return <a key={`menu-${ref}`} href={ref}>{label}</a>;

        return (
          <button
            aria-label={`Go to ${label}`}
            type="button"
            key={`menu-${ref}`}
            onClick={handleClick}
            data-index={ref}
          >
            {label}
          </button>
        );
      })}

      <SocialIcons />
    </MenuStyles>
  );
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  pausedRef: PropTypes.shape({
    current: PropTypes.bool,
  }).isRequired,
  sectionRefs: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const MenuStyles = styled.div`
  z-index: 11;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  position: fixed;
  top: 0;

  display: grid;
  transition: all 1s ease;
  justify-items: flex-start;
  transform: ${(props) => (props.isMenuOpen ? '' : 'translate(0, -100%)')};
  background: var(--light);
  width: 100%;
  grid-gap: 1rem;
  padding: 2rem;

  > button, > a {
    font-size: 2.5rem;
    text-align: left;
  }

  > button:hover, > a:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(255, 198, 0, 0.7) 35%);
  }

  @media (min-width: 640px) {
    right: 0;
    bottom: 0;
    width: auto;
    transform: ${(props) => (props.isMenuOpen ? '' : 'translate(100%, 0)')};
    justify-items: stretch;
    place-content: center;
    padding: 4rem;
    grid-gap: 2rem;

    > button, > a {
      font-size: 4rem;
    }
  }
`;

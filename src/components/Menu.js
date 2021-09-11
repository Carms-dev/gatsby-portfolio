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
    const refIndex = parseInt(ev.currentTarget.dataset.index, 10);
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
        if (type === 'anchor') {
          return (
            <a key={`menu-${ref}`} href={ref} target="_blank" rel="noreferrer">
              <span>{label}</span>
            </a>
          );
        }

        return (
          <button
            aria-label={`Go to ${label}`}
            type="button"
            key={`menu-${ref}`}
            onClick={handleClick}
            data-index={ref}
          >
            <span>{label}</span>
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
    position: relative;
    span {
      position: relative;
      z-index: 2
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 45%;
      opacity: 0;
      background: var(--yellow);
      transition: all 0.5s ease;
    }
    &:hover:after {
      opacity: 1;
      width: 100%;
    }
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

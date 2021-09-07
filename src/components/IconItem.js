import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconStyles = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 0.5rem;
  position: relative;

  .icon {
    width: 75px;
    height: 75px;
    background: var(--light);
    border-radius: 50%;
    border: 1px solid lightgray;
    display: grid;
    place-content: center center;
    transition: all 1s ease;
  }
  &:hover .icon {
    border-radius: 0;
  }
  svg {
    width: 40px;
    height: 40px;
    color: ${(props) => props.color};
    transition: all 1s ease;
    opacity: 1;
  }
  &:hover svg {
    visibility: ${(props) => (props.labelHidden ? 'hidden' : 'visible')};
    opacity: ${(props) => (props.labelHidden ? 0 : 1)};
  }
  p {
    margin: 0;
    font-size: 1.6rem;
    transition: all 1s ease;
    visibility: ${(props) => (props.labelHidden ? 'hidden' : 'visible')};
    opacity: ${(props) => (props.labelHidden ? 0 : 1)};
    position: ${(props) => (props.labelHidden ? 'absolute' : 'relative')};
    top: ${(props) => (props.labelHidden ? '50%' : 'unset')};
    left: ${(props) => (props.labelHidden ? '50%' : 'unset')};
    transform: ${(props) => (props.labelHidden ? 'translate(-50%, -50%)' : '')};
  }
  &:hover p {
    visibility: visible;
    opacity: 1;
  }
`;

export default function IconItem({ tool, labelHidden }) {
  return (
    <IconStyles color={tool.color} labelHidden={labelHidden}>
      <div className="icon">
        <Icon icon={tool.icon} />
      </div>
      <p>{tool.name}</p>
    </IconStyles>
  );
}

IconItem.propTypes = {
  tool: PropTypes.object,
  labelHidden: PropTypes.bool,
};

IconItem.defaultProps = {
  tool: {},
  labelHidden: false,
};

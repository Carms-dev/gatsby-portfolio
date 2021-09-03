import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const IconStyles = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 0.5rem;

  > div {
    width: 75px;
    height: 75px;
    background: var(--light-gray);
    border-radius: 50%;
    border: 1px solid lightgray;
    display: grid;
    place-content: center center;
  }
  svg {
    width: 40px;
    height: 40px;
    color: ${(props) => props.color};
  }
`;

export default function IconItem({ tool }) {
  return (
    <IconStyles color={tool.color}>
      <div>
        <Icon icon={tool.icon} />
      </div>
      <p>{tool.name}</p>
    </IconStyles>
  );
}

// ToolIcon.propTypes = {
//   tool: PropTypes.arrayOf(PropTypes.object),
// };

// ToolIcon.defaultProps = {
//   ToolIcon: {},
// }

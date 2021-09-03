import React from 'react';
import styled from 'styled-components';
import ToolIcon from './IconItem';

const IconsStyles = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(75px, 1fr) );
  grid-gap: 1rem;
  align-items: flex-start;
  text-align: center;
`;

export default function Icons({ icons }) {
  return (
    <IconsStyles>
      { icons.map((tool) => <ToolIcon key={tool.icon} tool={tool} />)}
    </IconsStyles>
  );
}

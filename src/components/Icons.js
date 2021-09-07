import React from 'react';
import styled from 'styled-components';
import ToolIcon from './IconItem';

const IconsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(75px, 85px) );
  grid-auto-rows: 400px;
  grid-gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  grid-auto-rows: 1fr;
`;

export default function Icons({ icons }) {
  return (
    <IconsStyles>
      {icons.map((tool) => <ToolIcon key={tool.icon} tool={tool} />)}
    </IconsStyles>
  );
}

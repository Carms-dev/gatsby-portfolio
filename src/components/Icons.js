import React from 'react';
import styled from 'styled-components';
import IconItem from './IconItem';

const IconsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, 88px );
  grid-auto-rows: 400px;
  grid-gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  grid-auto-rows: 1fr;
`;

export default function Icons({ icons, labelHidden }) {
  return (
    <IconsStyles>
      {icons.map((tool) => <IconItem key={tool.icon} tool={tool} labelHidden={labelHidden} />)}
    </IconsStyles>
  );
}

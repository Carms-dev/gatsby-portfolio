import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Page Not found" />
      <NotFoundPageStyles>
        <h1>whoops a daisy</h1>
        <p>This ain&apos;t the right path my friend.</p>
        <Link className="btn" to="/">Let&apos;s Go Home</Link>
      </NotFoundPageStyles>
    </Layout>
  );
}

const NotFoundPageStyles = styled.div`
  min-height: calc(100vh - 128px);
  display: grid;
  gap: 2rem;
  place-content: center;
  place-items: center;
`;

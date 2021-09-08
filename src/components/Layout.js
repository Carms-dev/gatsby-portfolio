import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

function Layout({ children, pausedRef }) {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      <main>{children}</main>
      <Footer pausedRef={pausedRef} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

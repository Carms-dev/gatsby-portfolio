import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

function Layout({ children, pausedRef, sectionRefs }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
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
      <Header
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        pausedRef={pausedRef}
        sectionRefs={sectionRefs}
      />
      <main>{children}</main>
      <Footer pausedRef={pausedRef} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

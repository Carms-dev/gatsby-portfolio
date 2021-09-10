import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

function Layout({ children, pausedRef, sectionRefs }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
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
  pausedRef: PropTypes.shape({
    current: PropTypes.bool,
  }).isRequired,
  sectionRefs: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Layout;

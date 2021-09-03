import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const HeaderStyles = styled.header`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;

  a {
    display: flex;
    align-items: center;
  }
  img {
    height: 80px;
    padding: 1rem;
    object-fit: contain;
  }
`

const Header = () => (
  <HeaderStyles>
    <Link to="/">
      <StaticImage src="../assets/images/logo.png" alt="Carms Ng Logo" />
      <div>
        <h4>Carms Ng</h4>
        <p>Full Stack Developer</p>
      </div>
    </Link>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

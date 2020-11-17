import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const NavigationWrapper = styled.nav`
  position: absolute;
  display: flex;
  top: 0px;
  left: 30px;
  justify-content: flex-start;
  font-family: "Raleway";
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    left: 10px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 30px;
`
const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
  @media only screen and (max-width: 800px) {
    margin-left: 10px;
  }
`
const LogoImg = styled(Image)`
  top: 0;
  width: 200px;
  height: 141, 580px;
  object-fit: cover;
  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`
const query = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 301, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Navigation = () => {
  const data = useStaticQuery(query)
  return (
    <NavigationWrapper>
      <Link to="/">
        <LogoImg fluid={data.file.childImageSharp.fluid} />
      </Link>

      <NavigationList>
        <NavigationListItem>
          <Link to="/about">o nas</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/offer">oferta</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/gallery">galeria</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/contact">kontakt</Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation

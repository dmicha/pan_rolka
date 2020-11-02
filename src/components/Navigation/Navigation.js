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
  a {
    text-decoration: none;
    color: inherit;
  }
`

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
`
const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
`
const LogoImg = styled(Image)`
  top: 0;
  width: 200px;
  height: 141, 580px;
  object-fit: cover;
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
  const data = useStaticQuery(query);
  return(
  <NavigationWrapper>
    <Link to="/">
      <LogoImg fluid={data.file.childImageSharp.fluid} />
    </Link>

    <NavigationList>
      <NavigationListItem>
        <Link to="/about">o nas</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/articles">artykuły</Link>
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

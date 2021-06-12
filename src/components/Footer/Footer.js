import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const FooterWrapper = styled.footer`
  position: relative; !important;
  left: 0;
  high:auto;
  bottom: 0;
  width: 30%;
  flex-wrap: wrap;
  padding-top: 10px;
  color: #b4b4b4;
  text-align: left;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: inherit;
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

const Footer = () => {
  const data = useStaticQuery(query)
  return (
    <FooterWrapper>
      Created by Damian Michalak d.michalak94@gmail.com
    </FooterWrapper>
  )
}

export default Footer

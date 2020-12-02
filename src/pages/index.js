import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Button from "../components/Button/Button"
import PageInfo from "../components/PageInfo/PageInfo"

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 500px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media only screen and (max-width: 800px) {
    height: 70vh;
    width: 100%;
  }
  @media only screen and (max-height: 450px) {
    margin-top: 50px;
  }

  h1 {
    font-size: 105px;
    margin: 0;
    width: 60%;
    line-height: 1;
    @media only screen and (max-width: 800px) {
      font-size: 50px;
      text-align: right;
      width: 100%;
    }
  }

  p {
    margin: 60px 0 40px;
    width: 40%;
    @media only screen and (max-width: 800px) {
      font-size: 25px;
      text-align: right;
      width: 100%;
      margin-right: 0px;
    }
  }
`

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`
const pageData = {
  title: "Uwaga!",
  paragraph: "Od 6 grudnia jesteśmy zamknięci.",
}
const IndexPage = ({ data }) => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <ContentWrapper>
      <h1>Zrolujemy Ci lody!</h1>
      <p>
        Lody tajskie, rzemieślnicze i nie tylko...
        <br />
        Łódź, Piłsudskiego 25
      </p>
      <Button>
        <Link to="/about">Dowiedz się więcej!</Link>
      </Button>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "main" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1800, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

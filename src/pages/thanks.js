import React from "react"
import { graphql,} from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"



const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 300px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media only screen and (max-width: 800px) {
    height: 100vh;
    width: 100%;
  }
  @media only screen and (max-height: 450px) {
    margin-top: 50px;
  }

  h1 {
    font-size: 105px;
    margin: 0;
    padding: 1px:
    line-height: 1;
    @media only screen and (max-width: 800px) {
      font-size: 50px;
      text-align: right;
      width: 100%;
    }
  }

  p {
    margin: 10px 0 40px;
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
  height: 100%;
  z-index:999;
  object-fit: cover;
  @media only screen and (max-width: 800px) {
    position: relative;
    object-fit: none;
    height: 500px;
    width: 100%;
    top: 95%;
  }
`

const Thanks = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Dzięki za wiadomość!</h1>
      <p>Cieszymy się że, zainteresowałeś się naszą ofertą! <br></br>
      Spodziewaj się odpowiedzi w swojej skrzynce odbiorczej już niedługo!</p>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "thanks-img" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1800, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default Thanks

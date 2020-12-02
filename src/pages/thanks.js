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

  h1 {
    font-size: 105px;
    margin: 0;
    width: 60%;
    line-height: 1;
  }

  p {
    margin: 60px 0 40px;
    width: 50%;
  }
`

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
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

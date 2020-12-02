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

const AboutPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>O nas!</h1>
      <p>Witajcie Lodożercy! <br></br>
Już niebawem w naszym mieście
Gdzie jednorożec stoi na straży
A ludziom się wyjść z domu marzy
Pragniemy powiadomić o pewnej nowinie
Która Was wszystkich zaskoczy mile
Otóż otworzy się lokal, nieduży
Lecz bardzo przytulny
Gdzie lody będziemy serwować
A uśmiech na Waszych twarzach malować
Zakręcimy dla Was rolki lodowe 
Co ze świeżych owoców są robione
Uwierzcie nam na słowo będzie pysznie i kolorowo
Wiec Kochani serdecznie Was zapraszamy
A datę otwarcia niedługo podamy
Pozdrawiamy,
- Pan Rolka</p>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "about-img" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1800, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage

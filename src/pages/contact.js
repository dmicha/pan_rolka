import React from "react"
import PageInfo from "../components/PageInfo/PageInfo"
import ContactForm from "../components/ContactForm/ContactForm"
import Footer from "../components/Footer/Footer"
import styled from "styled-components"
import Image from "gatsby-image"

const pageData = {
  title: "Kontakt",
  paragraph: "Zapraszamy do zadawania pytań. Napewno odpowiemy.",
}

const ContactPage = ({ data }) => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
    <ContactForm />
    <Footer />
  </>
)
export const query = graphql`
  {
    file(name: { eq: "contact" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1800, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  z-index: 999;
  object-fit: none;
  @media only screen and (max-width: 800px) {
    position: relative;
    object-fit: none;
    height: 500px;
    width: 100%;
    top: 930px;
  }
`
export default ContactPage

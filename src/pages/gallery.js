import React from "react"
import styled from "styled-components"
//import { graphql } from "gatsby"
//import Image from "gatsby-image"
import PageInfo from "../components/PageInfo/PageInfo"

const TittleGalleryPage = styled.div`
  position: absolute !important;
  font-weight: 700;
  font-size: 20px;
  top: 200px;
  width: 200px;
  height: 100px;
  object-fit: fill;
`
const pageData = {
  title: "Galeria",
  paragraph: `W galerii naszych deserów nabierzecie smaka by do nas przyjechać lub zamówić online`,
}

const GalleryPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
  </>
)

export default GalleryPage

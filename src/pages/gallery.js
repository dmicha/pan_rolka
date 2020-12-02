import React from "react"
import Instagram from "../components/instagram"
import PageInfo from "../components/PageInfo/PageInfo"


const pageData = {
  title: "Galeria",
  paragraph: `W galerii naszych deserów nabierzecie smaka by do nas przyjechać lub zamówić online`,
}

const GalleryPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <Instagram></Instagram>
  </>
)

export default GalleryPage

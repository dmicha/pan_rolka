import React from "react"
import PageInfo from "../components/PageInfo/PageInfo"
import GalleryPosts from "../components/GalleryPosts/GalleryPosts"


const pageData = {
  title: "Galeria",
  paragraph: `W galerii naszych deserów nabierzecie smaka by do nas przyjechać lub zamówić online`,
}

const GalleryPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <GalleryPosts>1
    </GalleryPosts>
  </>
)

export default GalleryPage

import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const GalleryPostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: space-between;

 
`
const Squer = styled.div`
  background: #f9f9f9;
  width: 300px;
  height: 280px;
  margin: 10px;

`
const GalleryPosts = () => {
  return (
    <GalleryPostsContainer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      <Squer> </Squer>
      
    </GalleryPostsContainer>
  )
}
export default GalleryPosts

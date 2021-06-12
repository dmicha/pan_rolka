import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const GalleryPostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: center;

 
`
const Squer = styled.image`
  background-image: url='https://source.unsplash.com/random';
  max-width: 300px;
  max-height: 280px;
  margin: 10px;
  object-fit: fill;

`
const GalleryPosts = () => {
  return (
    <GalleryPostsContainer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x280"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x281"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x282"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x283"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x284"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x286"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x287"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x288"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/300x289"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/301x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/302x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/303x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/305x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/310x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/350x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/307x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/309x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/308x285"></img></Squer>
      <Squer > <img src="https://source.unsplash.com/collection/190727/308x287"></img></Squer>

  
      
      
    </GalleryPostsContainer>
  )
}
export default GalleryPosts

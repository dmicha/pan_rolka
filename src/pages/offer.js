import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledOfferParagraph1 = styled.text`
  font-size: 20px;
  padding-bottom: 10px;
  
`
const StyledOfferParagraph2 = styled.text`
  font-size: 20px;
`
const StyledOfferParagraph3 = styled.text`
  font-size: 20px;
  a {
    color: inherit;
    font-style:italic;
  }
`


const OfferPage = () => (
  <>
    <h1>Oferta!</h1>
    <StyledOfferParagraph1>
      Rollujemy lody na oczach Waszych gości, tworząc przy tym niezapomnianą i
      zjawiskową atrakcje.</StyledOfferParagraph1><br></br>
      <StyledOfferParagraph2>Wkładamy w naszą prace całe serce, dlatego dołożymy wszelkich starań, aby
      spełnić Państwa oczekiwania.</StyledOfferParagraph2><br></br>
      <StyledOfferParagraph3>Do wszystkich zleceń podchodzimy indywidualnie, tak aby atrakcja była jak
      najbardziej dopasowana do Państwa upodobań.<br></br>
      Po więcej informacji zapraszamy do <Link to="/contact">kontaktu.</Link></StyledOfferParagraph3>
    
  </>
)

export default OfferPage

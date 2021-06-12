import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PageInfo from "../components/PageInfo/PageInfo"
import Button from "../components/Button/Button"

const pageData = {
  title: "Oferta",
  paragraph: "ZRollujemy lody na oczach Waszych gości, tworząc przy tym niezapomnianą i zjawiskową atrakcje.  Wkładamy w naszą prace całe serce, dlatego dołożymy wszelkich starań, aby spełnić Państwa oczekiwania.Do wszystkich zleceń podchodzimy indywidualnie, tak aby atrakcja była jak najbardziej dopasowana do Państwa upodoba Po więcej informacji zapraszamy do kontaktu.",
}
const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 300px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media only screen and (max-width: 800px) {
    height: 180vh;
    width: 100%;
  }
  @media only screen and (max-height: 450px) {
    margin-top: 50px;
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
const OfferPage = (data) => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <Button> <Link to="/contact">Napisz do nas!</Link></Button>
  </>
)
export default OfferPage

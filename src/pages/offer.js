import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PageInfo from "../components/PageInfo/PageInfo"
import Button from "../components/Button/Button"

const pageData = {
  title: "Oferta",
  paragraph: "ZRollujemy lody na oczach Waszych gości, tworząc przy tym niezapomnianą i zjawiskową atrakcje.  Wkładamy w naszą prace całe serce, dlatego dołożymy wszelkich starań, aby spełnić Państwa oczekiwania.Do wszystkich zleceń podchodzimy indywidualnie, tak aby atrakcja była jak najbardziej dopasowana do Państwa upodoba Po więcej informacji zapraszamy do kontaktu.",
}
const OfferPage = (data) => (
  <>
  
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <Button> <Link to="/contact">Napisz do nas!</Link></Button>
  </>
)
export default OfferPage

import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import axios from "axios"
import PageInfo from "../components/PageInfo/PageInfo"
import Button from "../components/Button/Button"

const StyledInput = styled.input`
  display: block;
  border: 2px solid black;
  background: none;
  font-family: Montserrat;
  font-size: 20px;
  height: ${({ as }) => (as ? "200px" : "auto")};
  width: ${({ as }) => (as ? "500px" : "300px")};
  margin-bottom: ${({ as }) => as && "40px"};
`

const StyledLabel = styled.label`
  margin: 30px 0 10px;
  display: block;
  font-size: 14px;
  font-weight: bold;
  font-family: Montserrat;
`

const pageData = {
  title: "Kontakt",
  paragraph: `Zapraszamy do zadawania pytań. Napewno odpowiemy.`,
}

const ContactPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <form
      name="contact"
      action="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <StyledLabel>Imię</StyledLabel>
      <StyledInput input type="text" name="name"></StyledInput>
      <StyledLabel>Email</StyledLabel>
      <StyledInput input type="email" name="email"></StyledInput>
      <StyledLabel>Wiadomość</StyledLabel>
      <StyledInput as="textarea" type="text" name="message"></StyledInput>
      <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
      <Button type="submit">wyślij wiadomość</Button>
    </form>
  </>
)

export default ContactPage

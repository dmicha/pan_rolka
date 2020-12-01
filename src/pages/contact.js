import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import axios from "axios"
import PageInfo from "../components/PageInfo/PageInfo"
import Button from "../components/Button/Button"
import ReCAPTCHA from "react-google-recaptcha"
import ContactForm from "../components/ContactForm/ContactForm"
// const StyledInput = styled.input`
//   display: block;
//   border: 2px solid black;
//   background: none;
//   font-family: Montserrat;
//   font-size: 20px;
//   height: ${({ as }) => (as ? "200px" : "auto")};
//   width: ${({ as }) => (as ? "500px" : "300px")};
//   margin-bottom: ${({ as }) => as && "40px"};
// `


const pageData = {
  title: "Kontakt",
  paragraph: "Zapraszamy do zadawania pytań. Napewno odpowiemy.",
}

const ContactPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />

    <ContactForm />
   
  </>
)

export default ContactPage

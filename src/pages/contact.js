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
  font-family: Lato;
`

const pageData = {
  title: "Kontakt",
  paragraph: `Odpowiemy na wszyskie wasze pytania.`,
}

const ContactPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(
            "http://localhost:5001/pan-rolka-276714/us-central1/sendEmail",
            values
          )
          .then(res => {
            console.log(res)
            setSubmitting(false)
          })
          .catch(err => {
            console.log(err)
            setSubmitting(false)
          })
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Imię</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
          <StyledInput
            id="email"
            type="e-mail"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <StyledLabel>Wiadomość</StyledLabel>
          <StyledInput
            as="textarea"
            type="text"
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <Button disabled={isSubmitting}>wyślij wiadomość</Button>
        </form>
      )}
    </Formik>
  </>
)

export default ContactPage

// Adapted from:
// https://github.com/sw-yx/gatsby-netlify-form-example-v2/blob/master/src/pages/contact.js
// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/

// This is what we'll use to navigate to the custom success page
// More on this here: https://www.gatsbyjs.org/docs/gatsby-link/#how-to-use-the-navigate-helper-function
import { navigate } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Button from "../Button/Button"

const StyledLabel = styled.label`
  margin: 30px 0 10px;
  display: block;
  font-size: 14px;
  font-weight: bold;
  font-family: Montserrat;
`
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

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = props => {
  const [name, setName] = useState("")

  const handleChange = e => {
    setName({ ...name, [e.target.name]: e.target.value })
  }

  const handleSubmit = event => {
    // Prevent the default onSubmit behavior
    event.preventDefault()
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/"))
      // On error, show the error in an alert
      .catch(error => alert(error))
  }

  return (
    <form
      data-netlify="true"
      action="/"
      name="contact-form"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <StyledLabel>Imię</StyledLabel>{" "}
      <StyledInput name="firstName" type="text" onChange={handleChange} />
      <Button type="submit" >Wyślij wiadomość</Button>
    </form>
  )
}

export default ContactForm

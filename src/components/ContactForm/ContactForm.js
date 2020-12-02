// This is what we'll use to navigate to the custom success page
// More on this here: https://www.gatsbyjs.org/docs/gatsby-link/#how-to-use-the-navigate-helper-function
import { navigate } from "gatsby"
import React from "react"
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
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const ContactForm = props => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))

      .catch(error => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <StyledLabel>
          Imię
          <br />
          <StyledInput
            type="text"
            required
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </StyledLabel>
      </p>
      <p>
        <StyledLabel>
          Adres e-maila
          <br />
          <StyledInput
            type="email"
            required
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </StyledLabel>
      </p>
      <p>
        <StyledLabel>
          Wiadomość
          <br />
          <StyledInput
            type="text"
            required
            as="textarea"
            rows="7"
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </StyledLabel>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <Button
          type="submit"
        >
          Wyślij wiadomość
        </Button>
      </p>
    </form>
  )
}

export default ContactForm

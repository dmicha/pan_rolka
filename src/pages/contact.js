import React from "react"
import PageInfo from "../components/PageInfo/PageInfo"
import ContactForm from "../components/ContactForm/ContactForm"

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

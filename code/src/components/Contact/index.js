import React from "react";
import {
    Container,
    Icon,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    FormInputMessage
  } from "./ContactElements";

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">YEDevelopment</Icon>
          <FormContent>
            <Form action="https://formspree.io/f/xjvprgjr" method="POST">
              <FormH1>Contact</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput name="email" type="email" required />
              <FormLabel htmlFor="for">Naam</FormLabel>
              <FormInput name="naam" type="text" required />
              <FormLabel htmlFor="for">Bericht</FormLabel>
              <FormInputMessage name="bericht" htmlFor="for"></FormInputMessage>
              <FormButton type="submit" value="Send">Verstuur</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
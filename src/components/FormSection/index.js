import React from 'react'
import { FormContent, FormH1, FormH2, FormInput, Container, FormWrap, Form, FormLabel, FormButton } from './FormElements'

const FormSection = () => {
    return (
       <Container id="contacts">
           <FormWrap>
               <FormContent>
                   <Form action="#">
                       <FormH1>Залиште контакти</FormH1>
                       <FormH2>І ми з вами неодмінно зв’яжемося</FormH2>
                       <FormLabel htmlFor='for'></FormLabel>
                       <FormInput type='name' placeholder="Ваше ім'я" required />
                       <FormInput type='email' placeholder="E-mail" required />
                       <FormInput type='phone' placeholder="Номер телефону" required />
                       <FormInput type='text' placeholder="Повідомлення" />
                       <FormButton type='submit'>ВІДПРАВИТИ</FormButton>
                   </Form>
               </FormContent>
           </FormWrap>
       </Container>
    )
}

export default FormSection;

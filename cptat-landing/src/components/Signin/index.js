import React from 'react'
import { FormContent, FormH1, FormInput, Container, FormWrap, Icon, Form, FormLabel, FormButton, Text } from './SigninElements'

const SignIn = () => {
    return (
       <Container>
           <FormWrap>
               <Icon to="/">CPTAT</Icon>
               <FormContent>
                   <Form action="#">
                       <FormH1>Вхід у кабінет</FormH1>
                       <FormLabel htmlFor='for'>Пошта</FormLabel>
                       <FormInput type='email' required />
                       <FormLabel htmlFor='for'>Пароль</FormLabel>
                       <FormInput type='password' required />
                       <FormButton type='submit'>Продовжити</FormButton>
                       <Text>Забули пароль?</Text>
                   </Form>
               </FormContent>
           </FormWrap>
       </Container>
    )
}

export default SignIn;

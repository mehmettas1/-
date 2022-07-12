import React from 'react'
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Style";
import meal from "../../assets/meal.svg";

const Login = () => {
  return (
   <LoginContainer>
    <FormContainer>
      <StyledImg src={meal} alt="meal"/>
      <header>{<clarusway/>}Recipe</header>
      
    </FormContainer>
   </LoginContainer>
  )
}

export default Login
import React from "react";
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

  const user = {username:"user"}

  const handleSubmit = (e)=>{
    e.preventDefault()
    sessionStorage.setItem("user",JSON.stringify(user))
    window.location.href="/home"
  }
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt="meal" />
        <Header>{<clarusway />}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;

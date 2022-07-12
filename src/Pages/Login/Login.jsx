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
        <header>{<clarusway />}Recipe</header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="text" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;

import React from "react";
import { FormContainer, HeaderContainer, MainHeader } from "./Style";
import Form from "./Form"

const Header = ({setQuery, getData, setMeal,mealTypes}) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>

      <Form
           setQuery= {setQuery} 
           getData= {getData}
           mealTypes= {mealTypes}
           setMeal={setMeal}
      />

   
    </HeaderContainer>
  );
};

export default Header;

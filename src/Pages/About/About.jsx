import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./Style"

import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Mehmet TAS</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi,I'm Mehmet</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Java, Hibernate, SpringBoot, AWS Services.
        </h4>
        <h2>
          <a href="mailto:tas349873@gmail.com">Send Email</a>
          :tas349873@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;

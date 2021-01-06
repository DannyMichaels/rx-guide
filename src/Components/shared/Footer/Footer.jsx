import React from "react";
import styled from "styled-components";
import FooterLinks from "./FooterLinks";

let StyledFooter = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 100px;
  width: 100%;
  background: #feccff;
  box-shadow: 0px 0px 3.5px 5px peachpuff;
  z-index: 100;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLinks />
    </StyledFooter>
  );
};

export default Footer;

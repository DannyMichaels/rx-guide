import React from 'react';
import styled from 'styled-components'
import FooterLinks from './FooterLinks'

let StyledFooter = styled.footer`
  position:fixed;
  left: 0px;
  bottom: 0px;
  height: 100px;
  width: 100%;
  background:#999;
  z-index: 100; 
`

const Footer = (props) => {
  

  return (
   
  <StyledFooter> 
    <FooterLinks />    
      </StyledFooter>
  );
};

export default (Footer); 

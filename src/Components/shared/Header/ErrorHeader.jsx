import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './header';

const ErrorHeader = () => (
  <StyledHeader>
    <Link to="/">
      <img
        className="rxguide-logo"
        src="https://i.imgur.com/9E9bUyw.png"
        width="350px"
        height="300"
        alt="Logo"
      />
    </Link>
  </StyledHeader>
);

export default ErrorHeader;

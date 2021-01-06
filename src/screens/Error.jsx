import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import ErrorHeader from "../Components/shared/Header/ErrorHeader";

let StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed black;
  padding-bottom: 50px;
  background-color: white;
  box-shadow: 2px 2px peachpuff;
  margin: 20px auto;
  box-shadow: 5px 5px peachpuff;
  width: 300px;
  max-width: 300px;
  text-align: center;

  a {
    text-decoration: none;
    color: blue;
    font-size: 20px;
  }

  a:hover {
    transform: skew(-10deg);
  }

  p {
    width: 12em;
    font-size: larger;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

function Error() {
  let location = useLocation();
  return (
    <>
      <ErrorHeader />
      <StyledError>
        <h1> 404 </h1>
        <p>Sorry, &nbsp; {location.pathname.replace("/", "")} doesn't exist!</p>
        <NavLink to="/"> Go Back </NavLink>
      </StyledError>
    </>
  );
}

export default Error;

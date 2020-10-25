import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

let StyledError = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border: 2px dashed black;
padding-bottom: 50px;
background-color: white;
box-shadow: 2px 2px peachpuff;

a{
  text-decoration: none;
  color: blue;
  font-size: 20px;
}

a:hover {
  font-size: ;  
transform: skew(-10deg);
}

p {
  font-size: larger;
}


`

function Error() {
  return (
    <StyledError>
      <h1> 404  </h1>
      <p>Sorry, this page doesn't exist!</p>
    <NavLink to='/'> Go Back </NavLink>
    </StyledError>
  )
}

export default Error 


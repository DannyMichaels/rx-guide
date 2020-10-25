import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

let StyledError = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

a{
  text-decoration: none;
  color: blue;
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


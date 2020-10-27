import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Ul = styled.ul`


    margin: 0;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
    list-style: none;
    z-index: 998;

    li {
      color: #fff;
      padding: 40px;
      text-decoration: none;
  }
  
  li:hover {
    cursor: default;
  }
  span {
    margin-left: 10px;
  }

  span:hover{
    cursor: pointer;
  }
  @media (max-width: 768px) {
   width: 100%;
   text-align: center;
  }

  img {
    width: 100px;
  }
  
`;



const RightNav = ({ open , setOpen }) => {
  return (
    <Ul open={open} setOpen={setOpen}> 
      <Link to='/' onClick={() => setOpen(!open)}><li><img className="li-button" src="https://www.flaticon.com/svg/static/icons/svg/2478/2478295.svg" alt="home" /><span>Home</span></li></Link> 
      <Link to='/about' onClick={() => setOpen(!open)}><li><img className="li-button" src="https://www.flaticon.com/premium-icon/icons/svg/2106/2106068.svg" alt="about" /><span>About</span></li></Link>
      <a href="https://www.linkedin.com/in/daniel-michael-718825155/" target="_blank" alt="LinkedIn" rel="noopener noreferrer" onClick={() => setOpen(!open)}><li><img className="li-button" src="https://www.flaticon.com/svg/static/icons/svg/408/408703.svg" alt="LinkedIn"/><span>LinkedIn</span></li></a>
      <a href="https://www.github.com/dannymichaels" target="_blank" alt="GitHub" rel="noopener noreferrer" onClick={() => setOpen(!open)}><li><img className="li-button" src="https://svgur.com/i/Qug.svg" alt="GitHub" /><span>GitHub</span></li></a>

    </Ul>
  )
}

export default RightNav
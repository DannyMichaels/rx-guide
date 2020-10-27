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
      padding: 20px;
  }
  @media (max-width: 768px) {
   width: 100%;
   text-align: center;
  }

`;

// const handleClick = (e) => {
//   e.preventDefault()
// }

// can't get rightnav to go back after click

const RightNav = ({ open }, setOpen) => {
  return (
    <Ul open={open} setOpen={setOpen}> 
      <Link to='/' onClick={() => { setOpen(open) }}><li><img className="li-button" src="https://www.flaticon.com/svg/static/icons/svg/2478/2478295.svg" alt="home" width='50px'/></li></Link> 
      <Link to='/about'><li><img className="li-button" src="https://www.flaticon.com/premium-icon/icons/svg/2106/2106068.svg" alt="about" width='50px'/></li></Link>
      <Link to= '/'><li><img className="li-button" src="https://www.flaticon.com/svg/static/icons/svg/2514/2514465.svg" alt="contact" width='50px'/></li></Link>
    </Ul>
  )
}

export default RightNav
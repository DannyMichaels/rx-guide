import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'


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
      
        <Link to='/about'>
          {props.location.pathname === '/about' ? null :
            <img
              src="https://i.imgur.com/Zhlm6SD.png"
              width="150"
              height="150"
              className="about"
              alt="Logo"
            />
          }

          {props.location.pathname !== '/about' ? null :
            <a onClick href='https://github.com/DannyMichaels/' target='_blank' rel="noopener noreferrer">
              <img
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                width='150'
                height='150'
                className='about'
                alt='github'
              />
            </a>
          }
        </Link>
       
        <Link to='/' >
          {props.location.pathname === '/' ? null :
            <img
              src="https://i.imgur.com/yM56ZTA.png"
              width="100"
              height="100"
              className="custom-link"
              alt="Home Page"
            />
          }
        </Link>

        <Link to='/custom-medication'>
        {props.location.pathname === '/custom-medication' ? null :
            <img
              src="https://i.imgur.com/BZOV6FC.png"
              width="100"
              height="100"
              className="custom-link"
              alt="Add custom RX"
            />
          }
        </Link>
     
      </StyledFooter>
  );
};

export default withRouter(Footer); 


import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div>
      <footer>

        {/* PLUS BUTTON */}
       
        {props.location.pathname === '/About' ? null :
          <img
            src="https://i.imgur.com/BZOV6FC.png"
            width="100"
            height="100"
            className="plus-button"
            alt="plus button"
          />
        }


        {/* ABOUT */}
      
        <Link to='/About'>
          {props.location.pathname === '/About' ? null :
            <img
              src="https://i.imgur.com/Zhlm6SD.png"
              width="150"
              height="150"
              className="about"
              alt="Logo"
            />
          }
          {props.location.pathname === '/' ? null :
            
            <a onClick href='https://github.com/DannyMichaels/' target='_blank'>
              <img
              src="https://i.pinimg.com/originals/f0/b4/e1/f0b4e156fa3664144cc219f32ac67f86.png"
                width='150'
                height='150'
                className='about'
                alt='github'
              />
            </a>
         
          }
        </Link>
      </footer>
    </div>
  );
};

export default withRouter(Footer); 

// withRouter gives access to the router props.
import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div>
      <footer>



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

        
          {props.location.pathname !== '/About' ? null :
            
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

        <Link to='./Custom'>
        {props.location.pathname === '/Custom' ? null :
            <img
              src="https://i.imgur.com/BZOV6FC.png"
              width="100"
              height="100"
              className="custom-link"
              alt="Add custom RX"
            />
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
      </footer>
    </div>
  );
};

export default withRouter(Footer); 

// withRouter gives access to the router props.
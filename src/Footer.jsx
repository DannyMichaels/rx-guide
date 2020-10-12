import React from 'react';

const Footer = () => {
  return (
    <div>
       <footer>
      
        {/* PLUS BUTTON */}
        
        <a href="#">
            <img
           src="https://i.imgur.com/BZOV6FC.png"
           width="100"
            height="100"
           className="plus-button"
                alt="plus button"
              />
        </a>
        

        {/* ABOUT */}

        <a href="#">
            <img
           src="https://i.imgur.com/Zhlm6SD.png"
           width="150"
           height="150"
           className="about"
                alt="Logo"
              />
          </a>
          
      </footer>
    </div>
  );
};

export default Footer;
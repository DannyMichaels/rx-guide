import React from 'react'
import { Link, withRouter } from 'react-router-dom'

 function Header(props) {
  const whiteList= [ '/about', '/', '/custom-medication', '/medication/']

  return (
    whiteList.includes(props.location.pathname)?( 
    <header style={{ textAlign: "center" }}>
            <Link to='/'>
              <img
                className="rxguide-logo"
                src="https://i.imgur.com/O014jTc.png"
                width="350px"
                height="300"
                alt="Logo"
              />
            </Link>
    </header>) : <></> //<Link to='/'><img className="rxguide-logo" src="https://i.imgur.com/wspOpB0.png" alt="Worried Logo"width="350px"
                // height="300" /></Link>
  )
 }

 export default withRouter(Header)
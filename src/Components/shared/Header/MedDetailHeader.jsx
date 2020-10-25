import React from 'react'
import { Link } from 'react-router-dom'

function MedDetailHeader() {
  return (
    <header style={{textAlign: 'center'}}>   
    <Link to='/'>
              <img
                className="rxguide-logo"
                src="https://i.imgur.com/O014jTc.png"
                width="350px"
                height="300"
                alt="Logo"
              />
      </Link></header>  
  )
}

export default MedDetailHeader
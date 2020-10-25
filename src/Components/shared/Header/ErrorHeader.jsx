import React from 'react'
import { Link } from 'react-router-dom'

function ErrorHeader() {
  return (
            <header>
            <Link to='/'>
              <img
                className="rxguide-logo"
                src="https://i.imgur.com/9E9bUyw.png"
                width="350px"
                height="300"
                alt="Logo"
              />
      </Link>
      </header>
  )
}

export default ErrorHeader

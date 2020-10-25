import React from 'react'
import { Link } from 'react-router-dom'

function ErrorHeader() {
  return (
            <Link style={{ textAlign: 'center' }} to='/'>
              <img
                className="rxguide-logo"
                src="https://i.imgur.com/wspOpB0.png"
                width="350px"
                height="300"
                alt="Logo"
              />
            </Link>
  )
}

export default ErrorHeader

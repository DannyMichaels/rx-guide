import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>

        <nav className="">
          <div className="nav">
            <Link to='/'>
              <img
                className="rxguide-logo"
                src="https://i.imgur.com/O014jTc.png"
                width="400"
                height="300"
                alt="Logo"
              />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

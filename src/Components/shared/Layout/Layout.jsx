import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer'
import Burger from '../Navbar/Burger'

const Layout = (props) => (
  <div className='layout'>
    <Header />
        <Burger />
    <div className="layout-children">
       {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout

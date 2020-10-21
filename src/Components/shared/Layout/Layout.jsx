import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => (
  <div className='layout'>
    <Header />
    <div className="layout-children">
       {props.children}  {/* props.children is a feature of React */}
    </div>
    <Footer />
  </div>
)

export default Layout

import React from 'react'
import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
const Layout = ({ children }) => {
  return (
    <div className = 'flex flex-col min-h-screen'>
        <Heading />
        <main className = 'flex-grow'>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
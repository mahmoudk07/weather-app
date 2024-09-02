import React from 'react'
import Heading from '../Heading/Heading'
// import Footer from '../Footer/Footer'
const Layout = ({ children }) => {
  return (
    <>
        <Heading />
        <main>{children}</main>
        {/* <Footer /> */}
    </>
  )
}

export default Layout
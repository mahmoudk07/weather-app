import React from 'react'
import Layout from '../Layout/Layout'
import { Outlet } from 'react-router-dom'
const LayoutWrapper = () => {
  return (
      <Layout>
          <Outlet />
      </Layout>
  )
}

export default LayoutWrapper
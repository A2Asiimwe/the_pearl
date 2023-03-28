import React from 'react'
import Header from '../Header/Header'
import Router from '../../router/Router'
import Footer from '../Footer/Footer'
function Layout() {
  return (
    <>
      <Header />
      <Router />
      <Footer/>
    </>
  )
}

export default Layout
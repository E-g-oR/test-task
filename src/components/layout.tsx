import React from 'react'
import AppHeader from './app-header';
import Footer from './footer';

const Layout = () => {
  return (
    <div>
        <AppHeader/>
        {/* outlet */}
        <Footer/>
    </div>
  )
}

export default Layout
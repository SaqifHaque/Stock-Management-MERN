import React from 'react';
import Header from '../header/Header';
import Footer from "../footer/Footer";

const Layout = ({children}) => {
  return (
    <div>
        <Header></Header>
        <div>
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout
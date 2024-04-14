import React from 'react';
import Routers from '../../router/Routes';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = () => {
    return ( 
        <>
        <Header/>
        <Routers/>
        <Footer/>
        </>
    );
}
 
export default Layout;
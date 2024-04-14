import React from 'react';
import { Navigate, Route, Routes }  from "react-router-dom"

import Home from "../pages/Home";
import Login from "../pages/Login"
import Register from "../pages/Register"
import SearchResult from "../pages/SearchResultList"
import TourDetails from "../pages/TourDetails"
import Tours from "../pages/Tours"
import About from '../pages/About';

const Routers = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/tours' element={<Tours/>} />
            <Route path='/tour/search' element={<SearchResult/>} />
            <Route path='/tour/:id' element={<TourDetails/>} />
            <Route path='/about' element={<About/>}/>
        </Routes>
     );
}
 
export default Routers;
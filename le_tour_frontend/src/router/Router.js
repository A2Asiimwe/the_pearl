import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom'
import Searchresultslist from "./../pages/Searchresultslist"
import Home from '.././pages/Home'
import Tourdetails from '../pages/Tourdetails';
import Tours from '../pages/Tours'
import Signup from '../pages/Signup';
import Login from '../pages/Login'; 



const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tours/:id' element={<Tourdetails/>} />
            <Route path='/login' element={<Login /> } />
            <Route path='/signup' element={<Signup/>} />
             <Route path='/tour/search'element={<Searchresultslist/>}/>
        </Routes>
    )
}

export default Routers
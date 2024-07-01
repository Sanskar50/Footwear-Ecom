// src/App.js
import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import AuthBar from './components/authbar'
import NavBar from './components/navbar'
import Carousel from './components/corousel'
import TagLine from './components/taglines'
import Collection from './components/collection';
import Launches from './components/newLaunches';
import Footer from './components/footer';
import Derbies from './components/derbies-new';
import Movers from './components/movers-men';
import Slipon from './components/slipon-women';
import Login from './components/login'
import Signup from './components/Signup'


function Home() {
  return (
    <>
      <Carousel />
      <TagLine />
      <Collection />
      <Launches />
      <Footer />
    </>
  );
}

function App() {
  const { user } = useAuthContext()

  return (
    <div className="app">
      <BrowserRouter>
        <AuthBar />
        <NavBar />
        <Routes>
          <Route path='/'
            element={user ? <Home /> : <Navigate to="/login" />}/>
          <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          <Route path='/derbies'
            element={<Derbies />} />
          <Route path='/movers'
            element={<Movers />} />
          <Route path='/slipon'
            element={<Slipon />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

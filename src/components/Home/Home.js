import React from 'react'
import Profile from './Profile';
import Footer from './footer/Footer';
import './Home.css';
import NavBar from './NavBar';

export default function Home() {
  return (
    <div className='home-container'>
      <NavBar/>
      <Profile/>
      <Footer/>
    </div>
  )
}

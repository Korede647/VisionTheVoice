import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <GetStarted/>
      <Footer/>
    </>
  )
}

export default Home

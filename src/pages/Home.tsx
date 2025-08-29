import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import "../components/css/style.css"
import GetStarted from '../components/GetStarted'

const Home = () => {
  return (
    <body>
      <Navbar/>
      <Hero/>
      <Features/>
      <GetStarted/>
    </body>
  )
}

export default Home

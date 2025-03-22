import React from 'react'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <About/>
      <Portfolio/>
    </div>
  )
}

export default Home
import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import './App.css'
import Service from './components/ServiceExperience'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Footer />
    </div>
  )
}

export default App
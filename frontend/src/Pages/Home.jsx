import React from 'react'
import Navbar from '../Components/navbar'
import Banner from '../Components/Banner'
import Section from '../Components/Section2'
import Newarrival from '../Components/NewArrival'
import TBanner from '../Components/TBanner'
import ShoeCollections from '../Components/ShoeCollections'
import AboutSection from '../Components/AboutSection'

const Home = () => {
  return (
    <div>
        {/* <Section /> */}
        
        <Banner />
        <ShoeCollections />
        <Newarrival />
        <TBanner />
        <AboutSection />
        
    </div>
  )
}

export default Home


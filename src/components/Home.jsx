import React from 'react'
import Hero from '../comp_2/Hero'
import LatestCollection from '../comp_2/LatestCollection'
import Bestseller from '../comp_2/Bestseller'
import OurPolicy from '../comp_2/OurPolicy'
import Newsletter from '../comp_2/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home
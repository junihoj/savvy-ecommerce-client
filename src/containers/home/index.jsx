import React from 'react'
import Header from '../../components/layout/Header';
import Hero from './Hero';
import Categories from './Categories';
import BestDeals from './BestDeals';
import Sponsored from './Sponsored';
import Footer from '../../components/layout/Footer';

const Home = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero />
      <Categories />
      <BestDeals />
      <Sponsored />
      <Footer />
    </div>
  )
}

export default Home;
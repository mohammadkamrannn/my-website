import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Slider from '../components/Slider';
import Slider2 from '../components/Slider2';

const Home = () => {
  return (
    <div className='scroll-smooth scroll-p-3'>
      <Header />
      <Slider />
      <Slider2 />
      <Footer />
    </div>
  )
}

export default Home
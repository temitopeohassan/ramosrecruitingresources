










import React from 'react'
import Slider from '../components/Slider'
import Featured from '../components/Featured';
import CTA from '../components/CTA';
import Services from '../components/Services';
import ProgressBarSection from '../components/ProgressBarSection';

const Home = () => {
  return (
    <>
    <Slider />
    <Featured />
    <Services />
    <ProgressBarSection />
    <CTA />
    
    </>
  )
};

export default Home;
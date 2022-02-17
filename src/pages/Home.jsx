import React from 'react';
import About from '../section/About';
import Banner from '../section/Banner';
import Navbar from '../components/Navbar';
import Features from '../section/Features';
import Footer from '../components/Footer';
import Background from '../components/HeaderBg';

const Home = () => {
  return (
    <>
      <Background>
        <Navbar />
        <Banner />
      </Background>
      <About />
      <Features />
      <Footer />
    </>
  );
};

export default Home;

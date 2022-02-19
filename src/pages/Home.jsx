import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Back from '../assets/linear1.png'
import Features from '../components/Features';

const Container = styled.div` 
width: 100%;
background-image: url(${Back});
background-position:   left 0% ;
background-size: auto ;
background-repeat: no-repeat;



@media screen and (max-width: 800px){
    background-position: top 30% right 30%;
}
@media screen and (max-width: 700px){
    background-position: top 0% right 50%;

}

`

function Home() {
  return ( 
  <>
    
    <Container>
    <Navbar/>
     <Banner/>
    <About/>
    <Features/>
    </Container>
   
  </>
  );
}

export default Home;

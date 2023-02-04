import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';

function Home() {
      document.title = 'Home';
  return (
      
    <Container>
      <Header/>
      <Section 
            title='Model 3' 
            desc='Order Online For '
            desc2='Touchless Delivery'
            leftBtn='Custom Orders'
            rightBtn='Existing Inventory'
            bgImg='model-3.jpg'/>
      <Section 
            title='Model Y' 
            desc='Order Online For '
            desc2='Touchless Delivery'
            leftBtn='Custom Orders'
            rightBtn='Existing Inventory'
            bgImg='model-y.jpg'/>
      <Section 
            title='Model S' 
            desc='Order Online For '
            desc2='Touchless Delivery'
            leftBtn='Custom Orders'
            rightBtn='Existing Inventory'
            bgImg='model-s.jpg'/>
      <Section 
            title='Model X' 
            desc='Order Online For '
            desc2='Touchless Delivery'
            leftBtn='Custom Orders'
            rightBtn='Existing Inventory'
            bgImg='model-x.jpg'/>
      <Section 
            title='Solar Panels'
            desc='Lowest Cost Solar Panels in America' 
            leftBtn='Order Now'
            rightBtn='Learn More'
            bgImg='solar-panel.jpg'/>

      <Section 
            title='Solar Roof'
            desc='Produce Clean Energy From Your Roof' 
            leftBtn='Order Now'
            rightBtn='Learn More'
            bgImg='solar-roof.jpg'/>

      <Section 
            title='Accessories'
            leftBtn='Shop Now'
            bgImg='accessories.jpg'/>
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`;
export default Home

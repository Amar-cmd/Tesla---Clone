import React, { useState } from "react";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function UtilitySection(props) {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
      }

    const settings = {
        dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    pauseOnHover:true,
    slidesToScroll:1,
    swipeToSlide:true,
    autoplay:true,
      };


  return (
    <Wrap>
      <UpperContainer>
        <LeftSection>
          <h3>Utilities</h3>
          <h1>A Place For Everything</h1>
          <button>Order Now</button>
        </LeftSection>
        <RightSection>
          <p>
            Model Y provides maximum versatility—able to carry 7 passengers and
            their cargo. Each second row seat folds flat independently, creating
            flexible storage for skis, furniture, luggage and more. The liftgate
            opens to a low trunk floor that makes loading and unloading easy and
            quick.
          </p>
        </RightSection>
      </UpperContainer>

      <LowerContainer>

        <Carousel >
            <img onClick={() => toggleTab(1)} className={toggleState === 1 ? "active" : "inactive" }
             src="/images/Model-Y-Utility-B-Desktop-LHD-NA.jfif"/>
            <img onClick={() => toggleTab(2)} className={toggleState === 2 ? "active" : "inactive" } 
            src="/images/Model-Y-Utility-Hero-Desktop-LHD.jfif"/>

        </Carousel>

        <Buttons>
            <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "active" : "inactive" }></button>
            <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "active" : "inactive" } ></button>
        </Buttons>

        <Text>
            <p onClick={() => toggleTab(1)} className={toggleState === 1 ? "active" : "inactive" }>Versatile seating and storage for cargo and passengers</p>
            <p onClick={() => toggleTab(2)} className={toggleState === 2 ? "active" : "inactive" }>Room for up to seven with optional third row</p>
        </Text>
      </LowerContainer>
    </Wrap>
  );
}

const Wrap = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const UpperContainer = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: row;
  width: 60vw;
  padding-top: 30px;
  margin-top: 30px;
`;

const LeftSection = styled.div`
  width: 40vw;

  h3 {
    font-weight: 200;
  }

  h1 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    margin-top: 20px;
    margin-right: 20px;
    border-radius: 4px;
    padding: 10px 40px;
    background: transparent;
    color: black;
    transition: ease-in-out 0.2s;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
      background: black;
      color: white;
      transition: ease-in-out 0.2s;
    }
  }
`;
const RightSection = styled.div`
  width: 60vw;
`;
const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* border: 2px solid green; */
    height:80vh;
    width:60vw; 
`;

const Carousel = styled.div`
padding-top: 10px;
img{
    height:80vh;
    width:60vw; 
    height:auto;
    border-radius: 30px;
    margin-top: 10px;
    /* transition: ease-in-out 500ms; */

    animation: animateVisible 1.2s;
}
.active{
    display:block;
    /* transition: ease-in-out 500ms; */
    animation: animateVisible 1.2s;


}

.inactive{
    display:none;
}
`;

const Buttons = styled.div`
    display:flex;
    width:50vw;
    justify-content: center;
    margin-top: 20px;
    button{
    width:12px;
    margin-right: 10px;
    height: 12px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    }
    
.active{
    /* display:block; */
    background: black;

}

.inactive{
    /* display:none; */
    background: grey;

}
`;

const Text = styled.div`
text-align: center;
.active{
    display:block;
    /* background: black; */

}

.inactive{
    display:none;
    /* background: grey; */

}
`;
export default UtilitySection;

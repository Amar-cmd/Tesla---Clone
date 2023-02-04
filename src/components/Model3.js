import React, { useState } from "react";
import styled from "styled-components";
import Modal from 'react-modal';
import Header from "./Header";

Modal.setAppElement('#root');
function Model3() {

  const [navbar, setNavbar] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [modelState, setModalState] = useState(false);
  
  const toggleTab = (index) => {
    setToggleState(index);
  }
  

  const navbarRemover = () => {
    if(window.screenY <= "100vh"){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', navbarRemover);

  return (
    <>
    <Header 
    />
      <Wrap>
        <img
          className="background"
          src="/images/Model3-Main-Hero-Desktop-LHD.jpg"
          alt="Model3-Main-Hero-Desktop-LHD"
        />
        <TextComponent>
          <h1>Model 3</h1>
        </TextComponent>

        <DetailComponent>
          <DetailInfo>
            <Detail>
              <h1>3.1s</h1>
              <p>0-60 mph*</p>
            </Detail>

            <Detail>
              <h1>358mi</h1>
              <p>Range (EPA est.)</p>
            </Detail>

            <Detail>
              <h1>AWD</h1>
              <p>Dual Motor</p>
            </Detail>

            <Detail>
              <button>Order Now</button>
            </Detail>
          </DetailInfo>
          <DownArrow src="/images/down-arrow.svg" />
        </DetailComponent>
      </Wrap>


      <Wrap_two>
        <img
          className="background2"
          src="images/model-3-hero-a-desktop.jpg"
          alt="model-3-hero-a-desktop"
        />
        <DetailComponent_two>
          <Detail_two>
            <h3>Safety</h3>
            <h1>Built for Safety</h1>
            <p>
              Safety is the most important part of every Tesla. We design our
              vehicles to <span>exceed safety standards</span>.
            </p>
            <p className="heading">5-Star Rating</p>
            <p>
              Model 3 achieved NHTSA 5-star safety ratings in every category and
              subcategory.
            </p>
            <p className="heading">Top Safety Pick+</p>
            <p>
              Model 3 received the IIHS Top Safety Pick+ award, with top ratings
              in all crashworthiness and front crash prevention categories.
            </p>
          </Detail_two>

          <Buttons_two>
            <button>Learn More</button>
            <button>Order Now</button>
          </Buttons_two>
        </DetailComponent_two>
      </Wrap_two>


      <Wrap_three>
        <Detail_Top3>
      <img
          className="background3"
          src="images/Model-3-Performance-Hero-Desktop-LHD.jpg"
          alt="model-3-hero-a-desktop"
          />
         
        <DetailInfo3>
        <Detail3>
         <h1>3.1s</h1>
          <p>Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds</p>
         </Detail3>

         <Detail3>
         <h1>162mph</h1>
          <p>Improved handling and aerodynamics allow for a top speed of 162 mph</p>
         </Detail3>
         
         <Detail3>
         <h1>AWD</h1>
          <p>Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions</p>
         </Detail3>
        </DetailInfo3>

        </Detail_Top3>


        <Detail_bottom3>
          <LeftSection>
              <h3>Performance</h3>
              <h1>Quickest Acceleration</h1>
                    <Buttons_3>
                  <button>Learn More</button>
                  <button>Order Now</button>
                    </Buttons_3>
          </LeftSection>
          <RightSection>
                <p>Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.</p>
          </RightSection>
        </Detail_bottom3>
      </Wrap_three>





      <Wrap_three>
        <Detail_Top3>
      <img
          className="background3"
          src="images/Model-3-AWD-Hero-Desktop-LHD.jpg"
          alt="model-3-hero-a-desktop"
          />
         
        <DetailInfo3>
        <Detail3>
         <h1>2</h1>
          <p>Independent motors digitally control torque to the front and rear wheels</p>
         </Detail3>

         <Detail3>
         <h1>10 ms</h1>
          <p>Dual motors respond to changing conditions in as little as 10 milliseconds</p>
         </Detail3>
         
         <Detail3>
          <h1>Weather</h1>
          <p>Unparalleled traction and control, in all weather conditions</p>
         </Detail3>
        </DetailInfo3>

        </Detail_Top3>


        <Detail_bottom3>
          <LeftSection>
              <h3>All-Wheel Drive</h3>
              <h1>Dual Motor</h1>
                    <Buttons_3>
                  <button>Order Now</button>
                  
                    </Buttons_3>
          </LeftSection>
          <RightSection>
                <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
          </RightSection>
        </Detail_bottom3>
      </Wrap_three>



      <Wrap_two>
        <img
          className="background2"
          src="images/Model-3-Range-Hero-Desktop-LHD.jpg"
          alt="model-3-hero-a-desktop"
        />
        <DetailComponent_two>
          <Detail_two>
            <h3>Range</h3>
            <h1>Go Anywhere</h1>
            <p>
            Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week.
            </p>
            <img src="images/model-3-range-map.jpg"/>
            
          </Detail_two>

          <Buttons_two>
            <button>Learn More</button>
            <button>Order Now</button>
          </Buttons_two>
        </DetailComponent_two>
      </Wrap_two>


      <Wrap_three>
        <Detail_Top3>
      <img
          className="background3"
          src="images/Autopilot-Hero-Vision-Desktop.jpg"
          alt="model-3-hero-a-desktop"
          />
         
        <DetailInfo5>
        <Detail5>
         <h1>360°</h1>
          <p>Rear, side and forward-facing cameras provide maximum visibility</p>
         </Detail5>

         <Detail5>
         <h1>250 m</h1>
          <p>Powerful visual processing at up to 250 meters of range</p>
         </Detail5>
         
         <Detail5>
         <h1>Sensor</h1>
          <p>Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking</p>
         </Detail5>
        </DetailInfo5>

        </Detail_Top3>


        <Detail_bottom3>
          <LeftSection>
              <h3>Autopilot</h3>
              <h1>Future of Driving</h1>
                    <Buttons_3>
                  <button>Learn More</button>
                  <button>Order Now</button>
                    </Buttons_3>
          </LeftSection>
          <RightSection>
                <p>Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.</p>
          </RightSection>
        </Detail_bottom3>
      </Wrap_three>






      <Wrap_three>
        <Detail_Top3>
      <img
          className="background3"
          src="images/Model-3-Interior-Hero-Desktop-LHD.jpg"
          alt="model-3-hero-a-desktop"
          />
         
        <DetailInfo3>
        <Detail3>
         <h1>15 inch</h1>
          <p>A touchscreen display designed to improve over time</p>
         </Detail3>

         <Detail3>
         <h1>Wi-Fi</h1>
          <p>Over-the-air software updates introduce new features, functionality and performance</p>
         </Detail3>
         
         <Detail3>
         <h1>Roof</h1>
          <p>An expansive Glass Roof provides more headroom and UV protection</p>
         </Detail3>
        </DetailInfo3>

        </Detail_Top3>


        <Detail_bottom3>
          <LeftSection>
              <h3>Interior</h3>
              <h1>Built Around the Driver</h1>
                    <Buttons_3>
                  <button>Learn More</button>
                  <button>Order Now</button>
                    </Buttons_3>
          </LeftSection>
          <RightSection>
                <p>The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.</p>
          </RightSection>
        </Detail_bottom3>
      </Wrap_three>

      <Wrap_eight style={{background: "black"}}>
          <img src="images/Model-3-Specs-Desktop-Mobile-LHD.jpg"/>

          <DetailComponent_eight>
            <h1>Model 3 <span>Specs</span></h1>
            <ButtonGroup_eight>
            
              <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "active" : "inactive" }>Performance</button>
              <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "active" : "inactive" }>Long Range AWD</button>
              <button onClick={() => toggleTab(3)} className={toggleState === 3 ? "active" : "inactive" }>Rear-Wheel Drive</button>
              <button onClick={() => setModalState(true)} id="compare">Compare</button>
            </ButtonGroup_eight>

            <Modal isOpen={modelState} onRequestClose={() => setModalState(false)}
            style = {{
              content: {
                
                  // borderRadius: '100px',
                  // background:'rgba(8,8,8,0.4)',
                  backgroundColor:'#222',
                  top: '5vh',
                  left: '20vw',
                  right: '20vw',
                  marginTop:'20px',
                  border:'2px solid red',
                  bottom: '5vh',
                  padding:'20px',
                  color:'white',
                  border:'none',
                  overflowX:'hidden',
                  // width:0,
                  msOverflowStyle:'none',
                  scrollbarWidth:'none',
                  overflowY:'auto',
                  WebkitScrollbarDisplay:'none'
                  // WebkitOverflowScrolling: 'touch',
                  
                  
              },

              overlay: {
                border:'none',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                background:'transparent',
                backdropFilter:'blur(4px)',
                
              }
            }}>
              <CloseBtn>
                <button onClick={() => setModalState(false)}>X</button>
              </CloseBtn>

              <ModalSection>
                  <h2>Compare Model 3</h2>
                  <ImagesForComparison>
                    <img src="images/lhd-compare-modal-performance.png"/>
                    <img src="images/lhd-compare-modal-long-range.png"/>
                    <img src="images/lhd-compare-modal-standard-range.png"/>
                  </ImagesForComparison>
                  <CarName>
                  <p>Performance Dual Motor</p>
                  <p>Long Range Dual Motor</p>
                  <p>Rear-Wheel Drive Rear-Wheel</p>
                  </CarName>
                  <div className="heading">
                    <FeatureLabel>
                      <span className="feature_heading">Acceleration</span>
                    </FeatureLabel>
                  <ModalContainer>
                    <Group>
                      <h1>3.1s</h1>
                      <p>0-60mph*</p>
                    </Group>

                    <Group>
                      <h1>4.2s</h1>
                      <p>0-60mph*</p>
                    </Group>

                    <Group>
                      <h1>5.8s</h1>
                      <p>0-60mph*</p>
                    </Group>
                  </ModalContainer>

                  <span>Range (EPA est.)</span>

                  <ModalContainer>
                    <Group>
                      <h1>315</h1>
                      <p>miles</p>
                    </Group>

                    <Group>
                      <h1>358</h1>
                      <p>miles</p>
                    </Group>

                    <Group>
                      <h1>272</h1>
                      <p>miles*</p>
                    </Group>
                  </ModalContainer>


                  <span>Top Speed</span>

                  <ModalContainer>
                    <Group>
                      <h1>162</h1>
                      <p>mph</p>
                    </Group>

                    <Group>
                      <h1>145</h1>
                      <p>mph</p>
                    </Group>

                    <Group>
                      <h1>140</h1>
                      <p>mph</p>
                    </Group>
                  </ModalContainer>


                  <span>Wheels</span>

                  <ModalContainer>
                    <Group>
                      <p>20” Überturbine Wheels</p>
                      <p></p>
                    </Group>

                    <Group>
                      <p>18" Aero Wheels</p>
                      <p>19" Sport Wheels</p>
                    </Group>

                    <Group>
                    <p>18" Aero Wheels</p>
                    <p>19" Sport Wheels</p>
                    </Group>
                  </ModalContainer>


                  <span>Included</span>

                  <ModalContainer>
                    <Group>
                      <p>Premium Interior</p>
                    </Group>

                    <Group>
                    <p>Premium Interior</p>
                    </Group>

                    <Group>
                    <p>Partial Premium Interior</p>
                    </Group>
                  </ModalContainer>
                  </div>

                
              </ModalSection>
              
            </Modal>

            <Detail_eight >
              <DetailPerformance className={toggleState === 1 ? "detail_active" : "detail_inactive" }>
                  <LeftGrid>
                  <Specs>
                <div></div>
                <p>Battery</p>
                <p>Long Range</p>
              </Specs>
            
              <Specs>
                <div></div>
                <p>*Acceleration</p>
                <p>3.1 s 0-60 mph with rollout subtracted</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Range</p>
                <p>315 miles (EPA est.)</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Drive</p>
                <p>Dual Motor All-Wheel Drive</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Seating</p>
                <p>5 Adults</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Wheels</p>
                <p>20"</p>
              </Specs>
                  </LeftGrid>

                <RightGrid>
                  <Specs>
                  <div></div>
                  <p>Weight</p>
                  <p>4,048 lbs</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Cargo</p>
                  <p>23 cu ft</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Displays</p>
                  <p>15" Center Touchscreen</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Supercharging Max/Payment Type</p>
                  <p>250 kW Max; Pay Per Use</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Onboard Charger Max</p>
                  <p>11.5 kW max (48A)</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Warranty</p>
                  <p>Basic Vehicle - 4 years or 50,000 mi, whichever comes first
Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first</p>
                </Specs>

                </RightGrid>
                </DetailPerformance>

              <DetailLongRangeAWD className={toggleState === 2 ? "detail_active" : "detail_inactive" }>
              <LeftGrid>
                  <Specs>
                <div></div>
                <p>Battery</p>
                <p>Long Range</p>
              </Specs>
            
              <Specs>
                <div></div>
                <p>*Acceleration</p>
                <p>4.2 s 0-60 mph</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Range</p>
                <p>358 miles (EPA est.)</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Drive</p>
                <p>Dual Motor All-Wheel Drive</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Seating</p>
                <p>5 Adults</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Wheels</p>
                <p>18" or 19"</p>
              </Specs>
                  </LeftGrid>

                <RightGrid>
                  <Specs>
                  <div></div>
                  <p>Weight</p>
                  <p>4,034 lbs</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Cargo</p>
                  <p>23 cu ft</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Displays</p>
                  <p>15" Center Touchscreen</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Supercharging Max/Payment Type</p>
                  <p>250 kW Max; Pay Per Use</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Onboard Charger Max</p>
                  <p>11.5 kW max (48A)</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Warranty</p>
                  <p>Basic Vehicle - 4 years or 50,000 mi, whichever comes first
Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first</p>
                </Specs>
                
                </RightGrid>

              </DetailLongRangeAWD>
              
              <DetailRearWheelDrive className={toggleState === 3 ? "detail_active" : "detail_inactive" }>
              <LeftGrid>
                  <Specs>
                <div></div>
                <p>Battery</p>
                <p>Standard Range</p>
              </Specs>
            
              <Specs>
                <div></div>
                <p>*Acceleration</p>
                <p>5.8 s 0-60 mph</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Range</p>
                <p>272 miles (EPA est.)</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Drive</p>
                <p>Rear-Wheel Drive</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Seating</p>
                <p>5 Adults</p>
              </Specs>

              <Specs>
                <div></div>
                <p>*Wheels</p>
                <p>18" or 19"</p>
              </Specs>
                  </LeftGrid>

                <RightGrid>
                  <Specs>
                  <div></div>
                  <p>Weight</p>
                  <p>3,862 lbs</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Cargo</p>
                  <p>23 cu ft</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Displays</p>
                  <p>15" Center Touchscreen</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Supercharging Max/Payment Type</p>
                  <p>170 kW Max; Pay Per Use</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Onboard Charger Max</p>
                  <p>7.6 kW max (32A)</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>Warranty</p>
                  <p>Basic Vehicle - 4 years or 50,000 mi, whichever comes first
Battery & Drive Unit - 8 years or 100,000 mi, whichever comes first</p>
                </Specs>
                
                </RightGrid>
              </DetailRearWheelDrive>
            </Detail_eight>
          </DetailComponent_eight>


      </Wrap_eight>























      <Wrap_nine>
        <Top_nine>
                <LeftWrap>
                    <h2>Experience Model 3</h2>
                    <Buttons_3>
                      <LeftButton>

                  <button>Learn More</button>
                      </LeftButton>
                  <button>Order Now</button>
                    </Buttons_3>
                </LeftWrap>

                <RightWrap>
                    <img src="images/tesla-cdn_thron_com-Model-3-Order-Hero-Desktop-Mobile-Global.jpg"/>
                </RightWrap>
        </Top_nine>

        <Bottom_nine>
            <p>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. <span>Learn more about Standard Connectivity and any limitations.</span></p>
        </Bottom_nine>
      </Wrap_nine>




    </>
  );
}




// ===============Section 1======================


const Wrap = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  position: relative;

  .background {
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-position: center;
    object-fit: cover;
    /* background-size: cover; */
  }
`;

const TextComponent = styled.div`
  position: absolute;
  margin-top: 150px;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: revert;
  /* border:2px solid red; */
`;

const DetailComponent = styled.div`
  /* border:2px solid red; */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50vw;
  margin-bottom: 20px;
  bottom: 0;
  flex-direction: column;
`;

const DetailInfo = styled.div`
  /* border:2px solid black; */
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Detail = styled.div`
  /* border:2px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1,
  p {
    color: white;
  }

  button {
    background: transparent;
    border: 3px solid white;
    border-radius: 4px;
    color: white;
    width: 204px;
    padding: 8px 24px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:hover {
      background: white;
      color: black;
      transition: ease-in-out 0.2s;
    }
  }
`;

const DownArrow = styled.img`
  /* border:2px solid black; */
  height: 40px;
  width: 40px;
  margin-top: 20px;
  cursor: pointer;
  animation: animate infinite 1.5s;
`;

// ===============Section 2======================
const Wrap_two = styled.div`
  /* border:2px solid red; */
  display: flex;
  .background2 {
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-position: center;
    object-fit: cover;
  }
  z-index: -1;
`;

const DetailComponent_two = styled.div`
  /* border:2px solid green; */
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  padding-left: 30px;
  width: 500px;
  margin-right: 20px;
  padding-right: 20px;
  text-align: justify;

  h1 {
    margin-bottom: 20px;
  }

  h3 {
    color: grey;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
  }

  p {
    color: grey;
  }

  p.heading {
    font-weight: 600;
    color: black;
    padding-top: 20px;
  }
`;

const Buttons_two = styled.div`
  /* border:2px solid black; */
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 40px;

  button {
    cursor: pointer;

    /* display: flex; */
    /* border:2px solid red; */
    border-radius: 4px;
    padding: 10px 20px;
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


const Detail_two = styled.div`
  /* border:2px solid black; */
  img{
    margin-top: 20px;
    width:336px;
    height:287px;
  }
`;


// ===============Section 3======================

const Wrap_three = styled.div`

  width:100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position:relative; */
  /* border: 2px solid red; */

  img.background3{
    z-index: -1;
    width: 100vw;
    height: 75vh;
    background-position: center;
    object-fit: cover;
}`;


const Detail_Top3 = styled.div`
  /* border:2px solid black; */
  position: relative;
  display:flex;
  align-items: flex-end;
  justify-content: center;
  /* bottom: 0; */
`;

const DetailInfo3 = styled.div`
/* border:2px solid white; */
position: absolute;
display:flex;
align-items: flex-end;
justify-content: space-between;
width: 70vw;
/* height: 70px; */
margin-bottom: 50px;
`;


const Detail3 = styled.div`
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  /* border:2px solid red; */
  color:white;

  p{
    text-align: center;
    padding:0 20px;
    /* width:300px; */
  }

`;
const Detail_bottom3 = styled.div`
/* border:  2px solid red; */
width: 60vw;
height:25vh;
/* align-items: center; */
display: flex;
justify-content: center;
`;


const LeftSection = styled.div`
/* border:  2px solid blue; */
width:50%;

h3{
  margin-top: 30px;
  font-weight: 400;
  color:grey;
}

h1{
  font-weight: 500;
}


`;



const RightSection = styled.div`
/* border:  2px solid blue; */
width:70%;
margin-top: 30px;
color:grey;
text-align: justify;
`;

const Buttons_3 = styled(Buttons_two)`
  display: flex;
  justify-content: flex-start;

  button{
  margin-top: 20px;
  margin-right: 20px;
}

`;

const DetailInfo5 = styled(DetailInfo3)`

`;

const Detail5 = styled(Detail3)`
  color:black;
  
`;





// ===============Section 8======================


const Wrap_eight = styled.div`
/* border:2px solid white; */

width:100vw;
height:100vh;
display:flex;
align-items: flex-end;
justify-content: space-between;
flex-direction: row;
`;

const DetailComponent_eight = styled.div`
/* border:2px solid white; */

align-items: center;
height:90vh;
/* left:0; */
width:60vw;

h1{
  color:white;
  margin-bottom: 30px;
}

span{
  font-weight: 200;
}


`;
const ButtonGroup_eight = styled.div`
  display:grid;
  /* margin-bottom: 10px; */
  /* border:2px solid white; */
  width:480px;
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-auto-flow: row;
  grid-gap: 4px;
  /* height:auto; */

  button{
    /* background: transparent; */
    /* color:grey; */
    /* border: 1px solid grey; */
    border-radius:4px;
    height:32px;
    width:242px;
    cursor:pointer;
  }

  button.inactive{
    border: 1px solid grey;
    color:grey;
    background: transparent;
    /* display: none; */

  }
  button.active{
    border:2px solid white;
    background: transparent;
    color:white;
    /* display: block; */
  }

  button#compare{
    background:white;
    color:black;
    font-weight: 700;
    letter-spacing: 0.75px;
  }
`;

const Detail_eight = styled.div`
display:flex;
flex-direction: row;
/* grid-template-columns: repeat(2,minmax(0,1fr)); */

.detail_active{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

}

.detail_inactive{
  display:none;
}



`;
const Specs = styled.div`
  color: white;
  div{
    width:30px;
    height:1px;
    background:grey;
    margin-top: 20px;
    margin-bottom: 20px;
  }


`;

const DetailPerformance = styled.div`
/* border:2px solid red; */
  display:flex;
  flex-direction: row;
  width: 480px;
  /* grid-auto-flow: row;
  
  grid-template-columns: repeat(2,minmax(0,1fr)); */

`;

const LeftGrid = styled.div`

/* border:2px solid purple; */
width:50%;
`;
const RightGrid = styled.div`
/* border:2px solid purple; */
width:50%;

`;
const DetailLongRangeAWD = styled(DetailPerformance)``;
const DetailRearWheelDrive = styled(DetailLongRangeAWD)``;

const CloseBtn = styled.div`
display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  button{
    color:  white;
    background:transparent;
    border:none;
    font-size: 28px;
    cursor:pointer;
    padding:10px;
    border-radius: 10px;
    transition: ease-in-out 0.2s;


  &:hover{
    background: grey;
  }
  }
`;

const ImagesForComparison = styled.div`
  /* border: 2px solid red; */
  /* margin-top:20px; */
  display: grid;
  grid-gap:2px;
  grid-auto-flow: column;  
  img{
    width:100%;

  }

`;

const CarName = styled(ImagesForComparison)`
display: grid;
grid-auto-flow: column;  

p{
  /* border:2px solid white; */
  text-align: center;
  margin-bottom:20px;

}
`;

const ModalSection=styled.div`
  display:flex;
  flex-direction:column;
  /* border:2px solid red; */

  
`;

const FeatureLabel = styled.div`
  grid-column: 1/span 3;
    overflow-x: hidden;

    .feature_heading{
      display: block;
    padding: 0;
    position: relative;

    
    }
    span::after{
      -webkit-margin-start: 8px;
    background-color: var(--tds-theme-foreground-low-contrast);
    content: "";
    display: inline-block;
    height: 1px;
    margin-inline-start: 8px;
    position: absolute;
    top: 10px;
    width: 100%;
    }
`;

const ModalContainer = styled.div`
display: grid;
grid-auto-flow: column;  
padding:20px 30px;
`;

const Group = styled.div`
display:flex;
flex-direction:column;
`;





















// ===============Section 9======================

const Wrap_nine = styled.div`
width:100vw;
height: 100vh;
display: flex;
flex-direction: column;

`;

const Top_nine = styled.div`
/* border:2px solid red; */
width: 100vw;
height: 80vh;
display:flex;
align-items: center;
justify-content: flex-end;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 500;
font-size: 1.2rem;
letter-spacing: 1px;
/* color:blue; */

`;
const LeftWrap = styled.div`
/* border:2px solid black; */
padding-right:300px;


`;
const RightWrap = styled.div`
/* border:2px solid black; */

img{
    width:888px;
    height: 287px;
    
  }

`;
const Bottom_nine = styled.div`
/* border: 2px solid black; */
width:100vw;
height:25vh;
/* width: 50vw; */
display: flex;
align-items: center;
justify-content: center;
text-align: center;
p{
  width:40vw;
}

span{
  border-bottom: 1px solid black;
  cursor: pointer;
  transition: ease-in-out 0.222s;

  &:hover{
    box-shadow: 0 1px 0 0 currentColor;
    transition: box-shadow .33s cubic-bezier(0.5,0,0,0.75) ease;
  }
}

`;


const LeftButton = styled.div`
button{
  background: black;
color: white; 
}

&:hover{
  opacity: 0.8;
}
`;
export default Model3;


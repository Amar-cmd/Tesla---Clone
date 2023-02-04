import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';


function SpecificationSection(props) {
    const [toggleState, setToggleState] = useState(1);
    const [modelState, setModalState] = useState(false);


    const toggleTab = (index) => {
        setToggleState(index);
      }
      
  return (
    <div>
      <Wrap background = {props.bgImg}>
        <Container>

        <BackgroundImage>
          <img src={`/images/${props.bgImg}`}/>
        </BackgroundImage>

          <DetailComponent>
            <h1>{props.title}<span>Specs</span></h1>
            <ButtonGroup>
            
              {props.performance &&
              <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "active" : "inactive" }>{props.performance}</button>
              }

              {props.lrawd && 
              <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "active" : "inactive" }>{props.lrawd}</button>
              }
              
              {props.rwd &&
              <button onClick={() => toggleTab(3)} className={toggleState === 3 ? "active" : "inactive" }>Rear-Wheel Drive</button>
            }

              {props.compare &&
            <button onClick={() => setModalState(true)} id="compare">Compare</button>
            }
            </ButtonGroup>

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

            <Detail>
              <DetailPerformance className={toggleState === 1 ? "detail_active" : "detail_inactive" }>
                  <LeftGrid>
                  <Specs>
                <div></div>
                <p>{props.perf_battery_h1}</p>
                <p>{props.perf_battery_p}</p>
              </Specs>
            
              <Specs>
                <div></div>
                <p>{props.perf_acceleration_h1}</p>
                <p>{props.perf_acceleration_p}</p>
              </Specs>

              <Specs>
                <div></div>
                <p>{props.perf_range_h1}</p>
                <p>{props.perf_range_p}</p>
              </Specs>

              <Specs>
                <div></div>
                <p>{props.perf_drive_h1}</p>
                <p>{props.perf_drive_p}</p>
              </Specs>

              <Specs>
                <div></div>
                <p>{props.perf_seating_h1}</p>
                <p>{props.perf_seating_p}</p>
              </Specs>

              <Specs>
                <div></div>
                <p>{props.perf_wheels_h1}</p>
                  <p>{props.perf_wheels_p}</p>
                
              </Specs>
                  </LeftGrid>

                <RightGrid>
                  <Specs>
                  <div></div>
                  <p>{props.perf_weight_h1}</p>
                  <p>{props.perf_weight_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.perf_mcv_h1}</p>
                  <p>{props.perf_mcv_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.perf_ts_h1}</p>
                  <p>{props.perf_ts_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.perf_display_h1}</p>
                <p>{props.perf_display_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.perf_sc_h1}</p>
                  <p>{props.perf_sc_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.perf_warrenty_h1}</p>
                  <p>{props.perf_warrenty_p}</p>
                  <p>{props.perf_warrenty_p2}</p>
                </Specs>

                </RightGrid>
                </DetailPerformance>

              <DetailLongRangeAWD className={toggleState === 2 ? "detail_active" : "detail_inactive" }>
              <LeftGrid>
              <Specs>
                <div></div>
                <p>{props.lrawd_battery_h1}</p>
                <p>{props.lrawd_battery_p}</p>
              </Specs>
            
              <Specs>
                <div></div>
                <p>{props.lrawd_acceleration_h1}</p>
                <p>{props.lrawd_acceleration_p}</p>
              </Specs>

              <Specs>
                <div></div>
                <p>{props.lrawd_range_h1}</p>
                <p>{props.lrawd_range_p}</p>
              </Specs>

              <Specs>
                <div></div>
                <p>{props.lrawd_drive_h1}</p>
                <p>{props.lrawd_drive_p}</p>
              </Specs>

              <Specs>
                <div></div>
                <p>{props.lrawd_seating_h1}</p>
                <p>{props.lrawd_seating_p}</p>
              </Specs>

              <Specs>
                <div></div>
                <p>{props.lrawd_wheels_h1}</p>
                  <p>{props.lrawd_wheels_p}</p>
                
              </Specs>
                  </LeftGrid>

                <RightGrid>
                  <Specs>
                  <div></div>
                  <p>{props.lrawd_weight_h1}</p>
                  <p>{props.lrawd_weight_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.lrawd_mcv_h1}</p>
                  <p>{props.lrawd_mcv_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.lrawd_ts_h1}</p>
                  <p>{props.lrawd_ts_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.lrawd_display_h1}</p>
                <p>{props.lrawd_display_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.lrawd_sc_h1}</p>
                  <p>{props.lrawd_sc_p}</p>
                </Specs>

                  <Specs>
                  <div></div>
                  <p>{props.lrawd_warrenty_h1}</p>
                  <p>{props.lrawd_warrenty_p}</p>
                  <p>{props.lrawd_warrenty_p2}</p>
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
            </Detail>
          </DetailComponent>
          </Container>


      </Wrap>

    </div>
  )
}


const Wrap = styled.div`
/* border:2px solid white; */

width:100vw;
height:100vh;
display:flex;
align-items: flex-end;
justify-content: space-between;
flex-direction: row;
background: black;

`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const BackgroundImage = styled.div`
/* border: 2px solid red; */
width:40vw;;
align-items: center;
img{
  width:40vw;

}
`;

const DetailComponent = styled.div`
/* border:2px solid white; */
margin-left: 20px;
padding-left: 20px;
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
const ButtonGroup = styled.div`
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

const Detail = styled.div`
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


export default SpecificationSection

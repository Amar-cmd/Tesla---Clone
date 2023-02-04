import React from 'react'
import styled from 'styled-components';

function OrderSection(props) {
  return (
    <div>
      <Wrap background={props.bgImg}>
        <Top>
                <LeftWrap>
                    <h2>Experience Model 3</h2>
                    <Buttons>
                      <LeftButton>

                  <button>Learn More</button>
                      </LeftButton>
                  <button>Order Now</button>
                    </Buttons>
                </LeftWrap>

                <RightWrap>
                    <img src={`/images/${props.bgImg}`}/>
                </RightWrap>
        </Top>

        <Bottom>
            <p>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. <span>Learn more about Standard Connectivity and any limitations.</span></p>
        </Bottom>
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`
width:100vw;
height: 100vh;
display: flex;
flex-direction: column;

`;

const Top = styled.div`
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
const Bottom = styled.div`
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

const Buttons = styled.div`
  /* border:2px solid black; */
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 40px;

  button {
    cursor: pointer;
    margin-top: 20px;
    margin-right: 20px;
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
export default OrderSection

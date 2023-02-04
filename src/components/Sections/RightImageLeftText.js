import React from 'react'
import styled from 'styled-components'

function RightImageLeftText(props) {
  return (
    <div>
      <Wrap background = {props.bgImg}>
        
        <DetailComponent>
          <Detail>
            <h3>{props.heading_h3}</h3>
            <h1>{props.heading_h1}</h1>
            <p>{props.detail}</p>
            
          </Detail>

          <Buttons>
            {props.first_btn &&
            <button>{props.first_btn}</button>
            }

            {props.second_btn &&
            <button>{props.second_btn}</button>
            }
          </Buttons>
        </DetailComponent>

        <img
          className="background"
          
        />
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`
  /* border:2px solid red; */
  display: flex;
  .background {
    background: ${props => `url("/images/${props.background}")`};
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-position: center;
    object-fit: cover;
  }
  z-index: -1;
`;

const DetailComponent = styled.div`
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
  text-align: start;

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

const Buttons = styled.div`
  /* border:2px solid black; */
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 40px;

  button {
    cursor: pointer;

    /* display: flex; */
    /* border:2px solid red; */
    border-radius: 4px;
    padding: 10px 100px;
    margin-bottom: 20px;
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


const Detail = styled.div`
  /* border:2px solid black; */
  img{
    margin-top: 20px;
    width:336px;
    height:287px;
  }
`;
export default RightImageLeftText

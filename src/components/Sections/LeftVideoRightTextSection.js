import React  from 'react'
import styled from 'styled-components';

function LeftVideoRightTextSection(props) {

  return (
    <div>
      <Wrap >
        <video className="background2" loop={true} autoPlay={true}>
            <source src={props.videos} type="video/webm"/>
        </video>
        <DetailComponent>
          <Detail>
            <h3>{props.h3_heading}</h3>
            <h1>{props.h1_heading}</h1>
            <p>{props.text}</p>
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
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`
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

const DetailComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  padding-left: 30px;
  width: 30vw;
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

const Buttons = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 40px;

  button {
    cursor: pointer;
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


const Detail = styled.div`
  img{
    margin-top: 20px;
    width:336px;
    height:287px;
  }
`;

export default LeftVideoRightTextSection

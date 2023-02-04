import React from 'react'
import styled from 'styled-components';

function LeftImageRightTextSection(props) {
  return (
    <div>
      <Wrap>
        <img
          className="background2"
          src="images/model-3-hero-a-desktop.jpg"
          alt="model-3-hero-a-desktop"
        />
        <DetailComponent>
          <Detail>
            <h3>Safety</h3>
            <h1>Built for Safety</h1>
            <p>
              Safety is the most important part of every Tesla. We design our
              vehicles to <span>exceed safety standards</span>.
            </p>
            <p className="heading">5-Star Rating</p>
            <p>
              {props.title} achieved NHTSA 5-star safety ratings in every category and
              subcategory.
            </p>
            <p className="heading">Top Safety Pick+</p>
            <p>
            {props.title} received the IIHS Top Safety Pick+ award, with top ratings
              in all crashworthiness and front crash prevention categories.
            </p>
          </Detail>

          <Buttons>
            <button>Learn More</button>
            <button>Order Now</button>
          </Buttons>
        </DetailComponent>
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`
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


const Detail = styled.div`
  /* border:2px solid black; */
  img{
    margin-top: 20px;
    width:336px;
    height:287px;
  }
`;

export default LeftImageRightTextSection

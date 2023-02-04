import React from 'react'
import styled from 'styled-components';
function MainSection(props) {
  return (
    <div>
      <Wrap background = {props.bgImg}>
        <img
          className="background"
        />
        <TextComponent>
          <h1>{props.title}</h1>

          {props.desc && 
          <p>{props.desc}</p>
          }
        </TextComponent>

        <DetailComponent>
          <DetailInfo>
            <Detail>
              <h1>{props.first_page_h1_one}</h1>
              <p>{props.first_page_p_one}</p>
            </Detail>

            <Detail>
              <h1>{props.second_page_h1_one}</h1>
              <p>{props.second_page_p_one}</p>
            </Detail>

            <Detail>
              <h1>{props.third_page_h1_one}</h1>
              <p>{props.third_page_p_one}</p>
            </Detail>

            <Detail>
              <button>Order Now</button>
            </Detail>
          </DetailInfo>
          <DownArrow src="/images/down-arrow.svg" />
        </DetailComponent>
      </Wrap>
    </div>
  )
}


const Wrap = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  position: relative;
  border:none;


  .background {
    background: ${props => `url("/images/${props.background}")`};
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-position: center;
    object-fit: cover;
    border:none;
    /* background-size: cover; */
  }

  img{
    border:none;

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

  h1{
    color:white;
  }

  p {
    text-align: center;
    width:7vw;
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


export default MainSection

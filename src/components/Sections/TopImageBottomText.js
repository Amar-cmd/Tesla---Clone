import React from 'react'
import styled from 'styled-components';

function TopImageBottomText(props) {
    console.log(props)
  return (
    <div>
      <Wrap background = {props.bgImg} color = {props.color}>
        <Detail_Top>
      <img
          className="background3"
        //   src="images/AWD_hero@2.jfif"
        //   alt="model-3-hero-a-desktop"
          />
         
        <DetailInfo>
        <Detail  varient={props.color_text}>
         <h1 >{props.image_detail_h1_1}</h1>
          <p>{props.image_detail_p_1}</p>
         </Detail>

         <Detail varient={props.color_text}>
         <h1>{props.image_detail_h1_2}</h1>
          <p>{props.image_detail_p_2}</p>
         </Detail>
         
         <Detail varient={props.color_text}>
         <h1>{props.image_detail_h1_3}</h1>
          <p>{props.image_detail_p_3}</p>
         </Detail>
        </DetailInfo>

        </Detail_Top>


        <Detail_bottom>
          <LeftSection>
              <h3>{props.detail_left_h3}</h3>
              <h1>{props.detail_left_h1}</h1>
                    <Buttons>
                    {props.first_btn &&
            <button>{props.first_btn}</button>
            }

            {props.second_btn &&
            <button>{props.second_btn}</button>
            }
                    </Buttons>
          </LeftSection>
          <RightSection>
                <p>{props.detail_right_p}</p>
          </RightSection>
        </Detail_bottom>
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`

  width:100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:none;

  /* position:relative; */
  /* border: 2px solid red; */

  img.background3{
    
    background: ${props => `url("/images/${props.background}")`};
    z-index: -1;
    width: 100vw;
    height: 75vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
    border:none;
}`;


const Detail_Top = styled.div`
  /* border:2px solid black; */
  position: relative;
  display:flex;
  align-items: flex-end;
  justify-content: center;
  /* bottom: 0; */
`;

const DetailInfo = styled.div`
/* border:2px solid white; */
position: absolute;
display:flex;
align-items: flex-end;
justify-content: space-between;
width: 70vw;
/* height: 70px; */
margin-bottom: 50px;
`;


const Detail = styled.div`
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  /* border:2px solid red; */
  color: ${(props) => props.varient === 'dark' ? '#FFF' : '#000'};

  p{
    text-align: center;
    padding:0 20px;
    /* width:300px; */
  }

`;
const Detail_bottom = styled.div`
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

const Buttons = styled.div`
  justify-content: flex-start;
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
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

  button{
  margin-top: 20px;
  margin-right: 20px;
}

`;

export default TopImageBottomText

import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function Section(props) {

    // const [title, setTitle] = useState(props.title);

    // const scrollUpdate = () => {
    //     const position = window.scrollY;
    //     if(position > 60){
    //         setTitle('');
    //     }
    //     else {
    //         setTitle(props.title);
    //     }
    //   }
    
    //   window.addEventListener('scroll', scrollUpdate);

  return (
    <Wrap background = {props.bgImg}>
      <TextComponent>
      <Fade bottom>
        <div><h1>{props.title}</h1></div>
        <div><p>{props.desc}<span>{props.desc2}</span></p></div>
        
        </Fade>
      </TextComponent>

      <Buttons>
      <ButtonComponent>
        <Fade left>
            <LeftButton>
                {props.leftBtn}
            </LeftButton>
        </Fade>

        <Fade right>
        { props.rightBtn && 
            <RightButton>
                {props.rightBtn}
            </RightButton>
        }
        </Fade>
      </ButtonComponent>
      <DownArrow src='/images/down-arrow.svg'/>
      </Buttons>

    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height:100vh;
    background: ${props => `url("/images/${props.background}")`};
    background-position: center ;
    background-size: cover;
    object-fit: cover;
    /* border:2px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
    `;

const TextComponent = styled.div`
    /* border:2px solid black; */
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 15vh;
    
span{
    border-bottom: 1px solid black;
    cursor: pointer;
    transition: linear 0.2s ;

}

span:hover{
    border-bottom: 2px solid black;
}

h1{
    font-weight: 500;
}

p{
    letter-spacing: 0.5px;
    text-transform: capitalize;
}
`;

const ButtonComponent = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    

    
    @media only screen and (max-width:768px){
        flex-direction: column;
        margin-top:10px
    }
    
`;

const LeftButton = styled.div`
    background: rgba(23, 26,32,0.8);
    color: #f9f9f9;
    border-radius: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    padding:10px 100px;
    flex-direction:column;
    margin-left:20px;
    cursor: pointer;

    @media only screen and (max-width:768px){
        margin-top:20px
    }
`;

const RightButton = styled(LeftButton)`
    background: rgba(244, 244, 244, 0.65);
    color:black;
    
`;

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animate infinite 1.5s;

`;

const Buttons = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom:1vh;
`;
export default Section;

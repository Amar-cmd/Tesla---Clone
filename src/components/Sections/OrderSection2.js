import React from 'react'
import styled from 'styled-components'

function OrderSection2(props) {
  return (
    <div>
      <Wrap>
        <Container>
            <h1>{props.title_h2}</h1>
            <p>{props.title_p}</p>

            {props.first_btn &&
            <button>{props.first_btn}</button>}

            {props.second_btn &&
            <button>{props.second_btn}</button>}

            <a>{props.title_a}</a>
        </Container>
        
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`
width:100vw;
height: 100vh;
display: flex;
/* border:2px solid red; */

flex-direction: column;
background: black;

`;

const Container = styled.div`
/* border:2px solid red; */
color:white;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

h1{
    margin-bottom: 10px;
}

p{
    margin-bottom: 20px;
}

a{
    text-decoration: underline;
    
    &:hover{
        cursor:pointer;
    }
}
button{
    margin: 10px 0;
    /* padding: 10px 0; */
    padding-bottom: 30px;
    padding-top: 10px;
    border:2px solid white;
    background: transparent;
    color:white;
    border-radius:4px;
    height:32px;
    width:242px;
    cursor:pointer;
    transition: ease-in-out 0.2s;

    &:hover{
        background: white;
        color:black;
        transition: ease-in-out 0.2s;
    }
  }
`;

export default OrderSection2

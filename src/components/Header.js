import React, {useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Home from './Home';

function Header(props) {

  const [menuStatus, setMenuStatus] = useState(false);


  return (
    
    <Component>
      <LeftMenu filterColor={props.filter_color}>
        <NavLink to="/">
        <img src='/images/logo.svg' alt='TESLA'/> 
        </NavLink>
      </LeftMenu>
      <MidMenu varient={props.color_text}>
        {/* <a href="">Model S</a> */}

        <NavLink to="/model3">Model 3</NavLink>
        {/* <a href="">Model X</a> */}

        <NavLink to="/modely">Model Y</NavLink>

        <NavLink to="/solarroof">Solar Roof</NavLink>
        <NavLink to="/solarpanels">Solar Panel</NavLink>
      </MidMenu>

      <RightMenu varient={props.color_text}>
        <a href="">Shop</a>
        <a href="">Account</a>
        <a className='menu' onClick={() => setMenuStatus(true)}>Menu</a>
      </RightMenu>
      <SideBar show={menuStatus}>
        <Close>
         <img onClick={() => setMenuStatus(false)} src='/images/close.jpeg'/>
        </Close>
        <MainBlock>

        <li><a href="">Model S</a></li>
        <li><NavLink to="/model3">Model 3</NavLink></li>
        <li><a href="">Model X</a></li>
        <li><NavLink to="/modelY">Model Y</NavLink></li>
        <li><NavLink to="/solarroof">Solar Roof</NavLink></li>
        <li><NavLink to="/solarpanels">Solar Panel</NavLink></li>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade-in</a></li>
        <li><a href="">Test Drive</a></li>
        <li><a href="">Insurance</a></li>
        <li><a href="">Power Wall</a></li>
        <li><a href="">Commercial Energy</a></li>
        <li><a href="">Utilities</a></li>
        <li><a href="">Charging</a></li>
        <li><a href="">Find Us</a></li>
        <li><a href="">Support</a></li>
        <li><a href="">Invstor Relations</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Account</a></li>
        <li><a href="">Cybertruck</a></li>
        <li><a href="">Roadster</a></li>
        <li><a href="">Semi</a></li>
        <li><a href="">News</a></li>
        
        </MainBlock>
      </SideBar>
    </Component>
  )
}

const Component = styled.div`
    z-index:1;
    /* border: 2px solid red; */
    user-select:none;
    position:fixed;
    min-height: 60px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background: transparent;
    
    
`;
const LeftMenu = styled.div`
    /* border: 2px solid blue; */
    /* padding:16px 0px 0px 32px; */
    margin-left: 32px;
    img{
      filter: invert(${(props) => props.filterColor === '1' ? '1' : '0'});
        height: 19px;
        width: 117px;
        cursor: pointer;
    }
`;

const MidMenu = styled.div`

  a{
    color: ${(props) => props.varient === 'dark' ? '#FFF' : '#000'};
    text-decoration: none;
    font-weight: 500;
    padding: 10px 20px;
    cursor:pointer;
        
    &:hover{
      background: hsla(0,0%,0%,.05);
      transition: ease-in-out 0.5s;
    }
  }

  @media only screen and (max-width:1080px){
    display: none;
  }
`;

const RightMenu = styled(MidMenu)`
/* border: 2px solid blue; */
    right:0;
    margin-right: 32px;
  
    @media only screen and (max-width:1080px){
        display: block;
      }

`;


const SideBar = styled.div`
  position:fixed;
  top:0;
  right:0;
  display:flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background: #f9f9f9;
  height:100vh;
  min-width: 300px;
  list-style:none;
  z-index:100;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: ease-in-out 0.5s;
  /* border:2px solid red; */


  li{
    padding: 15px 10px;
  }

  li:hover{
    background: hsla(0,0%,0%,.05);;

  }
  a{
    color:black;
    text-decoration: none;
    font-size: 1.05rem;
    /* border:2px solid blue; */


  }
`;


const MainBlock = styled.div`
    /* border:2px solid green; */
    left:0;
    top:0;
    width: 300px;
    position: relative;
    overflow:auto;
    margin-top: 40px;
    margin-bottom: 60px;
    padding-left:30px;
    &::-webkit-scrollbar {
      display: none;
}

`;

const Close = styled.div`
  /* border: 2px solid red; */
  width:300px;
  display:flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding-right:20px;
img{
  width:32px;
  height: 32px;
  cursor:pointer;
  /* border: 2px solid black; */

}
  
`;
export default Header

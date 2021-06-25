import React,{ useState } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
//all svg files

import logo from '../assets/logo.svg';
import vc from '../assets/vc.svg';
import chat from '../assets/chat.svg';
import calender from '../assets/calender.svg';
import other from '../assets/other.svg';

const MainContainer = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;


const Button = styled.button`
background-color: #ECEDFA;
border:none;
width:2.5rem;
height:2.5rem;
border-radius:10%;
margin: 0.5rem 0 0 0.5rem;
cursor:pointer;

display:flex;
justify-content:center;
align-items:center;

position:relative;

&::before,
&::after{
    content:"",
    background-color:white;
    height:2px;
    width:1rem;
    position: absolute;
}

&::before{
    top:${(props)=>(props.clicked?"1.5":"1rem")};
    transform:${(props)=>(props.clicked?"rotate(135deg)":"rotate(0)")};
}
&::after{
    top:${(props)=>(props.clicked?"1.2":"1.5rem")};
    transform:${(props)=>(props.clicked?"rotate(-135deg)":"rotate(0)")};
}
`;
const SidebarContainer = styled.div`
background: #DEE0F8;
box-shadow: -14px 16px 27px rgba(0, 0, 0, 0.25), inset 5px -6px 10px rgba(0, 0, 0, 0.25), inset -5px 5px 8px #DEE0F9;
  width: 6rem;
  height: 30vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 7rem;

  img {
    width: 100%;
    height: auto;
  }
`;
const Bar = styled.ul`
background: #DEE0F8;
box-shadow: -14px 16px 27px rgba(0, 0, 0, 0.25), inset 5px -6px 10px rgba(0, 0, 0, 0.25), inset -5px 5px 8px #DEE0F9;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ECEDFA;
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "6rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color:#4449B1;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  padding-top:1rem;
  &:hover {
    border-right: 4px solid #4449B1;
    img {
      filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(93deg)
        brightness(103%) contrast(50%);
    }
  }
  img {
      padding:0px;
    width: 4rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;


const Sidebar = () => {

const [click, setClick] = useState(false);
const handleClick=()=>setClick(!click);

    return(
    <>
    <MainContainer>
     <Button clicked={click} onClick={() => handleClick()}>
        X
      </Button>
    <SidebarContainer>
        <Logo>
        <img src={logo} alt="logo"/>
        </Logo>
        <Bar clicked={click}>
            <Item onClick={() => setClick(false)} exact activeClassName="active" to="/">
                <img src={vc} alt="vc"/>
                <Text clicked={click}>Video Call</Text>
            </Item>
            <Item onClick={() => setClick(false)} exact activeClassName="active" to="/chat">
                <img src={chat} alt="chat"/>
                <Text clicked={click}>Chat</Text>
            </Item>
            <Item onClick={() => setClick(false)} exact activeClassName="active" to="/calender">
                <img src={calender} alt="calender"/>
                <Text clicked={click}>Calender</Text>
            </Item>
            <Item onClick={() => setClick(false)} exact activeClassName="active" to="/other">
                <img src={other} alt="other"/>
                <Text clicked={click}>Other</Text>
            </Item>
        </Bar>

    </SidebarContainer>
    </MainContainer>
    </>
    );
};

export default Sidebar;

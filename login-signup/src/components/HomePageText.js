import React from "react";
import styled from "styled-components";
import history from './History';
import { useHistory } from "react-router";

const HomePageText = (props) => {
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `loginapp`; 
    history.push(path);
  }

  return (
    <Container>
    
      <h1>Welcome to MS TEAMS</h1>
    
      <BtnContainer>
      <button onClick={routeChange}className='getstarted'>
      Get Started
    </button>
        <button onClick={() => window.open( 'https://github.com/aditisneh/MS-TEAMS')}>Github</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #7F86ED;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #7F86ED;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #7F86ED;
      transform: translateY(-5px);
    }
  }

  .getstarted {
    color: #2B34A1;
    background: transparent;
    border: 3px solid #2B34A1;
    &:hover {
      box-shadow: 0px 17px 16px -11px #7F86ED;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h1{
    color : #171E81;
  }
  
`;

export default HomePageText;

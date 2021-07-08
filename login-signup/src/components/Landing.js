import React from 'react';
import styled from 'styled-components';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Sidebar from './Sidebar';
import Videochat from './Videochat';
import Chat from '../components/Chat/Chat';
import Calender from '../components/To-do/Calender';
import Other from './Other';
import { AnimatePresence } from "framer-motion";
import Home from '../components/Home/Home'
import Join from '../components/Join/Join'
import Meet from '../components/Meet/Meet'


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #AEB2EF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Landing=({ handleLogout })=>{
    return(
        <>
        <section className="hero">
            <nav>
                <h2>Welcome!</h2>
                <button className="loginbutton" onClick={handleLogout}>Log Out</button>
            </nav>
            <BrowserRouter>
            <Sidebar/>
     
            <Pages>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    
                    <Route exact path='/' component={Home}/>
                    <Route path='/join' component={Join}></Route>
                    <Route path='/meet' component={Meet}></Route>
                   {/* <Route exact path='/' component={Videochat}></Route>*/}
                    <Route exact path='/chat' component={Chat}/>
                    <Route exact path='/calender' component={Calender}/>
                    <Route exact path='/other' component={Other}/>
                </Switch>
                </AnimatePresence>  
            </Pages>
            </BrowserRouter>
        </section>

        
        </>
    )
}

export default Landing;
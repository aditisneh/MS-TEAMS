import React, { useEffect } from 'react';
import './App.css';
import Landing from './components/Landing';
import LoginApp from './components/LoginApp';
import HomePage from './components/HomePage';

import { ContextProvider } from './SocketContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



// import VideoChat from '../src/components/Videochat';

function App() {

     useEffect(() => {
       if (!navigator.onLine) alert('Connect to internet!');
     }, [navigator]);
   
     return (
       <ContextProvider>
         <Router>
           <Switch>
             <Route path='/' component={HomePage} exact></Route>
             <Route path='/loginapp' component={LoginApp} exact></Route>
             <Route path='/landing' component={Landing}></Route>
             
           </Switch>
         </Router>
       </ContextProvider>
     );
   }
   
   export default App;

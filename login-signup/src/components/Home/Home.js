import React, { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../../SocketContext';
import './Home.css';
//import Footer from '../Footer/Footer';
//import homeIcon from '../../assets/video-call.png';
import homeIcon1 from '../../assets/vc.svg';
import noteIcon from '../../assets/call.svg';
import imgVc from '../../assets/join.png';
import ChatIcon from '@material-ui/icons/Chat';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import DuoIcon from '@material-ui/icons/Duo';
import { Link } from 'react-router-dom';
import { message } from 'antd';

//import Navbar from '../Navbar/Navbar';

const Home = (props) => {
  const paramsCode = props.location.search;

  const { meetingCode, setMeetingCode, setNewMeet } = useContext(SocketContext);

  useEffect(() => {
    if (paramsCode.length) {
      if (paramsCode.substring(0, 5) == '?ref=') return; // for product hunt ref
      setMeetingCode(paramsCode.substring(1));
    }
    setNewMeet(null);
  }, []);

  return (
    <>
    
    <div className='home'>
   
      <div className='body-div'>
      <div className='nav-bottom'></div>
        <div className='flex-box'>
          <div className='left-div'>
            <div className='contents'>
            
              <div className='start-meet'>
                <Link
                  className='home-btn'
                  to='join'
                  onClick={() => {
                    setNewMeet(true);
                  }}
                >
                  Start Meeting
                </Link>
              </div>
              <div className='join-meet'>
                <input
                  type='text'
                  placeholder='Enter meeting code'
                  value={meetingCode || ''}
                  onChange={(e) => {
                    setMeetingCode(e.target.value);
                  }}
                />
                <button
                  className='home-btn'
                  onClick={() => {
                    if (!meetingCode || meetingCode.trim().length === 0) {
                      message.error('Please enter the meeting code');
                      return;
                    }
                    props.history.push('join');
                  }}
                >
                  Join Meeting
                </button>
              </div>
              <div className='features'>
                <h2>Features</h2>
                <div className='grid-div'>
                  <DuoIcon />
                  <p>1:1 Video chat</p>
                </div>
                <div className='grid-div'>
                  <SurroundSoundIcon />
                  <p>Live Editor for interview</p>
                </div>
                <div className='grid-div'>
                  <EventNoteIcon />
                  <p>Notes</p>
                </div>
                <div className='grid-div'>
                  <ChatIcon />
                  <p>Real time Chat</p>
                </div>
              </div>
              <img src={homeIcon1} alt='' className='chat-img' />
              <img src={noteIcon} alt='' className='note-img' />
            </div>
          </div>
          <div className='right-div'>
            {/* <img src={homeIcon} alt='' /> */}
            <img className="img-vc"
              src={imgVc}
            ></img>
          </div>
        </div>
      </div>
  
    </div>
    </>
  );
};

export default Home;

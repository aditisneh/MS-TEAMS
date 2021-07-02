import React from 'react'
import Motion from "../Motion";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import ChatLogin from './ChatLogin';
import './style.css'

const projectID = '673fd0f5-2e4b-4049-bf29-4ab567d0fbc6';

const ChatComponent = () => {
  if(!localStorage.getItem('username')) return <ChatLogin/>
    return (<>
    <div className="nav-bottom"></div>
    <div className="main-div">
        <ChatEngine
      height="70vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
    </div>
    </>
    );
};
const Chat = Motion(ChatComponent);
export default Chat;
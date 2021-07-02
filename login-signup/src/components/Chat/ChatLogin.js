import { useState } from 'react';
import axios from 'axios';
import chat from '../../assets/chatbg.png'

const projectID = '673fd0f5-2e4b-4049-bf29-4ab567d0fbc6';

const ChatLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <>
    <div className='nav-bottom'></div>
    <img src={chat} align='left' className='chatimg'></img>
    <div className="wrapper">
      <div className="form">
        <h3 className="title">Let's Chat</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span><h6>Start chatting</h6></span>
            </button>
          </div>
        </form>
        <h4>{error}</h4>
      </div>
    </div>
    </>
  );
};

export default ChatLogin;
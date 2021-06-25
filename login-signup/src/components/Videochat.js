//All neccsesary imports
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIcon from '@material-ui/icons/Phone';
import React, { useEffect, useRef, useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import '../App.css';
import { SocketContext } from '../../src/SocketContext';
import Motion from './Motion';

// const socket = io('http://localhost:5000')

function VideoChatComponent() {
  const { me, socketState: socket } = useContext(SocketContext);
  // const [ me, setMe ] = useState("")
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });

    //  socket.on("me", (id) => {
    // 	    alert(id)
    // 		console.log('hicid')
    // 		console.log(id)
    // 		setMe(id)
    // 	})

    socket.on('callUser', (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on('stream', (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: caller });
    });
    peer.on('stream', (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    
  };

  useEffect(() => {
    console.log(me);
  }, [me]);

  return (
    <><div className='videochat-body'>
      <div class='option-bar'></div>
      <div className='VCcontainer'>
        <div className='video-container'>
          <div className='video'>
            {stream && (
              <video className="video-box"
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{ width: '300px'}}
              />
            )}
          </div>
          <div className='video'>
            {callAccepted && !callEnded ? (
              <video className="video-box"
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: '300px' }}
              />
            ) : null}
          </div>
        </div>
        <div className='myId'>
          <TextField
            id='filled-basic'
            label='Name'
            variant='filled'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <CopyToClipboard text={me} style={{ marginBottom: '2rem' }}>
            <Button
              variant='contained'
              color='primary'
              startIcon={<AssignmentIcon fontSize='large' />}
            >
              Copy ID
            </Button>
          </CopyToClipboard>

          <TextField
            id='filled-basic'
            label='ID to call'
            variant='filled'
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <div className='call-button'>
            {callAccepted && !callEnded ? (
              <Button variant='contained' color='secondary' onClick={leaveCall}>
                End Call
              </Button>
            ) : (
              <IconButton
                color='primary'
                aria-label='call'
                onClick={() => callUser(idToCall)}
              >
                <PhoneIcon fontSize='large' />
              </IconButton>
            )}
            {idToCall}
          </div>
          <div>
            {receivingCall && !callAccepted ? (
              <div className='caller'>
                <h2>{name} is calling...</h2>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={answerCall}
                >
                  Answer
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
	  </div>
    </>
  );
}
const VideoChat = Motion(VideoChatComponent);
export default VideoChat;

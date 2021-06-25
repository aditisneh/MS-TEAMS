import React, { Fragment } from 'react';
import spinner from './spin1.gif';
import img from './img.png'
import hi from '../assets/hiVideo.gif'

const Spinner = (props) => {
  return (
    <div className='spinner'>
      <img
        src={spinner}
        style={{
          width: '80px',
          margin: 'auto',
          display: 'block',
          paddingBottom: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: `${props.starting ? '20%' : '0%'}`,
        }}
        alt='Loading...'
      ></img>
      <h2 style={{ textAlign: 'center' }}>
      <img src={hi}></img>
        {props.starting ? 'Starting your meeting...' : 'Loading your video...'}
      </h2>
    </div>
  );
};

export default Spinner;

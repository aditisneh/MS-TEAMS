import React from 'react'
import Motion from "./Motion";
import note from '../assets/quiz2.png'
import honk from '../assets/quiz1.png'

const OtherComponent = () => {
    return (
        <>
        <div className='nav-bottom'></div>
        <img src={honk} width="200px"/>
        <iframe src="http://localhost:4000/" height="500" width="700"></iframe>
        {/*<iframe src="https://kahoot-node-deploy.herokuapp.com/" height="500" width="700"></iframe>*/}
        <img src={note} width="200px"/>
        </>
    );
};

const Other = Motion(OtherComponent);
export default Other;
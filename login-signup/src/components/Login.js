import React from 'react';

const Login =(props)=>{

        const {
            email, 
            setEmail, 
            password, 
            setPassword, 
            handleLogin, 
            handleSignUp, 
            hasAccount, 
            setHasAccount, 
            emailError, 
            passwordError,
        } = props;

    return(
        <section className="login">
            
            <div className="loginContainer">
            <img src={"login.png"} width="275px" height="180px"/>
                <label>Username</label>
                <input 
                type="text" 
                autoFocus
                required
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                 type="password"
                 required
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                     {hasAccount ?(
                        <>
                        <button className="loginbutton" onClick={handleLogin}>Sign In</button>
                        <p>Not on Teams yet?<span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                     ):(
                        <>
                        <button className="loginbutton" onClick={handleSignUp}>Sign Up</button>
                        <p>Already on Teams? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                     )}
                 </div>
            </div>
        </section>
    )
};

export default Login;
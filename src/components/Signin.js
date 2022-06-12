import React, { useState } from "react";
import './signin.css';
import logo from './images/g.svg';
import Head from "./Header";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from "./Firebase";
import { Link } from "react-router-dom";


const Signin = () => {
     const [email , setemail] = useState('');
     const [password , setpass] = useState('');
     const signwithgo = () =>{
     const provider = new firebase.auth.GoogleAuthProvider()
     auth.signInWithPopup(provider)
    }
    
    
    return(
        <div>
           <div className="container">
                  <Head />
                   <div className="left">
                      <div className="signin">
                         <h4>Sign in</h4>
                          <form>
                              <input type="email" placeholder="Email address.." value={email} onChange={(e)=>setemail(e.target.value)}></input><br/>
                               <input type="password" placeholder="password.." value={password} onChange={(e)=>setpass(e.target.value)}></input><br/>
                                <button>Sign in</button>
                            </form>
                         <span>......................................or.........................................</span>
                          <div className="signwithG">
                            <button onClick={signwithgo}>Sign in with Google</button>
                            <img src={logo} alt="logo"></img>
                           </div>
                             <div className="external">
                               <label>forgot password?</label><br/>
                               <label>Don't have an account?</label><br/>&nbsp;
                               <Link to="/Signup" className="anchor">Sign up</Link>
                             </div>
                        </div>
                   </div>
             </div>
         </div>
    );
}
export default Signin;
import React, { useState } from "react";
import './Signup.css';
import {Link} from "react-router-dom";
import {db} from './Firebase';
import {ref,child,push,update} from 'firebase/database';

const Signup = () =>{
    const [fullname,setname] =useState('');
    const [email,setmail] = useState('');
    const [password,setpass] = useState('');

    const handlesubmitdata = (e)=>{
      e.preventDefault();
      let obj = {
        fullname : fullname,
        email : email,
        password : password,
      }
      const newPostKey = push(child(ref(db), 'posts')).key;
      const updates = {};
      updates['/' + newPostKey] = obj;
      alert("Registration success");
      return update(ref(db), updates);
    }
    return(
        <div>
            <div className="signup">
            <form onSubmit={handlesubmitdata}>
                <h5>Sign Up</h5>
                <input type="text" placeholder="Full Name" value={fullname} onChange={(e)=>setname(e.target.value)}></input>
                <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setmail(e.target.value)}></input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setpass(e.target.value)}></input>
                <button>Register</button>
              </form>
              <div className="box">
                <label>Already have an account?</label>
                <Link to="/">sign in</Link>
              </div>
            </div>
        </div>
    );
}

export default Signup;
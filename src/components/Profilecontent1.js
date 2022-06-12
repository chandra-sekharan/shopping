import React from "react";
import './Profile.css';
import {auth} from './Firebase';
import { useAuthState } from "react-firebase-hooks/auth";


const Profile = ()=> {
    const [user] = useAuthState(auth)
    console.log(user)
    return(
        <div>
            <div className="profile">
              <div className="image">
                  <img src={user.photoURL}></img>
              </div>
              <div className="name">
               <label>Name :  {user.displayName}</label>
              </div>
              <div className="mail">
              <label>Last-Login: {user.metadata.lastSignInTime} </label>
              </div>
              <div className="wishlist">
               <label>Email : {user.email}</label>
              </div>
              <div className="signingout">
                <button onClick={()=>auth.signOut()}>sign out</button>
              </div>
            </div>
            <div className="back">
                <div className="smile">
                 <div className="eye1"></div>
                 <div className="eye2"></div>
                 <div className="smile1"></div>
                </div>
            </div>
            <h3>Happy Shopping</h3>
        </div>
    );
}
export default Profile;
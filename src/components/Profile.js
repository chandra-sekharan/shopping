import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';
import Profilecontent1 from './Profilecontent1';
import Profilecontent from './Profilecontent';


const Profile = () =>{
    const [user] = useAuthState(auth)
    if(user){
        return <Profilecontent1 />
    }
    return <Profilecontent/>
}
export default Profile;
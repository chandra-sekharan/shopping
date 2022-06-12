import React, { useState } from "react";
import './Header.css';
import searchlogo from './images/search.svg';
import user from './images/user.svg';
import { Link } from "react-router-dom";


const Head = () => {
    const[search , setsearch] = useState('');

    const themefun = () =>{
        document.getElementsByClassName('theme1')[0].style.display = "block";
    }
    const dark = ()=>{
        document.getElementsByTagName('BODY')[0].style.backgroundColor ="#000";
        document.getElementsByTagName('BODY')[0].style.color ="#fff";
        document.getElementsByTagName('li')[0].style.color = "#fff";
        document.getElementsByTagName('li')[1].style.color = "#fff";
        document.getElementsByTagName('li')[2].style.color = "#fff";
        document.getElementsByTagName('li')[3].style.color = "#fff";
        document.getElementsByTagName('li')[4].style.color = "#fff";
        document.getElementsByTagName('li')[5].style.color = "#fff";
        document.getElementsByTagName('li')[6].style.color = "#fff";
    }
    const light = () => {
        document.getElementsByTagName('BODY')[0].style.backgroundColor ="#fff";
        document.getElementsByTagName('BODY')[0].style.color ="#000";
        document.getElementsByTagName('li')[0].style.color = "#000";
        document.getElementsByTagName('li')[1].style.color = "#000";
        document.getElementsByTagName('li')[2].style.color = "#000";
        document.getElementsByTagName('li')[3].style.color = "#000";
        document.getElementsByTagName('li')[4].style.color = "#000";
        document.getElementsByTagName('li')[5].style.color = "#000";
        document.getElementsByTagName('li')[6].style.color = "#000";
    }
    const close = () => {
        document.getElementsByClassName('theme1')[0].style.display="none";
    }
    return(
        <div>
             <div className="header">
                    <h1>Shopping's Delight</h1>
                    <ul>
                        <Link to="/content"><li>HOME</li></Link>
                        <Link to="/content"><li>MEN</li></Link>
                        <Link to="/content"><li>WOMEN</li></Link>
                        <Link to="/content"><li>KIDS</li></Link>
                    </ul>
                    <div className="search-box">
                    <input type="text" placeholder="Search here.." value={search} onChange={(e)=>setsearch(e.target.value)}></input>
                    <button><img src={searchlogo}></img></button>
                    </div>
                    <div className="right">
                    <button><img src={user} alt="cart" className="cart"></img></button>
                    <div className="dropdown">
                    <ul>
                      <Link to="/profile" id="profile"><li>Profile</li></Link>
                      <Link to="/carting"><li>Cart</li></Link>
                      <li onClick={themefun}>Settings</li>
                    </ul>  
                   </div>  
                    </div>
                    <div className="theme1">
                        <div className="swap"></div>
                       <button id="thm" onClick={dark}>Dark</button>
                       <button id="thm" onClick={light}>Light</button>
                       <button id="close" onClick={close}>&times;</button>
                    </div>   
             </div>       
        </div>

    );
}
export default Head;
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from './logo.png'
import './Logo.css';

class Logo extends Component{
    render(){
        return(
            <div className="logo">
            <Link to="/">
            <img id="toplogo" src={logo} alt={"logo"}/> 
            </Link>
            </div>
        );
    }
}
export default Logo;
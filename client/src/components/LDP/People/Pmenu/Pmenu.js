import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Pmenu.css';

class Pmenu extends Component{
    render(){
    return(
        <div className="Pmenu">
        <Link to="/">
            <button id="Pbtn1">친구</button>
        </Link>
        <Link to="/">
            <button id="Pbtn2">부모</button>
        </Link>
        <Link to="/">
            <button id="Pbtn3">인간관계</button>
        </Link>
        </div>
    );
    }
}
export default Pmenu;
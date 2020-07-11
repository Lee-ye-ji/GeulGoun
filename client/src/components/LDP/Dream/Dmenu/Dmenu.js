import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Dmenu.css';

class Dmenu extends Component{
    render(){
    return(
        <div className="Dmenu">
        <Link to="/">
            <button id="Dbtn1">노력</button>
        </Link>
        <Link to="/">
            <button id="Dbtn2">희망</button>
        </Link>
        <Link to="/">
            <button id="Dbtn3">자신감</button>
        </Link>
        </div>
    );
    }
}
export default Dmenu;
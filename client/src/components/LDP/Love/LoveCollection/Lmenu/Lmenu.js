import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Lmenu.css';

class Lmenu extends Component{
    render(){
    return(
        <div className="Lmenu">
        <Link to="/Couple">
            <button id="Lbtn1">연인</button>
        </Link>
        <Link to="/Destiny">
            <button id="Lbtn2">인연</button>
        </Link>
        <Link to="/Farewall">
            <button id="Lbtn3">이별</button>
        </Link>
        <Link to="/Crush">
            <button id="Lbtn4">짝사랑</button>
        </Link>
        </div>
    );
    }
}
export default Lmenu;
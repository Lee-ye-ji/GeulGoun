import React, { Component } from "react";
import './Menu.css';
import { Link } from "react-router-dom";

class Menu extends Component{
    render(){
    return(
        <div className="btn">
        <Link to="/Love">
            <button id="btn1">사랑</button>
        </Link>
        <Link to="/Dream">
            <button id="btn2">꿈</button>
        </Link>
        <Link to="/People">
            <button id="btn3">사람</button>
        </Link>
        </div>
    );
    }
}
export default Menu;
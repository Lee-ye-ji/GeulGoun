import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './HM.css';

class HM extends Component{
    render(){
    return(
    <div className="HM">
        <header>
        <nav className="header-nav">
            <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
        <ul id="menu">
            <li><Link to="/">메인페이지</Link></li>
            <li><Link to="/Login">로그인</Link></li>
            <li><Link to="/Join">회원가입</Link></li>
            <li><Link to="/LDP">사랑/꿈/사람</Link></li>
            <li><Link to="/Memo">기록일지</Link></li>
            <li><Link to="/Board">고민상담소</Link></li>
        </ul>
        </div>
        </nav>
        </header>
    </div>
    );
    }
}
export default HM;
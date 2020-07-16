import React, {Component} from 'react';
// import { useDispatch } from './node_modules/react-redux';
// import { response } from "express";
// import { withRouter } from 'react-router-dom';
import './IdForm.css';
import { Link } from "react-router-dom";

class IdForm extends Component {
    render(){
    return(
        <form className="idForm">
        <div className="down">
            <p className="pNname">이름을 입력해주세요</p> 
            <input className="NameInput" type="text" name="name" placeholder="이름" />
            <button className="Namebutton" >확인</button>
            <p className="idconfirm">아이디는 입니다.</p>
            <div className="back">
                <p><Link to="Login" id="login">로그인으로 돌아가기</Link></p>
                <p><Link to="/Pw" id="pw">비밀번호찾기</Link></p>
            </div>
        </div>
    </form>
    );
}
}

export default IdForm;
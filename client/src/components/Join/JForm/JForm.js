import React, { useState } from "react";
import './JForm.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { joinUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
// import Axios from 'axios';

function JForm(props){
    const dispatch = useDispatch();

    const [ id, setid ] = useState("")
    const [ pw, setpw ] = useState("")
    const [ confirmpw, setconfirmpw ] = useState("")
    const [ name, setname ] = useState("")

    const onChangeId = e => {
        setid(e.target.value);
    };

    const onChangepw = e => {
        setpw(e.target.value);
    };

    const onChangeconfirmpw = e => {
        setconfirmpw(e.target.value);
    };
    
    const onChangename = e => {
        setname(e.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if( pw !== confirmpw){
            return alert('비밀번호와 비밀번호 확인이 같아야 합니다.')
        }


        let body = {
            id: id,
            pw: pw,
            name : name
        }


        dispatch(joinUser(body))
        .then(response => {
            if(response.payload.success){
                alert('회원가입에 성공하였습니다!')
                props.history.push("/Login")
            }else {
                alert('회원가입하는데 실패하였습니다.')
                
            } 
        })
    }
    return(
        <div className="JForm">
        <div className="membership-page">
            <div className="form">
            <form className="registerform" onSubmit={onSubmitHandler}>
                <input type="text" placeholder="아이디" value={id} onChange={onChangeId}/>
                <input type="password" placeholder="비밀번호" value={pw} onChange={onChangepw}/>
                <input type="password" placeholder="비밀번호확인" value={confirmpw} onChange={onChangeconfirmpw}/>
                <input type="text" placeholder="이름" value={name} onChange={onChangename}/>
                <button  type="submit">가입하기</button>
                <p className="message">이미 등록된 계정이신가요? <Link to="/Login">로그인하기</Link></p>
            </form> 
            </div>
        </div>
        </div>

    );
}
export default withRouter(JForm);
import React, { useState } from "react"; //, useState
import './Form.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom';

function Form(props){
    const dispatch = useDispatch();

    const [ id, setid ] = useState("")
    const [ pw, setpw ] = useState("")

    const onChangeId = e => {
        setid(e.target.value);
    };

    const onChangepw = e => {
        setpw(e.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            id: id,
            pw: pw
        }

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess){
                props.history.push('/Memo')
            }else {
                alert('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다. ')
            }
        })
    }

    return(
        <div class="login-page">
            <div class="form">
                <form class="login-form" onSubmit={onSubmitHandler} >
                    <input type="text" name="id" placeholder="아이디" value={id} onChange={onChangeId}/>
                    <input type="password" name='pw' placeholder="비밀번호" value={pw} onChange={onChangepw}/>
                    <button>로그인</button>
                        <p class="message">계정이 없으신가요? 
                        <Link to="/Join">회원가입</Link></p>
                        <p class="idpw"><Link to="/Search_id" id="id">아이디찾기</Link> | 
                        <Link to="/Pw" id="pw">비밀번호찾기</Link></p>
                </form>
            </div>
        </div>
    );
}

// export default Form;
export default withRouter(Form);
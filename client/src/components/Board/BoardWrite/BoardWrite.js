import React, { useState } from "react";
import BHM from '../BHM/BHM'
// import CKEditor from 'ckeditor4-react';
import { Form } from "react-bootstrap";
import Logout from '../../Logout/Logout';
import './BoardWrite.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';


function BoardWrite(props){
    
    const user = useSelector(state => state.user);
    const [title, setTitle] = useState("");
    const [content, setcontent] = useState("");

    const boardTitle = e => {
        setTitle(e.target.value);
    };

    const boardContent = e => {
        setcontent(e.target.value);
    };

    const writeBoard = (event) => {
        event.preventDefault()

        const variables = {
            writer: user.userData._id,
            title: title,
            content: content
        }

        if(title === ""){
            alert("글 제목을 입력해주세요.");
            return;
        }else if(content === ""){
            alert("글 내용을 입력해주세요.")
        }

        Axios.post('/api/board/write', variables)
        .then(response => {
            if (response.data.success) {
                alert('글 작성에 성공하였습니다.')
                props.history.push('/board')
            } else {
                alert('글 작성에 실패하였습니다.')
            }
        })


    }

        
        
        // onEditorChange = evt => {
        //     this.setState({
        //     data: evt.editor.getData()
        //     });
        // };
    
        return(
        <div className="Board">
        <BHM></BHM>
        <Logout></Logout>
            <div className="BoardWrite">
            <header className="header">
                <h2>글쓰기</h2>
                <Link to="/Board">
                    <button>목록으로 돌아가기</button>
                </Link>
            </header>
        <content>
            <Form.Control className="titlestyle"
                type="text"
                placeholder="제목을 입력해주세요"
                // ref={ref => (this.boardTitle = ref)}
                onChange={boardTitle}
                value={title}
            />
            {/* <CKEditor
                // value={content}
                onChange={boardContent}
                data={ content }
            ></CKEditor> */}
            <input className="contentstyle"
                type="text"
                placeholder="내용을 입력해주세요"
                onChange={boardContent}
                value={ content }
            />
            <button className="buttonstyle" onClick={writeBoard}>
                저장하기
            </button>
        </content>
            </div>
        </div>
            
            );
        }



export default withRouter(BoardWrite);

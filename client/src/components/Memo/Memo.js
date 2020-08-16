// import React, {Component} from 'react';
import React, { useState } from "react";
import './Memo.css';
import MmHM from './MmHM/MmHM'
import Header from './Header/Header';
import List from './List/List';
import Axios from 'axios';
// import { generateId } from './utils'; //랜덤 ID 생성 함수
import Logout from '../Logout/Logout';
import { useSelector } from 'react-redux';

function Memo(props){

    const user = useSelector(state => state.user);
    const [ title, settitle ] = useState("")
    const [ content, setcontents ] = useState("")

    const onEdittitle = e => {
        settitle(e.target.value);
    };

    const onEditNote = e => {
        setcontents(e.target.value);
    };

    const handleAddNote = (event) => {
        event.preventDefault();
    

    const variables = {
        writer: user.userData._id,
        Note: title,
        content: content
    }

    if(title === ""){
        alert("메모제목을 입력해주세요.");
        return;
    }else if(content === ""){
        alert("메모 내용을 입력해주세요.")
    }

    Axios.post('/api/memo/write', variables)
    .then(response => {
        if (response.data.success) {
            alert('메모 작성에 성공하였습니다.')
            props.history.push('/Board')
            // console(response.data)
        } else {
            alert('메모 작성에 실패하였습니다.')
        }
    })

    }


    //이벤트 핸들러 메소드
    // handleListItemClick = (id) => {
    //     this.setState({ activeId: id });
    // }
    //편집 이벤트 핸들러
    // handleEditNote = (type, e) => {
    //     handleEditNote = (e) => {
    //     //새 notes 어레이 생성
    //     const notes = [ ...this.state.notes];

    //     //notes에서 현재 acitveId와 일치하는 노트 객체 찾기
    //     // const note = notes.find((item) => item.id === this.state.activeId)

    //     //객체의 속성에 값 할당. note.title 또는 note.contents
    //     // note[type] = e.target.value;

    //     //notes에 새 array를 할당하여 state 변경
    //     this.setState({
    //         notes,
    //     });
    // }

    // handleAddNote = () => {
    //     // const id = generateId(); //랜덤 ID생성
    //     this.setState({
    //         notes: [
    //             ...this.state.notes,
    //         {
    //             // id,
    //             title: '제목',
    //             contents: '내용',
    //         },
    //     ],
    //     // activeId : id,
    //     });
    // }

    // handleDeletNote = () => {
    //     //현재 선택한 노트를 제외한 새로운 array를 생성
    //     const notes = this.state.notes.filter((item) => item.id !== this.state.activeId);

    //     //새 arrat를 notes에 할당
    //     setState({
    //         notes,activeId: notes.length === 0 ? null : notes[0].id,
    //     });
    // }

    // const { notes, activeId } = this.state;
    // //현재 활성화 된 객체를 찾아서 activeNote 변수에 할당
    // const activeNote =  notes.filter((item) => item.id === activeId)[0];
    return(
    <div className="Memo">
    <MmHM></MmHM>
    <Logout></Logout>
    <Header
        onAddNote={handleAddNote}
        // onDeleteNote={handleDeletNote}
    ></Header>
        <div className="container">
            <List 
            // notes={notes} 
            // onListItemClick={handleListItemClick} //메소드 전달
            ></List> 

        </div>
        <div className="note">
            <input 
            className="title"
            value={title}
            onChange={onEdittitle}
            placeholder="기록일지"
            ></input>
            <textarea 
            className="note-contents"
            value={content} 
            onChange={onEditNote}
            placeholder="메모를 입력해주세요"
            ></textarea>
        </div>

    </div>
    );
}


export default Memo;

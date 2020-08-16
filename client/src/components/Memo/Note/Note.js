// import React, {Component} from 'react';
import React, { useState } from "react";
import './Note.css';
import { withRouter } from 'react-router-dom';
// import { memoUser } from '../../../_actions/user_action';
// import { useDispatch } from 'react-redux';

// class Note extends Component {
function Note(props){
    // const dispatch = useDispatch();
// render() {
    // const { note, onEditNote } = this.props;
    // const { title, contents } = note;
    const [ title, settitle ] = useState("")
    const [ content, setcontents ] = useState("")

    const onEdittitle = e => {
        settitle(e.target.value);
    };

    const onEditNote = e => {
        setcontents(e.target.value);
    };

    // let body = {
    //     title: title,
    //     contents: contents
    // }

    // dispatch(memoUser(body))
    // .then(response => {
    //     if(response.payload.success){
    //         alert('메모입력에 성공하였습니다!')
    //         props.history.push("/Login")
    //     }else {
    //         alert('메모 입력하는데 실패하였습니다.')
            
    //     } 
    // })

    return (
    <div className="note">
        <input 
        className="title"
        value={title}
        // onChange={(e) => onEditNote('title', e)}
        onChange={onEdittitle}
        placeholder="기록일지"
        ></input>
        <textarea 
        className="note-contents"
        value={content} 
        // onChange={(e) => onEditNote('contents', e)}
        onChange={onEditNote}
        placeholder="메모를 입력해주세요"
        ></textarea>
    </div>
    );
// }
}

// export default Note;
export default withRouter(Note);
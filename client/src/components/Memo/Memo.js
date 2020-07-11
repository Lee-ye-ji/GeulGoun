import React, {Component} from 'react';
import './Memo.css';
import MmHM from './MmHM/MmHM'
import Header from './Header/Header';
import List from './List/List';
import Note from './Note/Note';
import { generateId } from './utils'; //랜덤 ID 생성 함수
import Logout from '../Logout/Logout';

class Memo extends Component {
    // state 선언하기
    state = {
        notes: [
            {
                id: 'initial',
                title: '기록일지',
                contents: '추가 버튼을 하고 싶은 말을 마음껏 적어주세요!'
            }
        ],
        activeId: 'initial'
    }
    //이벤트 핸들러 메소드
    handleListItemClick = (id) => {
        this.setState({ activeId: id });
    }
    //편집 이벤트 핸들러
    handleEditNote = (type, e) => {
        //새 notes 어레이 생성
        const notes = [ ...this.state.notes];

        //notes에서 현재 acitveId와 일치하는 노트 객체 찾기
        const note = notes.find((item) => item.id === this.state.activeId)

        //객체의 속성에 값 할당. note.title 또는 note.contents
        note[type] = e.target.value;

        //notes에 새 array를 할당하여 state 변경
        this.setState({
            notes,
        });
    }

    handleAddNote = () => {
        const id = generateId(); //랜덤 ID생성
        this.setState({
            notes: [
                ...this.state.notes,
            {
                id,
                title: '제목',
                contents: '내용',
            },
        ],
        activeId : id,
        });
    }

    handleDeletNote = () => {
        //현재 선택한 노트를 제외한 새로운 array를 생성
        const notes = this.state.notes.filter((item) => item.id !== this.state.activeId);

        //새 arrat를 notes에 할당
        this.setState({
            notes,activeId: notes.length === 0 ? null : notes[0].id,
        });
    }

render(){
    const { notes, activeId } = this.state;
    //현재 활성화 된 객체를 찾아서 activeNote 변수에 할당
    const activeNote =  notes.filter((item) => item.id === activeId)[0];
    return(
    <div class="Memo">
    <MmHM></MmHM>
    <Logout></Logout>
    <Header
        onAddNote={this.handleAddNote}
        onDeleteNote={this.handleDeletNote}
    ></Header>
        <div className="container">
            <List 
            notes={notes} 
            activeId={activeId}
            onListItemClick={this.handleListItemClick} //메소드 전달
            ></List> 
            {/* {activeNote가 존재할 때 <Note></Note>를 렌더링} */}
            {/* { note 속성에 activeNote 전달 } */}
            {
                notes.length !== 0 && 
                <Note note={activeNote}
                onEditNote={this.handleEditNote} //메소드 전달
                ></Note>
            }
        </div>

    </div>
    );
}

}

export default Memo;

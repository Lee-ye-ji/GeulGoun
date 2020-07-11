
import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
render() {
    const { onAddNote, onDeleteNote } = this.props;
    return (
    <div className="header">
        <div className="title">
        <span>기록일지</span>
        </div>
        <div className="buttons">
        {/* onAddNote를 추가 버튼의 onClick 이벤트 작성 */}
        <button onClick={onAddNote}>추가</button>
        {/* onDeleteNote를 삭제 버튼의 onClick 이벤트에 작성 */}
        <button onClick={onDeleteNote}>삭제</button>
        </div>
    </div>
    );
}
}

export default Header;
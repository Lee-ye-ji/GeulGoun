import React, {Component} from 'react';
import './BTop.css';

class BTop extends Component {
render() {
    return (
    <div className="BTop">
    <h2>고민상담소</h2>
        <div className="search">
            <input className="title" placeholder="제목을 검색하세요"></input>
            <button>검색</button>
        </div>
    </div>
    );
}
}

export default BTop;
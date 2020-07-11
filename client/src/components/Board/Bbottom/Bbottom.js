import React, {Component} from 'react';
import './Bbottom.css';
// import 'bootstrap/dist/css/bootstrap.css';

class Bbottom extends Component {
render() {
    return (
    <div className="Bbottom">
        <div className="textbuttons">
            <button>글쓰기</button>
            <button>삭제</button>
        </div>

    </div>
    );
}
}

export default Bbottom;
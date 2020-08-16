import React, {Component} from 'react';
import './Bbottom.css';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

class Bbottom extends Component {
render() {
    return (
    <div className="Bbottom">
        <div className="textbuttons">
        <Link to="/Board/Write">
            <button>글쓰기</button>
        </Link>
            {/* <button>삭제</button> */}
        </div>

    </div>
    );
}
}

export default Bbottom;
import React, {Component} from 'react';
import './Table.css';

class Table extends Component {
render() {
    return (
    <div className="Table">
            <table className="table-cu">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
            <tbody>
                    <tr>
                        <td>1</td>
                        <td>안녕하세요</td>
                        <td>홍길동</td>
                        <td>2020-05-24</td>
                    </tr>
            </tbody>
            </table>
    </div>
    );
}
}

export default Table;
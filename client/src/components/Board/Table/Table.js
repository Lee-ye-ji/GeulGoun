import React, { useEffect, useState } from 'react'
import './Table.css';
import Axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
// import e from 'express';
// import Router from "next/router";

function Table(){


    const [Board, setBoard] = useState([])

    useEffect(() => {

        Axios.get('/api/board/getBoard')
        .then(response => {
            if (response.data.success) {
                setBoard(response.data.board)
            } else {
                alert('게시판 데이터 가져오는데 실패하였습니다.')
            }
        })

    }, [])

    const boardList = Board.map((board,index) => {
        
        return <tr className="tr" 
        key={board._id}
        >
        <td className="td">
            <Link to= {`/board/${board._id}`}>
                <b>{board.title}</b>
            </Link>
        </td>
        <td>
            <Link to= {`/board/${board._id}`}>
                <b>{board.writer.name}</b>
            </Link>
        </td>
            <td>
            <Link to= {`/board/${board._id}`}>
                <b>{moment(board.createdAt).format("YYYY-MM-DD")}</b>
            </Link>
            </td>
        </tr>
    })

    return (
    <div className="Table">
            <table className="table-cu">
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
            <tbody>
            { boardList }
            </tbody>
            </table>
    </div>
    );
}
// }
// }

export default Table;
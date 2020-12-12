// import React from 'react'
import React, { useEffect, useState } from 'react'
import BHM from '../BHM/BHM'
import Logout from '../../Logout/Logout';
import Axios from 'axios';
import { Form } from 'react-bootstrap';
import './BoardDetail.css';
import Comment from './Sections/Comment';




function BoardDetail(props) {

    const [Board, setBoard] = useState([])
    const boardId = props.match.params.boardId
    // const [Comment, setComment] = useState([])
    const [CommentLists, setCommentLists] = useState([])
    const boardVariable = { boardId: boardId }

    useEffect(() => {

        Axios.post('/api/board/detail', boardVariable)
        .then(response => {
            if (response.data.success) {
                // console.log(response.data)
                setBoard(response.data.board)
            } else {
                alert('게시판 정보를 가져오는데 실패하였습니다.')
            }
        })

        Axios.post('/api/comment/getComments', boardVariable)
            .then(response => {
                if (response.data.success) {
                    console.log('response.data.comments',response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('댓글 정보를 가져오는데 실패하였습니다.')
                }
            })

    }, [boardVariable])
    

    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

    const onClickUpdate = (e) => {
        e.preventDefault()
    
            Axios.post('/api/board/update', { boardId: boardId })
            .then(response => {
                if(response.data.success){
                    // Board()
                    // confirm("정말 삭제하시겠습니까?")
                    alert('수정되었습니다.')
                }else{
                    alert('수정하는데 실패하였습니다')
                }
            })
        }

    const onClickDelete = (e) => {
    e.preventDefault()

    if(window.confirm("정말 삭제하시겠습니까?")) {
        Axios.post('/api/board/delete', { boardId: boardId })
        .then(response => {
            if(response.data.success){
                alert('삭제되었습니다.')
                props.history.push('/board')
            }else{
                alert('삭제하는데 실패하였습니다')
            }
        })
    }

    }


    
    if(Board.writer){
        return (
            <div className="Board">
                <BHM></BHM>
                <Logout></Logout>
                <div className="BoardDetail">
                    <header>
                    <p>작성자:{Board.writer.name}</p> 
                    <div className="button">
                        <button onClick={onClickUpdate}>수정하기</button>
                        <button onClick={onClickDelete}>삭제하기</button>
                    </div>                
                    </header>
                    <Form.Control 
                    className = "titleStyle"
                    defaultValue= {Board.title}
                    />
                    <input 
                    className = "contentstyle"
                    defaultValue= { Board.content }
                    ></input>
                    <Comment refreshFunction={updateComment} CommentLists={CommentLists}  postId={boardId}></Comment>
                </div>
            </div>
        )
    }else{
        return(
            <div>loading...</div>
        )
    }
}

export default BoardDetail

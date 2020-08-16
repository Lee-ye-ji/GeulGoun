import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

const { TextArea } = Input;

function Comment(props) {

    const boardId = props.postId

    const user = useSelector(state => state.user)
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            content: Comment,
            writer: user.userData._id,
            postId: boardId
            // postId: props.postId
        }

        axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if (response.data.success) {
                setComment("")
                props.refreshFunction(response.data.result)
                // console.log(response.data.result)
            } else {
                alert('댓글을 저장하지 못하였습니다.')
            }
        })
    }



    return (
        <div>
            <br />
            <p>댓글</p>
            <hr />

            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="댓글을 작성해주세요."
                />
                <br />
                <Button style={{ width: '20%', height: '52px', backgroundColor:'#C6B394' }} onClick={onSubmit}> Submit </Button>
            </form>

            {/* Comment Lists  */}
            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo && 
                    <React.Fragment key={comment._id} >
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} />
                        <hr />
                    </React.Fragment>
                )
            ))}
        </div>
    )
}

export default Comment

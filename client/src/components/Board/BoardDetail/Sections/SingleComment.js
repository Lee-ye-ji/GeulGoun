import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Comment, Button, Input } from 'antd';
import Axios from 'axios';
// import moment from 'moment';

const { TextArea } = Input;

function SingleComment(props) {

    const user = useSelector(state => state.user)
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            writer: user.userData._id,
            postId: props.postId,
            responseTo: props.comment._id,
            content: CommentValue
        }


        Axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    setCommentValue("")
                    setOpenReply(!OpenReply)
                    props.refreshFunction(response.data.result)
                } else {
                    alert('댓글을 저장하는 데 실패하였습니다.')
                }
            })
    }


    const actions = [
        // <LikeDislikes comment commentId={props.comment._id} userId={localStorage.getItem('userId')} />,
        <span onClick={openReply} key="comment-basic-reply-to" > 답글 달기 </span>
    ]

    return (
        <div>
            <Comment style={{ textAlign: 'left', fontSize: '15px' }}
                actions={actions}
                author={props.comment.writer.name} 
                content={
                    <p style={{ color: 'brown', fontSize: '20px'}}>
                        {props.comment.content}
                    </p>
                }
                // datetime={ moment(props.comment.createdAt).format("YYYY-MM-DD") }
            ></Comment>

            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <TextArea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={handleChange}
                        value={CommentValue}
                        placeholder="댓글을 작성해주세요."
                    />
                    <br />
                    <Button style={{ width: '20%', height: '52px', backgroundColor:'#f3d066'}} onClick={onSubmit} >Submit</Button>
                </form>
            }

        </div>
    )
}

export default SingleComment

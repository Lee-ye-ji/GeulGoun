import { withRouter } from 'react-router-dom'; 
import React from 'react';
import axios from 'axios';
import './Logout.css';

function Logout(props){

    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            if (response.data.success) {
                props.history.push("/")
            } else {
                alert('로그아웃 하는데 실패 했습니다.')
            }
    })
}

return(
        <div className="logoutbtn">
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>

)
}
// }
export default withRouter(Logout)
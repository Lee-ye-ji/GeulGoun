import React, {Component} from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

class List extends Component {
render() {
    // const { 
    //     notes, 
    //     activeId,
    //     onListItemClick //전달 받은 이벤트 핸들러
    // } = this.props;
    return (
    <div className="list">
    {/* {notes.map((item) => {
        const { id, title, contents } = item; */}
            <ListItem 
                // key={id}
                // id={id}
                // active={id === activeId}
                // title = {title}
                // contents={contents}
                // onListItemClick={() => onListItemClick(id)} //메소드 전달
            ></ListItem>
    {/* })} */}
    </div>
    );
}
}

export default List;
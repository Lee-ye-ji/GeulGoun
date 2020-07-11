import React, {Component} from 'react';
import './Note.css';

class Note extends Component {
render() {
    const { note, onEditNote } = this.props;
    const { title, contents } = note;
    return (
    <div className="note">
        <input 
        className="title"
        value={title}
        onChange={(e) => onEditNote('title', e)}
        ></input>
        <textarea 
        className="note-contents"
        value={contents} 
        onChange={(e) => onEditNote('contents', e)}
        ></textarea>
    </div>
    );
}
}

export default Note;
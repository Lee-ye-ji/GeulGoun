import React, {Component} from 'react';
import './Join.css';
import JLg from './JLg/JLg'
import JHM from './JHM/JHM';
import JForm from './JForm/JForm';


class Join extends Component {
    render(){
        return(
        <div className="Join">
        <JHM></JHM>
        <JLg></JLg>
        <JForm></JForm>
        </div>
            
        );
    }
    
    }

export default Join;
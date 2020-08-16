import React, {Component} from 'react';
import Content from './Content';
import Logo from '../../../main/Logo/Logo';
import JHM from '../../../Join/JHM/JHM';
import './School.css';


class School extends Component {
    render(){
        return(
        <div className="School">
            <div className="WHM"><JHM></JHM></div>
            <div className="WLogo"><Logo></Logo></div>
            <div className="WContent"><Content></Content></div>
        </div>
        );
    }

}

export default School;


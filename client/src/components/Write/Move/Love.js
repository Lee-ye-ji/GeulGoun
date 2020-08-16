import React, {Component} from 'react';
import JHM from '../../Join/JHM/JHM';
import Logo from '../../main/Logo/Logo';
import Content from './Content';
import './Love.css';

class Love extends Component {
    render(){
        return(
        <div className="Love">
            <div className="LHM"><JHM></JHM></div>
            <div className="LLogo"><Logo></Logo></div>
            <div className="LContent"><Content></Content></div>
        </div>
        );
    }

}

export default Love;
import React, {Component} from 'react';
import Content from './Content';
import Logo from '../../../main/Logo/Logo';
import JHM from '../../../Join/JHM/JHM';


class Diet extends Component {
    render(){
        return(
        <div className="Diet">
            <div className="DHM"><JHM></JHM></div>
            <div className="DLogo"><Logo></Logo></div>
            <div className="DContent"><Content></Content></div>
        </div>
        );
    }

}

export default Diet;
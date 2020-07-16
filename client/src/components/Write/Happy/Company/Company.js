import React, {Component} from 'react';
import Content from './Content';
import Logo from '../../../main/Logo/Logo';
import JHM from '../../../Join/JHM/JHM';
import './Company.css';


class Company extends Component {
    render(){
        return(
        <div class="Company">
            <div className="CHM"><JHM></JHM></div>
            <div className="CLogo"><Logo></Logo></div>
            <div className="CContent"><Content></Content></div>
        </div>
        );
    }

}

export default Company;
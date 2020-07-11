import React, {Component} from 'react';
import Logo from "../../main/Logo/Logo";
import HM from "../../main/HM/HM";
import './Dream.css';
import DL from './DL/DL';
import Dmenu from './Dmenu/Dmenu';
import DR from './DR/DR';

class Dream extends Component {
render(){
    return(
    <div class="Dream">
        <HM></HM>
        <div className="logo"><Logo></Logo></div>
        <div className="Dreambd">
            <DL></DL>
            <Dmenu></Dmenu>
            <DR></DR>
        </div>
    </div>
    );
}

}

export default Dream;
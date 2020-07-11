import React, {Component} from 'react';
import Logo from "../../../main/Logo/Logo";
import HM from "../../../main/HM/HM";
import './Love.css';
import LL from '../LoveCollection/LL/LL';
import LR from '../LoveCollection/LR/LR';
import Lmenu from '../LoveCollection/Lmenu/Lmenu';

class Love extends Component {
render(){
    return(
    <div class="Love">
        <div className="HM"><HM></HM></div>
        <Logo></Logo>
        <div className="Lovebd">
            <LL></LL>
            <Lmenu></Lmenu>
            <LR></LR>
        </div>
    </div>
    );
}

}

export default Love;
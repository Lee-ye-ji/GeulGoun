import React, {Component} from 'react';
import './LDP.css'
import LDPHM from './LDPHM/LDPHM';
import Menu from '../main/Menu/Menu';
import Logo from '../main/Logo/Logo';
import Lmenu from '../LDP/Love/LoveCollection/Lmenu/Lmenu';
import Dmenu from '../LDP/Dream/Dmenu/Dmenu';
import Pmenu from '../LDP/People/Pmenu/Pmenu';

class LDP extends Component {
render(){
    return(
    <div className="LDP">
    <LDPHM></LDPHM>
    <div className="logo"><Logo></Logo></div>
    <div className="menu"><Menu></Menu></div>
        <div className="LDPmenu">
            <div className="L"><Lmenu></Lmenu></div>
            <div className="D"><Dmenu></Dmenu></div>
            <div className="P"><Pmenu></Pmenu></div>
        </div>
    </div>
        
    );
}

}

export default LDP;
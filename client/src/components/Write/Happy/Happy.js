import React, {Component} from 'react';

import JHM from '../../Join/JHM/JHM';
import Logo from '../../main/Logo/Logo';
import CardCT from './CardCT';
import './Happy.css';

class Happy extends Component {
    render(){
        return(
        <div className="Happy">
        <JHM></JHM>
        <Logo></Logo>
        <CardCT></CardCT>
    
        </div>
        );
    }

}

export default Happy;